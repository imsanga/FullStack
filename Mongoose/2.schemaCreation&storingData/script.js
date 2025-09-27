const mongoose = require("mongoose");
const Students = require("./User");

mongoose
  .connect("mongodb://127.0.0.1:27017/25to29")
  .then(() => console.log("Connected to Db"))
  .catch((err) => console.log(err.message));

// const student1 = new Students({ name: "Sanga", age: 17 });
// student1
//   .save()
//   .then(() => console.log("student saved"))
//   .catch((err) => console.log(err.message));

// async function studentCreation() {
//   try {
//     const student2 = new Students({ name: "Santha", totalMark: 1131 });
//     await student2.save();
//     console.log("student saved");
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// studentCreation();

async function studentCreation() {
  try {
    await Students.create({ name: "Natarajan", totalMark: 892 });
    console.log("student saved");
  } catch (err) {
    console.log(err.message);
  }
}

studentCreation();
