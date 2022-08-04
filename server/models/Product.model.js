const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  image: {
    type: String,
    required: [true, "Product image is required"],
  },
  countInStock: {
    type: Number,
    required: [true, "Product quantity is required"],
  }
});

module.exports = mongoose.model("Product", productSchema);
