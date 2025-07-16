import React, { useState } from 'react';
import { booksApi } from '../services/api';
import type { CreateBookData } from '../types';

interface AddBookProps {
  onBookAdded: () => void;
}

const AddBook: React.FC<AddBookProps> = ({ onBookAdded }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookData, setBookData] = useState<CreateBookData>({
    title: '',
    author: '',
    description: '',
    publishedYear: new Date().getFullYear(),
  });
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await booksApi.createBook(bookData);
      setBookData({
        title: '',
        author: '',
        description: '',
        publishedYear: new Date().getFullYear(),
      });
      setIsOpen(false);
      onBookAdded(); // Refresh the book list
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to add book');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Add New Book
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h3>Add New Book</h3>
      
      {error && (
        <div style={{ color: 'red', marginBottom: '10px', padding: '10px', border: '1px solid red', borderRadius: '4px' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={bookData.title}
            onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="author">Author:</label>
          <input
            id="author"
            type="text"
            value={bookData.author}
            onChange={(e) => setBookData({ ...bookData, author: e.target.value })}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="publishedYear">Published Year:</label>
          <input
            id="publishedYear"
            type="number"
            value={bookData.publishedYear}
            onChange={(e) => setBookData({ ...bookData, publishedYear: parseInt(e.target.value) })}
            required
            min="1000"
            max={new Date().getFullYear()}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={bookData.description}
            onChange={(e) => setBookData({ ...bookData, description: e.target.value })}
            required
            rows={3}
            style={{ width: '100%', padding: '8px', marginTop: '5px', resize: 'vertical' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            type="submit"
            disabled={isLoading}
            style={{
              padding: '10px 20px',
              backgroundColor: isLoading ? '#ccc' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
            }}
          >
            {isLoading ? 'Adding...' : 'Add Book'}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook; 