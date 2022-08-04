const express = require("express");
const app = express();

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  return res.send("See you space cowboy");
});

const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
