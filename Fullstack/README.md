# Full-Stack Book Library Application

A simple full-stack application demonstrating authentication with JWT tokens, cookies, and React Context API.

## Features

- **Backend (Express + TypeScript)**:
  - JWT authentication with cookies
  - User registration and login
  - Books CRUD API
  - In-memory data storage
  - CORS enabled for frontend

- **Frontend (React + Vite + TypeScript)**:
  - Context API for state management
  - Cookie-based authentication
  - Login/Register forms
  - Book listing and management
  - Responsive design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation and Running

1. **Clone the repository** (if not already cloned)

2. **Install Backend Dependencies**:
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**:
   ```bash
   cd frontend
   npm install
   ```

4. **Start the Backend Server**:
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:3001`

5. **Start the Frontend Server** (in a new terminal):
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## Usage

1. **Access the Application**: Open your browser and go to `http://localhost:5173`

2. **Register a New Account**: Click "Register" and create a new account

3. **Login**: Use your credentials to log in

4. **View Books**: See the list of books (includes some sample data)

5. **Add Books**: When logged in, click "Add New Book" to create new books

6. **Delete Books**: You can delete books that you created

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Books
- `GET /api/books` - Get all books (public)
- `GET /api/books/:id` - Get book by ID
- `POST /api/books` - Create new book (authenticated)
- `PUT /api/books/:id` - Update book (authenticated, owner only)
- `DELETE /api/books/:id` - Delete book (authenticated, owner only)

## Architecture

- **Authentication**: JWT tokens stored in HTTP-only cookies
- **State Management**: React Context API
- **Styling**: Inline styles (simple approach)
- **Data Storage**: In-memory (resets on server restart)

## Security Features

- HTTP-only cookies for JWT tokens
- Password hashing with bcrypt
- CORS configuration
- Input validation
- Authentication middleware

## Notes

- Data is stored in memory and will be lost when the server restarts
- The application includes some sample books for demonstration
- Users can only edit/delete their own books
- Simple styling for demonstration purposes 