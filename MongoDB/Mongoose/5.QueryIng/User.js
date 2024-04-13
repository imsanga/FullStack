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
    validate: {
      validator: (value) => value % 2 === 0,
      message: (props) => `${props.value} is not even `,
    },
  },
  email: {
    type: String,
    lowercase: true,
    minLength: 10,
  },
  createdAt: {
    type: Date,
    immutable: true,
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
