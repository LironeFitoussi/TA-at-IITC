import { User } from '../types';
import bcrypt from 'bcryptjs';

class UserModel {
  private users: User[] = [];

  async create(userData: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user: User = {
      id: Date.now().toString(),
      ...userData,
      password: hashedPassword,
      createdAt: new Date()
    };
    this.users.push(user);
    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  async findById(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async validatePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  async emailExists(email: string): Promise<boolean> {
    return this.users.some(user => user.email === email);
  }
}

export default new UserModel(); 