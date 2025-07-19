import React, { useState, useEffect } from 'react';
import { booksApi } from '../services/api';
import type { Book } from '../types';
import { useAuth } from '../contexts/AuthContext';

interface BookListProps {
  refreshTrigger?: number;
}

const BookList: React.FC<BookListProps> = ({ refreshTrigger }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const { user } = useAuth();

  useEffect(() => {
    fetchBooks();
  }, [refreshTrigger]);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const fetchedBooks = await booksApi.getAllBooks();
      setBooks(fetchedBooks);
    } catch (err: any) {
      setError('Failed to fetch books');
      console.error('Error fetching books:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (bookId: string) => {
    if (!window.confirm('Are you sure you want to delete this book?')) {
      return;
    }

    try {
      await booksApi.deleteBook(bookId);
      setBooks(books.filter(book => book.id !== bookId));
    } catch (err: any) {
      setError('Failed to delete book');
      console.error('Error deleting book:', err);
    }
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>Loading books...</div>;
  }

  if (error) {
    return (
      <div style={{ color: 'red', textAlign: 'center', padding: '20px' }}>
        {error}
        <button onClick={fetchBooks} style={{ marginLeft: '10px' }}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Books Library</h2>
      {books.length === 0 ? (
        <p>No books available. Be the first to add one!</p>
      ) : (
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {books.map((book) => (
            <div
              key={book.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <h3 style={{ marginTop: 0, color: '#333' }}>{book.title}</h3>
              <p style={{ margin: '5px 0', color: '#666' }}>
                <strong>Author:</strong> {book.author}
              </p>
              <p style={{ margin: '5px 0', color: '#666' }}>
                <strong>Published:</strong> {book.publishedYear}
              </p>
              <p style={{ margin: '10px 0', color: '#555' }}>{book.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                <small style={{ color: '#888' }}>
                  Added: {new Date(book.createdAt).toLocaleDateString()}
                </small>
                {user && user.id === book.userId && (
                  <button
                    onClick={() => handleDelete(book.id)}
                    style={{
                      padding: '5px 10px',
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList; 