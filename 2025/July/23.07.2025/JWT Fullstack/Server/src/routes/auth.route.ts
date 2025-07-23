import express from "express";
import AuthController from '../controllers/auth.controller';
// import { authenticateToken } from '../middleware/auth';

const router = express.Router()

// Auth Routes
router.post('/signup', AuthController.signup )
// router.post('/signin', AuthController.signin)
// router.post('/signout', AuthController.signout)

export default router