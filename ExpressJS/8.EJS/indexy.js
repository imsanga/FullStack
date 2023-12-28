// indexPage - (indexy.js)
const myExpress2 = require("express");
const app5 = myExpress2();
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/addStoreProduct");

app5.use(bodyParser.urlencoded({ extended: true }));
app5.set("view engine", "ejs");
app5.use(adminRoutes);
app5.use((req, res) => {
  res.status(404).send("<h1>404 page Not Found</h1>");
});
app5.listen(5500);
