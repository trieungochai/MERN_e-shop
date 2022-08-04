const express = require("express");
const {
  createProduct,
  getAllProducts,
} = require("../controllers/product.controller");

const productRouter = express.Router();

productRouter.route("/").post(createProduct).get(getAllProducts);

module.exports = productRouter;
