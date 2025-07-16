import { Request, Response } from 'express';
import { LoginRequest, RegisterRequest } from '../types';
import UserModel from '../models/User';
import { generateAccessToken } from '../middleware/auth';

class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { email, password, name }: RegisterRequest = req.body;

      // Validate input
      if (!email || !password || !name) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      // Check if user already exists
      const existingUser = await UserModel.findByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Create new user
      const user = await UserModel.create({ email, password, name });
      
      // Generate token
      const token = generateAccessToken({ userId: user.id, email: user.email });
      
      // Set cookie
      res.cookie('accessToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
      });

      res.status(201).json({
        message: 'User created successfully',
        user: {
          id: user.id,
          email: user.email,
          name: user.name
        }
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password }: LoginRequest = req.body;

      // Validate input
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }

      // Find user
      const user = await UserModel.findByEmail(email);
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Validate password
      const isValid = await UserModel.validatePassword(password, user.password);
      if (!isValid) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Generate token
      const token = generateAccessToken({ userId: user.id, email: user.email });
      
      // Set cookie
      res.cookie('accessToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
      });

      res.json({
        message: 'Login successful',
        user: {
          id: user.id,
          email: user.email,
          name: user.name
        }
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }

  static logout(req: Request, res: Response) {
    res.clearCookie('accessToken');
    res.json({ message: 'Logged out successfully' });
  }
}

export default AuthController; 