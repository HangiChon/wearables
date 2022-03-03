"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {
  getAllProducts,
  getAllBrands,
  getSingleProduct,
  getSingleBrand,
  getAllCategories,
  getSingleCategory,
  createOrder,
  updateStock
} = require("./handlers/handlers");


const PORT = 4000;

const app = express();

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(morgan("tiny"));
app.use(express.static("./server/assets"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(__dirname + "/"));

// REST endpoints?
app.get("/api/products/:productId", getSingleProduct);
app.get("/api/products", getAllProducts);
app.get("/api/brands/:brandName", getSingleBrand);
app.get("/api/brands", getAllBrands);
app.get("/api/categories/:categoryName", getSingleCategory);
app.get("/api/categories", getAllCategories);
app.post("/api/order", createOrder);
app.patch("/api/products/:productId/update", updateStock);

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
