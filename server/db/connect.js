const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("Database connection is ready..."))
    .catch((error) => console.log(error.message));
};

module.exports = connectDB;
