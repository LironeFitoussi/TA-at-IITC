import { Request, Response } from 'express'
import { IUser } from "../types";
import UserModel from '../models/user.model';

const AuthController = {
    async signup(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, password }: Omit<IUser, 'id' | 'createdAt'> = req.body

            // TODO: Add Existing User Validation


            const newUser = await UserModel.create({
                name,
                email,
                password
            })

            // TODO: Setup JWT and Cookies

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