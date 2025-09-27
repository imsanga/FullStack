//using body-parser
const myExpress = require("express");
const app4 = myExpress();
const bodyParser = require("body-parser");

app4.use(bodyParser.urlencoded({ extended: true }));
app4.get("/addProduct", (req, res) => {
  res.send(
    '<h1>Add product</h1> <form action="/storeProduct" method="POST"> <input type="text" name="title"> &nbsp&nbsp<input type="submit" value="submit"/> </form>'
  );
  console.log("addProduct");
});
app4.post("/storeProduct", (req, res) => {
  res.send(`<h1>Store Product: ${req.body.title}</h1>`);
  console.log(`storeProduct`);
});

app4.listen(5500);

//Alternate method
// const myExpress = require("express");
// const app4 = myExpress();

// const parserMiddleware = myExpress.urlencoded({ extended: true });
// app4.get("/addProduct", (req, res) => {
//   res.send(
//     '<h1>Add product</h1> <form action="/storeProduct" method="POST"> <input type="text" name="title"> &nbsp&nbsp<input type="submit" value="submit"/> </form>'
//   );
//   console.log("addProduct");
// });
// app4.post("/storeProduct", parserMiddleware, (req, res) => {
//   console.log(req.body);
//   res.send(`<h1>Store Product: ${req.body.title}</h1>`);
//   console.log(`storeProduct`);
// });

// app4.listen(5500);
