import express from "express";
const router = express.Router();

import {
  getAllUser,
  createUser,
  signInUser,
  getUserById
} from '../controllers/userController.js'

router.get("/all", getAllUser);

router.post("/signup", createUser);

router.post('/signin', signInUser)

router.get('/:id', getUserById)
export default router;
