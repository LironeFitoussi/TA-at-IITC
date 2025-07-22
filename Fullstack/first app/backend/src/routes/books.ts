import express from 'express';
import BookController from '../controllers/BookController';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

// Get all books (public endpoint)
router.get('/', BookController.getAllBooks);

// Get a specific book by ID
router.get('/:id', BookController.getBookById);

// Create a new book (authenticated)
router.post('/', authenticateToken, BookController.createBook);

// Update a book (authenticated, only owner)
router.put('/:id', authenticateToken, BookController.updateBook);

// Delete a book (authenticated, only owner)
router.delete('/:id', authenticateToken, BookController.deleteBook);

// Get books by current user (authenticated)
router.get('/user/me', authenticateToken, BookController.getUserBooks);

export default router; 