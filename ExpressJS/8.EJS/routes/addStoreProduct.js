// routes
const myExpress = require("express");
const myRouter = myExpress.Router();

myRouter.get("/addProduct", (req, res) => {
  res.render("addProduct", { title: "addProduct with EJS" });
  console.log("addProduct");
});
myRouter.post("/storeProduct", (req, res) => {
  res.render("storeProduct", { title: "storeProduct with EJS" });
  console.log(`storeProduct`, req.body);
});

module.exports = myRouter;
