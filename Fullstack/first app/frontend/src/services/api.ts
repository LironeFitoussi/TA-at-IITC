import axios from 'axios';
import type { User, Book, LoginCredentials, RegisterCredentials, CreateBookData } from '../types';

if (!import.meta.env.VITE_API_BASE_URL) {
  throw new Error('VITE_API_BASE_URL is not defined');
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // Important for cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth API
export const authApi = {
  async login(credentials: LoginCredentials): Promise<{ user: User; message: string }> {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  async register(credentials: RegisterCredentials): Promise<{ user: User; message: string }> {
    const response = await api.post('/auth/register', credentials);
    return response.data;
  },

  async logout(): Promise<{ message: string }> {
    const response = await api.post('/auth/logout');
    return response.data;
  },

  async checkAuth(): Promise<{ user: User }> {
    const response = await api.get('/auth/me');
    return response.data;
  },
};

// Books API
export const booksApi = {
  async getAllBooks(): Promise<Book[]> {
    const response = await api.get('/books');
    return response.data;
  },

  async getBookById(id: string): Promise<Book> {
    const response = await api.get(`/books/${id}`);
    return response.data;
  },

  async createBook(bookData: CreateBookData): Promise<Book> {
    const response = await api.post('/books', bookData);
    return response.data;
  },

  async updateBook(id: string, bookData: Partial<CreateBookData>): Promise<Book> {
    const response = await api.put(`/books/${id}`, bookData);
    return response.data;
  },

  async deleteBook(id: string): Promise<{ message: string }> {
    const response = await api.delete(`/books/${id}`);
    return response.data;
  },

  async getUserBooks(): Promise<Book[]> {
    const response = await api.get('/books/user/me');
    return response.data;
  },
};

export default api; 