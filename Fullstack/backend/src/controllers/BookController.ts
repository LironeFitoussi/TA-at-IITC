import { Request, Response } from 'express';
import { CreateBookRequest, UpdateBookRequest } from '../types';
import BookModel from '../models/Book';
import { AuthRequest } from '../middleware/auth';

class BookController {
  async getAllBooks(req: Request, res: Response): Promise<void> {
    try {
      const books = BookModel.findAll();
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }

  async getBookById(req: Request, res: Response): Promise<void> {
    try {
      const book = BookModel.findById(req.params.id);
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
        return;
      }
      res.json(book);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }

  async createBook(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { title, author, description, publishedYear }: CreateBookRequest = req.body;

      // Validate input
      if (!title || !author || !description || !publishedYear) {
        res.status(400).json({ message: 'All fields are required' });
        return;
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

  async updateBook(req: AuthRequest, res: Response): Promise<void> {
    try {
      const book = BookModel.findById(req.params.id);
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
        return;
      }

      // Check if user owns the book
      if (book.userId !== req.user!.userId) {
        res.status(403).json({ message: 'You can only update your own books' });
        return;
      }

      const updateData: UpdateBookRequest = req.body;
      const updatedBook = BookModel.update(req.params.id, updateData);

      res.json(updatedBook);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }

  async deleteBook(req: AuthRequest, res: Response): Promise<void> {
    try {
      const book = BookModel.findById(req.params.id);
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
        return;
      }

      // Check if user owns the book
      if (book.userId !== req.user!.userId) {
        res.status(403).json({ message: 'You can only delete your own books' });
        return;
      }

      const deleted = BookModel.delete(req.params.id);
      if (!deleted) {
        res.status(404).json({ message: 'Book not found' });
        return;
      }

      res.json({ message: 'Book deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }

  async getUserBooks(req: AuthRequest, res: Response): Promise<void> {
    try {
      const books = BookModel.findByUserId(req.user!.userId);
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
}

export default new BookController(); 