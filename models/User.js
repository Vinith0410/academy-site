const mongoose = require("mongoose");

const formschema = new mongoose.Schema({
  name:{ type: String, required: true },
  email:{ type: String, required: true },
  password:{ type: String, required: true },
});

const data = mongoose.model("user", formschema)

module.exports = data;