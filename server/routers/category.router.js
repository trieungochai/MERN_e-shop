const express = require("express");
const {
  createCategory,
  getAllCategories,
  deleteCategory,
} = require("../controllers/category.controller");

const categoryRouter = express.Router();

categoryRouter.route("/").post(createCategory).get(getAllCategories);
categoryRouter.route("/:id").delete(deleteCategory);

module.exports = categoryRouter;
