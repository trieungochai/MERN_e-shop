const express = require("express");
const {
  createCategory,
  getAllCategories,
  getSingleCategory,
  deleteCategory,
} = require("../controllers/category.controller");

const categoryRouter = express.Router();

categoryRouter.route("/").post(createCategory).get(getAllCategories);
categoryRouter.route("/:id").get(getSingleCategory).delete(deleteCategory);

module.exports = categoryRouter;
