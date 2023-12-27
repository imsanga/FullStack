// routes
const myExpress = require("express");
const myRouter = myExpress.Router();
const myPath = require("path");
const myDirectory = require("../utils/path");

myRouter.get("/addProduct", (req, res) => {
  res.sendFile(myPath.join(myDirectory, "views", "addProduct.html"));
  console.log("addProduct");
});
myRouter.post("/storeProduct", (req, res) => {
  res.sendFile(myPath.join(myDirectory, "views", "storeProduct.html"));
  console.log(`storeProduct`, req.body);
});

module.exports = myRouter;
