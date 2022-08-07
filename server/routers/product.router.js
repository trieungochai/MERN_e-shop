const express = require("express");
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getProductCount,
  getFeaturedProducts,
  getProductsByCategories,
} = require("../controllers/product.controller");

const productRouter = express.Router();

productRouter
  .route("/")
  .post(createProduct)
  .get(getAllProducts)
  .get(getProductsByCategories);
productRouter.route("/get/count").get(getProductCount);
productRouter.route("/get/featured/:limit").get(getFeaturedProducts);
productRouter
  .route("/:id")
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = productRouter;
