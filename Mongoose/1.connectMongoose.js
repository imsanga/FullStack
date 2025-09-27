// Mongoose
// * It is an Object Data Modeling (ODM) library for MongoDB.
// * It provides a schema-based abstraction over the raw MongoDB driver.

const myMongoose = require("mongoose");

myMongoose
  .connect("mongodb://127.0.0.1:27017/ece")
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.error(e));
