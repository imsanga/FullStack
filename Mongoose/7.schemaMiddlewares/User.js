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
    max: 60,
  },
  email: {
    type: String,
    lowercase: true,
    minLngth: 10,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
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

mySchema.methods.sayHi = function () {
  console.log(`Hi ${this.name}`);
};

mySchema.methods.sayBye = function () {
  console.log(`Bye ${this.name}`);
};

mySchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
  throw Error("Middleware Failed");
});

mySchema.post("save", function (doc) {
  doc.sayHi();
  doc.sayBye();
});

//model creation
module.exports = schemaMongoose.model("Students", mySchema);
