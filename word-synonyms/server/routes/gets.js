const express = require("express");
const router = express.Router();
const data = require("../data.json");

// ROUTES
// ============== search API ===============
router.get("/:word", (req, res) => {
  const word = req.params.word;
  if (!word) {
    return res.status(400).json({ error: "Word parameter is required" }); //Bad req
  }

  const theWord = data.words.find(
    (element) => element.value.toLocaleLowerCase() === word.toLocaleLowerCase()
  );

  if (!theWord) {
    return res
      .status(404)
      .json({ error: "This word does not exist in our database" });
  }
  const synonyms = data.words.filter(
    (element) => element.groupId === theWord.groupId
  );

  res.json(synonyms);
});

router.get("/", (req, res) => {
  return res.status(400).json({ error: "Word parameter is required" });
});

module.exports = router;
