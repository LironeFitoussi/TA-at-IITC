const express = require("express");

// Import Functions
const {
  createUser,
  findUserById,
} = require("../controllers/userController.js");

const router = express.Router();

router.post("/", createUser);

router.get("/:id", findUserById);
module.exports = router;
