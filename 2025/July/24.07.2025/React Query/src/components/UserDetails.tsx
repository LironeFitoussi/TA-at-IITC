import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { User } from '../types/user';

interface UserDetailsProps {
    userId: number
}

const fetchUser = async (id: number): Promise<User> => {
    const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
};

const UserDetails = ({userId}: UserDetailsProps) => {
    const { data: user, isLoading, error } = useQuery({
        queryKey: ['user', userId],
        queryFn: () => fetchUser(userId),
        enabled: !!userId
    });

    if (error) {
        return (
            <div>Error Fetching user</div>
        )
    }

    if (isLoading) {
        return (
            <div>loading...</div>
        )
    }

    if (user) {
        return (
            <div className="p-4 flex bg-amber-200 border-2 roudnded-xl flex-col">
                <h1>{ user.name}</h1>
                <div >
                    <h2>Address</h2>
                    <p>{user.address.street}, {user.address.city}</p>
                </div>
            </div>
        )
    }
}

export default UserDetails