/* Mongoose - It is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level, schema-based abstraction over the raw MongoDB driver, making it easier to work with MongoDB databases in a Node.js environment*/

const myMongoose = require("mongoose");

myMongoose
  .connect("mongodb://127.0.0.1:27017/ece")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((e) => {
    console.error(e);
  });
