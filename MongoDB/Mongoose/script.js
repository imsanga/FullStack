const myMongoose = require("mongoose");
const userCreation = require("./User");

myMongoose
  .connect("mongodb://127.0.0.1:27017/ece")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((e) => {
    console.error(e);
  });

async function storeinDB() {
  // const user1 = new userCreation({ name: "Sanga", age: 23 });
  const user2 = await userCreation.create({ name: "Santha", age: 46 });
  await user2.save();
  console.log("User2 is created");
}

storeinDB();
