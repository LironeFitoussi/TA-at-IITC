import { ERROR_NAMES } from "../constants/errors.constants.js";
import { usersService } from "../users/users.service.js";
import { authService } from "./auth.service.js";

async function signUp(req, res) {
  const { username, password } = req.body ?? {};

  if (!username || !password) {
    return res.status(400).json({ message: "username and password required" });
  }

  const exist = usersService.checkIfUserExist(username);

  if (exist) {
    console.log(`User already exist with username: ${username}`);
    return res.status(409).json({ message: "User already exist" });
  }

  const hashedPassword = await authService.hashPassword(password);

  usersService.create({
    username,
    password: hashedPassword,
  });

  res.status(201).json({ message: "User created" });
}

async function signIn(req, res) {
  const { username, password } = req.body ?? {};

  if (!username || !password) {
    return res.status(400).json({ message: "username and password required" });
  }

  let user = null;
  try {
    user = usersService.getByUsername(username);
  } catch (error) {
    switch (error.name) {
      case ERROR_NAMES.ERROR_USER_NOT_FOUND:
        return res.status(401).json({ message: "Invalid credentials" });
      default:
        return res.status(500).json({ message: "Somthing went wrong" });
    }
  }

  try {
    const isMatch = await authService.comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }

  try {
    const payload = { username: user.username };
    const token = authService.generateToken(payload); // this ca throw if we have no secret
    res.status(200).json({ message: "Login success", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}

function getLoggedInUser(req, res) {
  const username = req.user?.username ?? "";

  let userWithPassword = null;
  try {
    userWithPassword = usersService.getByUsername(username);
  } catch (error) {
    switch (error.name) {
      case ERROR_NAMES.ERROR_USER_NOT_FOUND:
        console.log("User not found. username:", username);
        return res.status(401).json({ message: "User not found" });
      default:
        return res.status(500).json({ message: "Somthing went wrong" });
    }
  }

  const { password, ...userWithoutPassword } = userWithPassword;

  res.status(200).json({ message: "User", user: userWithoutPassword });
}

export const authController = {
  signUp,
  signIn,
  getLoggedInUser,
};
