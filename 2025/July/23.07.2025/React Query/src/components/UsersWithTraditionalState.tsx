import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { User } from '../types/user';

const fetchUsers = async (): Promise<User[]> => {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
};

export default function UsersWithReactQuery() {
    const { data: users = [], isLoading, error } = useQuery({
        queryKey: ['users'], queryFn: fetchUsers
    });

    return (
        <div className="p-6 border rounded-lg">
            {isLoading && (
                <div className="text-center py-4">
                    <p className="text-gray-600">Loading users...</p>
                </div>
            )}

            {error && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
                    <p className="text-red-800">
                        Error: {error instanceof Error ? error.message : 'An error occurred'}
                    </p>
                </div>
            )}

            {!isLoading && !error && (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {users.map((user) => (
                        <div key={user.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                            <h3 className="font-semibold text-lg">{user.name}</h3>
                            <p className="text-gray-600">@{user.username}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                            <p className="text-sm text-gray-500">{user.company.name}</p>
                            <p className="text-sm text-gray-500">{user.address.city}</p>
                        </div>
                    ))}
                </div>
            )}

            <div className="mt-4 text-sm text-gray-500">
                Total users: {users.length}
            </div>
        </div>
    );
} 