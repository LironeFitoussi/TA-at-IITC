import { Request, Response } from 'express';
import { CreateBookRequest, UpdateBookRequest } from '../types';
import BookModel from '../models/Book';
import { AuthRequest } from '../middleware/auth';

class BookController {
  static getAllBooks(req: Request, res: Response) {
    try {
      const books = BookModel.findAll();
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }

  static getBookById(req: Request, res: Response) {
    try {
      const book = BookModel.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json(book);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }

  static createBook(req: AuthRequest, res: Response) {
    try {
      const { title, author, description, publishedYear }: CreateBookRequest = req.body;

      // Validate input
      if (!title || !author || !description || !publishedYear) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      const book = BookModel.create(
        { title, author, description, publishedYear },
        req.user!.userId
      );

      res.status(201).json(book);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }

  static updateBook(req: AuthRequest, res: Response) {
    try {
      const book = BookModel.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }

      // Check if user owns the book
      if (book.userId !== req.user!.userId) {
        return res.status(403).json({ message: 'You can only update your own books' });
      }

      const updateData: UpdateBookRequest = req.body;
      const updatedBook = BookModel.update(req.params.id, updateData);

      res.json(updatedBook);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }

  static deleteBook(req: AuthRequest, res: Response) {
    try {
      const book = BookModel.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }

      // Check if user owns the book
      if (book.userId !== req.user!.userId) {
        return res.status(403).json({ message: 'You can only delete your own books' });
      }

      const deleted = BookModel.delete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: 'Book not found' });
      }

      res.json({ message: 'Book deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }

  static getUserBooks(req: AuthRequest, res: Response) {
    try {
      const books = BookModel.findByUserId(req.user!.userId);
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
}

export default BookController; 