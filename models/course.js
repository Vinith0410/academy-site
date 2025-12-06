const mongoose = require("mongoose");

const courseschema = new mongoose.Schema({
  name:{ type: String, required: true },
  price:{ type: Number, required: true },
  oldPrice:{ type: Number, required: true },
  duration:{ type: String, required: true },
  img:{ type: String, required: true },
  tag:{ type: String, required: true },
  desc:{ type: String, required: true },
  points:{ type: [String], required: true },
  createdAt:{ type: Date, default: Date.now }
});

const course = mongoose.model("course", courseschema)

module.exports = course;