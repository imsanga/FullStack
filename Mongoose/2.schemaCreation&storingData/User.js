/*schema - In Mongoose, a schema defines the structure of the documents within a MongoDB collection. It specifies the fields, their types, validation rules, default values, and other options*/

const mongoose = require("mongoose");

//Schema Creation - Schema defines the structure of documents
const schema = new mongoose.Schema({ name: String, totalMark: Number });

//model creation - Model is the interface to interact with the collection using that structure
module.exports = mongoose.model("Std12", schema);

// eg : 2.0
// const myMongoose = require("mongoose");

// const teams = new myMongoose.Schema({
//   playerName: String,
//   jerseyNo: Number,
// });
// // Explicitly setting the collection name to 'CSK' or it automatically pluralize to "csks"
// module.exports = myMongoose.model("CSK", teams, "CSK");
