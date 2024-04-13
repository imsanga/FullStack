const myMongoose = require("mongoose");
const Students = require("./User");

myMongoose
  .connect("mongodb://127.0.0.1:27017/ece")
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

//store the documents in created collection
async function studentData() {
  try {
    await Students.create({
      name: "Sanga",
      age: 23,
      email: "imsanga05@gmail.com",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      hobbies: ["Coding", "Reading blogs", "Watching Youtube"],
      address: {
        street: "No:5, south mariana road, sydney's castle",
        city: "Sydney, Australia",
      },
    });
    console.log("Data stored");
  } catch (err) {
    console.log(err.message);
  }
}

studentData();
