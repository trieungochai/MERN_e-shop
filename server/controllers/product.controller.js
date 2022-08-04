const Product = require("../models/Product.model");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  const { name, image, countInStock } = req.body;
  if (!name || !image) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Please provide a value for the required field",
    });
  }

  try {
    const newProduct = await Product.create({
      name,
      image,
      countInStock: countInStock || 1,
    });

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Created successfully",
      product: newProduct,
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(StatusCodes.CREATED).json({
      success: true,
      products,
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { createProduct, getAllProducts };
