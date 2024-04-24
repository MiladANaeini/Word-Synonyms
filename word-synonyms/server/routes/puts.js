const express = require("express");
const data = require("../data.json");
const router = express.Router();

router.put("/:groupId", (req, res) => {
  const groupId = req.params.groupId;
  const synonym = req.body.synonym;

  if (!groupId || !synonym) {
    return res.status(400).json({ error: "groupId and synonym are required" });
  }

  const groupIdExists = data.words.find(
    (element) => element.groupId === groupId
  );
  if (!groupIdExists) {
    return res
      .status(404)
      .json({ error: "The provided groupId doesn't exist" });
  }

  data.words.push({ value: synonym, groupId: groupId });

  // Respond with the newly created word and synonym
  res.status(201).json({
    message: "Synonynm was added successfully",
    synonym,
    groupId,
  });
});

module.exports = router;
