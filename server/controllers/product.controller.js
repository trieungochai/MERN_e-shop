const Product = require("../models/Product.model");
const Category = require("../models/Category.model");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  const {
    name,
    description,
    richDescription,
    image,
    // images,
    brand,
    price,
    category,
    countInStock,
    rating,
    numReviews,
    isFeatured,
    // createdDate,
  } = req.body;
  if (!name || !description || !price || !category) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Please provide a value for the required field",
    });
  }

  const categoryAlreadyExists = await Category.findById(category);
  if (!categoryAlreadyExists) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, message: "Invalid Category" });
  }

  try {
    const newProduct = await Product.create({
      name,
      description,
      richDescription,
      image,
      brand,
      price,
      category,
      countInStock,
      rating,
      numReviews,
      isFeatured,
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
    const products = await Product.find({}).populate("category");
    return res.status(StatusCodes.OK).json({
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

const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  const idAlreadyExists = await Product.findOne({ _id: id });
  if (!idAlreadyExists) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: `No Category was found for the given ID: ${id}`,
    });
  }

  try {
    const product = await Product.findById({ _id: id }).populate("category");
    return res.status(StatusCodes.OK).json({ success: true, product });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { createProduct, getAllProducts, getSingleProduct };
