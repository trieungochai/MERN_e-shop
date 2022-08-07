const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = {
  name: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email",
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    phone: {
      type: Number,
      required: [true, "Phone is required"],
      validate: {
        validator: validator.isMobilePhone,
        message: "Please provide valid mobile phone",
      },
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    street: {
      type: String,
      default: "",
    },
    apartment: {
      type: String,
      default: "",
    },
    zip: {
      type: String,
      default: "",
    },
    country: {
      type: String,
      default: "",
    },
  },
};

module.exports = mongoose.model("User", userSchema);
