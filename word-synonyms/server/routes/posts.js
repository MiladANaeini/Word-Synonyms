const express = require("express");
const data = require("../data.json");
const router = express.Router();

router.post("/", (req, res) => {
  const { word, synonym } = req.body;
  if (!word || !synonym) {
    return res
      .status(400)
      .json({ error: "Both 'word' and 'synonym' are required" });
  }
  const wordsExist = data.words.find((element) => element.value === word);
  const synonymExist = data.words.find((element) => element.value === synonym);
  if (wordsExist || synonymExist) {
    return res.status(404).json({
      error:
        "The provided 'word' and/or 'synonym' alredy exists in another group",
    });
  }

  groupId = Date.now();
  data.words.push({ value: word, groupId: groupId });
  data.words.push({ value: synonym, groupId: groupId });
  console.log("data", data);

  // Respond with the newly created word and synonym
  res.status(201).json({
    message: "Word and Synonym created successfully",
    word,
    synonym,
    groupId,
  });
});

module.exports = router;
