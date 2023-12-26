// routes
const myExpress = require("express");
const myRouter = myExpress.Router();
const myPath = require("path");

myRouter.get("/addProduct", (req, res) => {
  res.sendFile(myPath.join(__dirname, "..", "views", "addProduct.html"));
  console.log("addProduct");
});
myRouter.post("/storeProduct", (req, res) => {
  res.sendFile(myPath.join(__dirname, "..", "views", "storeProduct.html"));
  console.log(`storeProduct`, req.body);
});

module.exports = myRouter;
