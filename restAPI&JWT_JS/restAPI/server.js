const express = require("express");
const mongoose = require("mongoose");
const Products = require("./models/productModel");
const crudApp = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/crudAPI")
  .then(() => {
    console.log("DB Connected!!!");
    crudApp.listen(5500, () => console.log("CRUD API is running on port 5500"));
  })
  .catch((e) => console.log(e.message));

crudApp.use(express.json());

crudApp.get("/", (req, res) => {
  res.send("Hello JS!!! - CRUD using Node, Express & MongoDB");
});

crudApp.get("/blog", (req, res) => {
  res.send("Hello Sanga, welcome to the world to JS!!!");
});
// Create a Product - POST
crudApp.post("/products", async (req, res) => {
  try {
    const products = await Products.create(req.body);
    res.status(200).json(products);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

// Fetch a Product - GET
crudApp.get("/products", async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).json(products);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

// Fetch a Product by id - GET
crudApp.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Products.findById(id);
    if (!products) {
      // Product with the specified ID was not found
      return res
        .status(404)
        .json({ message: `the requested id: ${id} was not found` });
    }
    res.status(200).json(products);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

// Update a Product by id - PUT
crudApp.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Products.findByIdAndUpdate(id, req.body);
    const products = await Products.findById(id);
    res.status(200).json(products);
  } catch (err) {
    if (err.name === "CastError" && err.kind === "ObjectId") {
      // Handling the case where an incorrect ObjectId is provided
      const { id } = req.params;
      return res.status(404).json({
        message: `the object id < ${id} > ur looking for is not found`,
      });
    }
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Delete a Product by id - DELETE
crudApp.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Products.findByIdAndDelete(id, req.body);
    if (!products) {
      // Product with the specified ID was not found
      return res
        .status(404)
        .json({ message: `the requested id: ${id} was not found` });
    }
    res
      .status(200)
      .json({ message: `${products.name} product has been Deleted!!!` });
  } catch (err) {
    if (err.name === "CastError" && err.kind === "ObjectId") {
      // Handling the case where an incorrect ObjectId is provided
      const { id } = req.params;
      return res.status(404).json({
        message: `the object id < ${id} > ur looking for is not found`,
      });
    }
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
