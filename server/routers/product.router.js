const express = require("express");
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
} = require("../controllers/product.controller");

const productRouter = express.Router();

productRouter.route("/").post(createProduct).get(getAllProducts);
productRouter.route("/:id").get(getSingleProduct);

module.exports = productRouter;
