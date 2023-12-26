//6.2 - routes
const myExpress = require("express");
const myRouter = myExpress.Router();

myRouter.get("/addProduct", (req, res) => {
  res.send(
    '<h1>Add product</h1> <form action="/admin/storeProduct" method="POST"> <input type="text" name="title"> &nbsp&nbsp<input type="submit" value="submit"/> </form>'
  );
  console.log("addProduct");
});
myRouter.post("/storeProduct", (req, res) => {
  res.send(`<h1>Store Product: ${req.body.title}</h1>`);
  console.log(`storeProduct`);
});

module.exports = myRouter;
