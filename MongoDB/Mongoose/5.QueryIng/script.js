const myMongoose = require("mongoose");
const Students = require("./User");

myMongoose
  .connect("mongodb://127.0.0.1:27017/ece")
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

//store the documents in created collection
async function studentData() {
  try {
    // const student1 = await Students.findById("65a1a7cbb579fa4fe70fa17e");
    // const student1 = await Students.find({ name: "Sanga" });
    // const student1 = await Students.exists({ name: "Sanga" });

    const student1 = await Students.where("name")
      .gt(12)
      .lt(27)
      .equals("Sanga")
      // .populate("bestFriend")
      .limit(1);
    student1[0].bestFriend = "65a1a0d0f44190cef2a6fb4a";
    await student1[0].save();
    console.log(student1);
  } catch (err) {
    console.log(err.message);
  }
}

studentData();
