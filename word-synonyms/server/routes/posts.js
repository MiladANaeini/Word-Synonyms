const express = require("express");
const data = require("../data.json");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("req.body", req.body);
  const { word, synonym } = req.body;
  if (!word || !synonym) {
    return res
      .status(400)
      .json({ error: "Both 'word' and 'synonym' are required" });
  }

  groupId = Date.now();
  data.words.push({ value: word, groupId: groupId });
  data.words.push({ value: synonym, groupId: groupId });

  // Respond with the newly created word and synonym
  res.status(201).json({
    message: "Word and synonym created successfully",
    word,
    synonym,
    groupId,
  });
});

module.exports = router;
