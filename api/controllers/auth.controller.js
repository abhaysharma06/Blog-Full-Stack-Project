// ! third party lib
import bcryptjs from "bcryptjs";

//! models
import User from "../models/user.model.js";

//! utils
import { errorHandler } from "../utils/error.js";

export const signUpController = async (req, res, next) => {
  const { username, email, password } = req.body;

  //! all false case
  if (
    !username ||
    !email ||
    !password ||
    email == "" ||
    username == "" ||
    password == ""
  ) {
    // return res.status(400).json({ message: "All field are required" });
    next(errorHandler(400, "All fields are required"));
  }

  //! hashing the password to secure
  const hashedPassword = bcryptjs.hashSync(password, 10);

  //! new User
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  //! handle the storing of data in DB
  try {
    await newUser.save();
    res.json({ message: "SignUp Successful" });
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error);
  }
};
