const myMongoose = require("mongoose");
const Students = require("./User");

myMongoose
  .connect("mongodb://127.0.0.1:27017/ece")
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

//store the documents in created collection
// Method1 : using then & catch methods
const student1 = new Students({ name: "Sanga", age: 23 });
student1
  .save()
  .then(() => console.log("Data stored"))
  .catch((e) => console.log(e.message));

// Method2 : using async fnc
// async function studentData() {
//   try {
//     const student1 = new Students({ name: "Sanga", age: 23 });
//     await student1.save();
//     console.log("Data stored");
//   } catch (err) {
//     console.log(err);
//   }
// }

// studentData();

// Method3 : using create method inside the async fnc
// async function studentData() {
//   try {
//     await Students.create({ name: "Sanga", age: 23 });
//     console.log("Student1 data stored");
//   } catch (err) {
//     console.log(err);
//   }
// }

// studentData();

// eg; 2.0
// const myMongoose = require("mongoose");
// const cskPlayer = require("./User");

// myMongoose
//   .connect("mongodb://127.0.0.1:27017/ipl2024")
//   .then(() => console.log("Connected to DB"))
//   .catch((error) => console.error("Failed to connect DB:", error));

// async function newPlayer() {
//   try {
//     const player = new cskPlayer({ name: "Dhoni", jerseyNo: 7 });
//     await player.save();
//     console.log("player added");
//   } catch (err) {
//     console.log(err);
//   }
// }

// newPlayer();
