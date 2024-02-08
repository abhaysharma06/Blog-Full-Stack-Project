import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//! routes
import authRoute from "./routes/auth.route.js";

const app = express();

dotenv.config();

//! port to run server locally
const PORT = process.env.SERVER_PORT;

//! mongoose orm connection setup
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log(`MongoDb is connected`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

//! routes
app.use("/api/auth", authRoute);

//! middleware to handle the api's errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

//! local server running port setup
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
