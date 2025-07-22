import { Request, Response } from 'express';
import { LoginRequest, RegisterRequest } from '../types';
import UserModel from '../models/User';
import { generateAccessToken, AuthRequest } from '../middleware/auth';

class AuthController {
  async register(req: Request, res: Response): Promise<void> {
    try {
      const { email, password, name }: RegisterRequest = req.body;

      // Validate input
      if (!email || !password || !name) {
        res.status(400).json({ message: 'All fields are required' });
        return;
      }

      // Check if user already exists
      const existingUser = await UserModel.findByEmail(email);
      if (existingUser) {
        res.status(400).json({ message: 'User already exists' });
        return;
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

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password }: LoginRequest = req.body;

      // Validate input
      if (!email || !password) {
        res.status(400).json({ message: 'Email and password are required' });
        return;
      }

      // Find user
      const user = await UserModel.findByEmail(email);
      if (!user) {
        res.status(400).json({ message: 'Invalid credentials' });
        return;
      }

      // Validate password
      const isValid = await UserModel.validatePassword(password, user.password);
      if (!isValid) {
        res.status(400).json({ message: 'Invalid credentials, something went wrong with validation' });
        return;
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

  async getMe(req: AuthRequest, res: Response): Promise<void> {
    try {
      const user = await UserModel.findById(req.user!.userId);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }

      res.json({
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

  async logout(req: Request, res: Response): Promise<void> {
    res.clearCookie('accessToken');
    res.json({ message: 'Logged out successfully' });
  }
}

export default new AuthController(); 