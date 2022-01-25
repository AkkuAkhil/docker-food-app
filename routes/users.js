const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.json({ success: true, user: { name: "Akhil", age: 22 } });
});

module.exports = router;
