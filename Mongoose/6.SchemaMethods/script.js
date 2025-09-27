const myMongoose = require("mongoose");
const Students = require("./User");

myMongoose
  .connect("mongodb://127.0.0.1:27017/ece")
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

//store the documents in created collection
async function studentData() {
  try {
    // const student1 = await Students.findYname("Santha");
    // const student1 = await Students.find().findZname("Santha");
    const student1 = await Students.find({
      name: "Santha",
    });
    console.log(student1);
    console.log(student1[0].namedEmail);
  } catch (err) {
    console.log(err.message);
  }
}

studentData();
