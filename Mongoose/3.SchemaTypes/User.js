//Schema Creation
const schemaMongoose = require("mongoose");

const addressSchema = new schemaMongoose.Schema({
  street: String,
  city: String,
});

const mySchema = new schemaMongoose.Schema({
  name: String,
  age: Number,
  email: String,
  createdAt: Date,
  updatedAt: Date,
  bestFriend: schemaMongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  address: addressSchema,
});

//model creation
module.exports = schemaMongoose.model("Students", mySchema);
