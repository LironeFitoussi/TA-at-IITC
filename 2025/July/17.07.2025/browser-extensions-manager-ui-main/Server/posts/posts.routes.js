import { Router } from "express";
import { postsController } from "./posts.controller.js";
import { authMiddleware } from "../auth/auth.middleware.js";

const router = Router();

router.get("/", postsController.getAll);
router.get("/:postId", postsController.getById);
router.post("/", authMiddleware, postsController.create);
router.put("/:postId", authMiddleware, postsController.update);
router.delete("/:postId", authMiddleware, postsController.remove);

export default router;
