import { Request, Response } from 'express'
import { AuthRequest } from "../types";
import UserModel from '../models/user.model';
import { generateAccessToken } from '../middleware/auth'

const AuthController = {
    async signup(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, password }: AuthRequest = req.body

            const existingUser = await UserModel.findByEmail(email)
            if (existingUser) {
                res.status(400).json({
                    message: 'User Already Exists'
                })
                return
            }

            const newUser = await UserModel.create({
                name,
                email,
                password
            })

            const token = generateAccessToken({ userId: newUser.id, email: newUser.email })

            res.cookie('accessToken', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 24 * 60 * 60 * 1000
            })

            res.status(201).json({
                message: 'User Created successfully',
                user: {
                    id: newUser.id,
                    email: newUser.email,
                    name: newUser.name,
                    createdAt: newUser.createdAt
                }
            })
        } catch (error) {
            console.error('Registration error:', error);
            res.status(500).json({ message: 'Server error during registration' });
        }
    },

    async signin(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;

            // .1 Find User
            const user = await UserModel.findByEmail(email);
            if (!user) {
                res.status(400).json({
                    message: "User Not Found"
                })
                return
            }

            // Validate Password
            const isValid = await UserModel.validatePassword(password, user.password)
            if (!isValid) {
                res.status(400).json({ message: 'Invalid credentials' });
                return;
            }

            const token = generateAccessToken({ userId: user.id, email: user.email })

            res.cookie('accessToken', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 24 * 60 * 60 * 1000
            })

            res.status(201).json({
                message: 'User Created successfully',
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    createdAt: user.createdAt
                }
            })
        } catch (error) {
            console.error('Registration error:', error);
            res.status(500).json({ message: 'Server error during registration' });
        }
    },

    async logout(req: Request, res: Response): Promise<void> {
        try {
          res.clearCookie('accessToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
          });
          res.json({ message: 'Logged out successfully' });
        } catch (error) {
          console.error('Logout error:', error);
          res.status(500).json({ message: 'Server error during logout' });
        }
      },
}

export default AuthController