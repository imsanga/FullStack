const myMongoose = require("mongoose");

myMongoose
  .connect("mongodb://127.0.0.1:27017/college")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((e) => {
    console.error(e);
  });
