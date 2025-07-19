import { Book, CreateBookRequest, UpdateBookRequest } from '../types';

class BookModel {
  private books: Book[] = [];
  private lastId: number = 0;

  private generateId(): string {
    // Use a combination of timestamp and counter to ensure uniqueness
    const timestamp = Date.now();
    this.lastId = Math.max(this.lastId + 1, timestamp);
    return this.lastId.toString();
  }

  create(bookData: CreateBookRequest, userId: string): Book {
    const book: Book = {
      id: this.generateId(),
      ...bookData,
      userId,
      createdAt: new Date()
    };
    this.books.push(book);
    return book;
  }

  findAll(): Book[] {
    return this.books;
  }

  findById(id: string): Book | undefined {
    return this.books.find(book => book.id === id);
  }

  findByUserId(userId: string): Book[] {
    return this.books.filter(book => book.userId === userId);
  }

  update(id: string, updateData: UpdateBookRequest): Book | undefined {
    const bookIndex = this.books.findIndex(book => book.id === id);
    if (bookIndex === -1) return undefined;

    this.books[bookIndex] = {
      ...this.books[bookIndex],
      ...updateData
    };
    return this.books[bookIndex];
  }

  delete(id: string): boolean {
    const bookIndex = this.books.findIndex(book => book.id === id);
    if (bookIndex === -1) return false;

    this.books.splice(bookIndex, 1);
    return true;
  }

  // Add some sample books for demonstration
  seedData(): void {
    // Only seed if there are no books yet
    if (this.books.length > 0) {
      return;
    }

    const sampleBooks = [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "A classic American novel set in the Jazz Age",
        publishedYear: 1925,
        userId: "system"
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "A novel about racial injustice in the American South",
        publishedYear: 1960,
        userId: "system"
      },
      {
        title: "1984",
        author: "George Orwell",
        description: "A dystopian social science fiction novel",
        publishedYear: 1949,
        userId: "system"
      }
    ];

    sampleBooks.forEach(book => {
      this.create(book, book.userId);
    });
  }
}

export default new BookModel(); 