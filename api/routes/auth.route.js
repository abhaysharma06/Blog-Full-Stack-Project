import express from "express";

import { signUpController } from "../controllers/auth.controller.js";

const authRoute = express.Router();

authRoute.post("/sign-up", signUpController);

export default authRoute;
