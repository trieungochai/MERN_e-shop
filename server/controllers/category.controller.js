const Category = require("../models/Category.model");
const { StatusCodes } = require("http-status-codes");

const createCategory = async (req, res) => {
  const { name, color, icon } = req.body;
  if (!name) {
    return res
      .status(StatusCodes.BAD_GATEWAY)
      .json({ success: false, message: "Please provide category name" });
  }

  try {
    const newCategory = await Category.create({ name, color, icon });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Created successfully",
      category: newCategory,
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    return res.status(StatusCodes.OK).json({
      success: true,
      categories,
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const getSingleCategory = async (req, res) => {
  const { id } = req.params;
  const idAlreadyExists = await Category.findOne({ _id: id });
  if (!idAlreadyExists) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: `No Category was found for the given ID: ${id}`,
    });
  }

  try {
    const category = await Category.findById({ _id: id });
    return res.status(StatusCodes.OK).json({
      success: true,
      category,
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const idAlreadyExists = await Category.findOne({ _id: id });
  if (!idAlreadyExists) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: `No Category was found for the given ID: ${id}`,
    });
  }

  try {
    const deletedCategory = await Category.findByIdAndRemove({ _id: id });
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Deleted successfully",
      deletedCategory,
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const updateCategory = async (req, res) => {
  const {
    params: { id },
    body: { name, color, icon },
  } = req;
  const idAlreadyExists = await Category.findOne({ _id: id });
  if (!idAlreadyExists) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: `No Category was found for the given ID: ${id}`,
    });
  }

  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      { _id: id },
      { name, color, icon },
      { new: true, runValidators: true }
    );
    return res.status(StatusCodes.OK).json({
      success: true,
      updatedCategory,
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  deleteCategory,
  updateCategory,
};
