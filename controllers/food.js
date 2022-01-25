const fs = require("fs");
const path = require("path");

let version = 1;
const filePath = path.join(__dirname, "..", "data", "food.json");

exports.listFood = (req, res, next) => {
  try {
    const jsonString = fs.readFileSync(filePath);
    const food = JSON.parse(jsonString);
    res.status(200).json({ success: true, food });
  } catch (err) {
    console.log(err);

    res
      .status(404)
      .json({ success: false, message: "Error in reading data file" });
  }
};

exports.addFood = (req, res, next) => {
  try {
    const food = {
      name: "Pie",
      location: "America",
      category: "Desert",
      version: version++,
    };

    const jsonString = JSON.stringify(food);
    fs.writeFileSync(filePath, jsonString);
    res
      .status(201)
      .json({ success: true, message: "Inserted data succesfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: "Error in writing data" });
  }
};
