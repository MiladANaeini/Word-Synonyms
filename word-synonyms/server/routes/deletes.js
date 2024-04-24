const express = require("express");
const data = require("../data.json");
const router = express.Router();

router.delete("/:word", (req, res) => {
  const word = req.params.word;

  if (!word) {
    return res.status(400).json({ error: "word is required" });
  }

  const wordExists = data.words.find(
    (element) => element.value.toLocaleLowerCase() === word.toLocaleLowerCase()
  );
  if (!wordExists) {
    return res.status(404).json({ error: "The provided word doesn't exist" });
  }

  data.words = data.words.filter(
    (element) => element.value.toLocaleLowerCase() !== word.toLocaleLowerCase()
  );

  res.status(200).json({
    message: "Word was removed successfully",
  });
});

module.exports = router;
