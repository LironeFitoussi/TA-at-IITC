import express from "express";
import { authMiddleware } from "./auth.middleware.js";
import { authController } from "./auth.controller.js";

const router = express.Router();

router.post("/sign-up", authController.signUp);
router.post("/sign-in", authController.signIn);
router.get("/me", authMiddleware, authController.getLoggedInUser);

export default router;
