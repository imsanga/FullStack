// routes
const myExpress = require("express");
const myRouter = myExpress.Router();

myRouter.get("/addProduct", (req, res) => {
  res.render("addProduct", {
    title: "addProduct with EJS",
    userDetails: {
      valid: true,
      username: "testUser",
    },
  });
  console.log("addProduct");
});
myRouter.post("/storeProduct", (req, res) => {
  res.render("storeProduct", {
    title: "storeProduct with EJS",
    input: req.body.title,
  });
  console.log(`storeProduct`, req.body);
});

module.exports = myRouter;
