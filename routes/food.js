const express = require("express");
const router = express.Router();
const foodController = require("../controllers/food");

router.get("/", foodController.listFood);
router.get("/add", foodController.addFood);

module.exports = router;
