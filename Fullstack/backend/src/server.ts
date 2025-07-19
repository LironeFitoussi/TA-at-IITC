import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

import authRoutes from './routes/auth';
import bookRoutes from './routes/books';
import BookModel from './models/Book';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Vite dev server
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('tiny'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Initialize sample data
BookModel.seedData();

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 