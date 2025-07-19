import User from "../models/userModel.js";

// Utils Import
import { hashPassword, comparePassword } from "../utils/auth.js";

export const getAllUser = async (req, res) => {
  try {
    const allFetchedUsers = await User.find();

    res.status(200).send({
      status: "success",
      message: "Users Found",
      data: allFetchedUsers,
    });
  } catch (error) {
    res.status(500);
  }
};

export const createUser = async (req, res) => {
  const { fName, lName, phoneNumber, password } = req.body;
  try {
    const hashedPassword = await hashPassword(password);

    // console.log("hashed: " + hashedPassword);

    const newUser = new User({
      fName,
      lName,
      phoneNumber,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).send({
      status: "success",
      message: "User Succefully Regitered",
      data: newUser,
    });
  } catch (error) {
    if (error?.errorResponse?.code === 11000) {
      res.status(400).send(error.errorResponse.errmsg);
    }
    res.status(500).send(error);
  }
};

export const signInUser = async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;
    const foundUser = await User.findOne({ phoneNumber });
    const isAuth = await comparePassword(password, foundUser.password);

    console.log(isAuth);

    res.status(200).send(isAuth);
  } catch (error) {
    res.status(500);
  }
};

export const getUserById = async (req, res) => {
  try {
    const foundUser = await User.findById(req.params.id).populate("userJokes")
    res.send(foundUser)
  } catch (error) {
    res.status(500);
  }
};
