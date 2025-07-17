import { User } from '../types';
import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';

class UserModel {
  private users: User[] = [];
  private dataFile = path.join(__dirname, '../../data/users.json');

  constructor() {
    this.loadUsers();
  }

  private loadUsers(): void {
    try {
      // Create data directory if it doesn't exist
      const dataDir = path.dirname(this.dataFile);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      // Load users from file if it exists
      if (fs.existsSync(this.dataFile)) {
        const data = fs.readFileSync(this.dataFile, 'utf-8');
        this.users = JSON.parse(data);
        console.log(`Loaded ${this.users.length} users from file`);
      } else {
        this.users = [];
        console.log('No users file found, starting with empty array');
      }
    } catch (error) {
      console.error('Error loading users:', error);
      this.users = [];
    }
  }

  private saveUsers(): void {
    try {
      fs.writeFileSync(this.dataFile, JSON.stringify(this.users, null, 2));
      console.log(`Saved ${this.users.length} users to file`);
    } catch (error) {
      console.error('Error saving users:', error);
    }
  }

  async create(userData: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user: User = {
      id: Date.now().toString(),
      ...userData,
      password: hashedPassword,
      createdAt: new Date()
    };
    this.users.push(user);
    this.saveUsers();
    console.log(`User created: ${user.email}, Total users: ${this.users.length}`);
    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    console.log(`Looking for user with email: ${email}`);
    console.log(`Current users in memory: ${this.users.length}`);
    
    const user = this.users.find(user => user.email === email);
    console.log(`Found user: ${user ? 'Yes' : 'No'}`);
    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async validatePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    console.log(`Validating password...`);
    console.log(`Plain password length: ${plainPassword.length}`);
    console.log(`Hashed password: ${hashedPassword}`);
    
    const isValid = await bcrypt.compare(plainPassword, hashedPassword);
    console.log(`Password validation result: ${isValid}`);
    return isValid;
  }

  async emailExists(email: string): Promise<boolean> {
    return this.users.some(user => user.email === email);
  }
}

export default new UserModel(); 