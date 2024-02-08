import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//! routes
import authRoute from "./routes/auth.route.js";

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

app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
