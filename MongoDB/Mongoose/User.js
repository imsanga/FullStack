/*schema - In Mongoose, a schema defines the structure of the documents within a MongoDB collection. It specifies the fields, their types, validation rules, default values, and other options*/

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model("User", userSchema);
