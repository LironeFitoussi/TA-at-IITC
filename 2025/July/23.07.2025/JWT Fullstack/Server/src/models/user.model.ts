import { IUser } from "../types";
import bcrypt from  'bcryptjs';

let users: IUser[] = [];

const generateId = (): string => {
    return Date.now().toString() + Math.random().toString(36).substring(2, 9);
}

const UserModel = {
    async create(userData: Omit<IUser, 'id' | 'createdAt'>): Promise<IUser> {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user: IUser = {
            ...userData,
            id: generateId(),
            password: hashedPassword,
            createdAt: new Date()
        }

        users.push(user);
        console.log(`User craeted: ${user.email}`);
        return user
    },

    async findByEmail(email: string): Promise<IUser | undefined> {
        return users.find((user) => user.email === email)
    },

    async validatePassword (plainPassword: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(plainPassword, hashedPassword)
    }
}

export default UserModel; 