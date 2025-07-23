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

            const token = generateAccessToken({userId: newUser.id, email: newUser.email})

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
    }
}

export default AuthController