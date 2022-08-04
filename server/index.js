require("dotenv").config();
// express
const express = require("express");
const app = express();

// rest of packages
const morgan = require("morgan");

// database
const connectDB = require("./db/connect");

// routes
const productRouter = require("./routes/product.router");

// middleware
app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/v1/products", productRouter);

const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
