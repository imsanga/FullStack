//5.1 - indexPage
const myExpress2 = require("express");
const app5 = myExpress2();
const bodyParser = require("body-parser");
const adminRoutes = require("./5.2routes");

app5.use(bodyParser.urlencoded({ extended: true }));
app5.use(adminRoutes);
app5.use((req, res) => {
  res.status(404).send("<h1>404 page Not Found</h1>");
});
app5.listen(5500);
