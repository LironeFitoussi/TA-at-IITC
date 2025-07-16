import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthPayload } from '../types';

export interface AuthRequest extends Request {
  user?: AuthPayload;
}

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined');
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const token = req.cookies.accessToken;

  if (!token) {
    res.status(401).json({ message: 'Access denied. No token provided.' });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AuthPayload;
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid token.' });
  }
};

export const generateAccessToken = (payload: AuthPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
}; 