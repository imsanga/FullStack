/*schema - In Mongoose, a schema defines the structure of the documents within a MongoDB collection. It specifies the fields, their types, validation rules, default values, and other options*/

//Schema Creation
const schemaMongoose = require("mongoose");

const mySchema = new schemaMongoose.Schema({
  name: String,
  age: Number,
});

//model creation
module.exports = schemaMongoose.model("Students", mySchema);
