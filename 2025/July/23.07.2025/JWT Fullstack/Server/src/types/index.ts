export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}

export type AuthRequest = Omit<IUser, 'id' | 'createdAt'>

export interface AuthPayload {
    userId: string;
    email: string;
}