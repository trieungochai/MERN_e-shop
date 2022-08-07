const express = require("express");
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const productRouter = express.Router();

productRouter.route("/").post(createProduct).get(getAllProducts);
productRouter
  .route("/:id")
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = productRouter;
