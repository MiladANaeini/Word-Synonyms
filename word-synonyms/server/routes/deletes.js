const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.delete("/:word", (req, res) => {
  const word = req.params.word;

  if (!word) {
    return res.status(400).json({ error: "word is required" });
  }

  const dataPath = path.join(__dirname, "../data.json");
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    // Parse the JSON data
    const jsonData = JSON.parse(data);
    const wordExists = jsonData.words.find(
      (element) =>
        element.value.toLocaleLowerCase() === word.toLocaleLowerCase()
    );
    if (!wordExists) {
      return res.status(404).json({ error: "The provided word doesn't exist" });
    }

    jsonData.words = jsonData.words.filter(
      (element) =>
        element.value.toLocaleLowerCase() !== word.toLocaleLowerCase()
    );
    // Write the updated JSON data back to the file
    fs.writeFile(dataPath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }

      res.status(200).json({
        message: "Word was removed successfully",
      });
    });
  });
});

module.exports = router;
