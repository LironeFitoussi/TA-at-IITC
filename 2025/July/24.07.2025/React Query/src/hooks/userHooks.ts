import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { User } from '../types/user';

const fetchUsers = async (): Promise<User[]> => {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
};

export const useUser = (selectedLetter: string) => useQuery({
    queryKey: ['users'], 
    queryFn: fetchUsers,
    select: users => users.filter((user) => user.name[0].toLowerCase() === selectedLetter),
    gcTime: 1000 * 60
});