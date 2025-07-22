export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  publishedYear: number;
  createdAt: string;
  userId: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  name: string;
}

export interface CreateBookData {
  title: string;
  author: string;
  description: string;
  publishedYear: number;
}

export interface AuthContextType {
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

export interface ApiResponse<T> {
  data?: T;
  message: string;
  success: boolean;
} 