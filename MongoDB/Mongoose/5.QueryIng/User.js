//Schema Creation
const schemaMongoose = require("mongoose");

const addressSchema = new schemaMongoose.Schema({
  street: String,
  city: String,
});

const mySchema = new schemaMongoose.Schema({
  name: String,
  age: {
    type: Number,
    required: true,
    min: 1,
    max: 30,
  },
  email: {
    type: String,
    lowercase: true,
    minLngth: 10,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  bestFriend: {
    type: schemaMongoose.SchemaTypes.ObjectId,
    ref: "Students",
  },
  hobbies: [String],
  address: addressSchema,
});

//model creation
module.exports = schemaMongoose.model("Students", mySchema);
