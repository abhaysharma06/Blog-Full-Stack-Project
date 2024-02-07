const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log(`MongoDb is connected`);
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
