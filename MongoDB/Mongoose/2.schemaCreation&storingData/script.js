const myMongoose = require("mongoose");
const Students = require("./User");

myMongoose
  .connect("mongodb://127.0.0.1:27017/ece")
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

//store the documents in created collection
// Method1 : using then & catch methods
// const student1 = new Students({ name: "Sanga", age: 23 });
// student1
//   .save()
//   .then(() => console.log("Student1 data stored"))
//   .catch((e) => console.log(e));

// Method2 : using async fnc
// async function studentData() {
//   try {
//     const student1 = new Students({ name: "Sanga", age: 23 });
//     await student1.save();
//     console.log("Student1 data stored");
//   } catch (err) {
//     console.log(err);
//   }
// }

// studentData();

// Method3 : using create method inside the async fnc
async function studentData() {
  try {
    const student1 = await Students.create({ name: "Sanga", age: 23 });
    await student1.save();
    console.log("Student1 data stored");
  } catch (err) {
    console.log(err);
  }
}

studentData();
