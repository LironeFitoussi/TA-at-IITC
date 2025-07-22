import { useState, useEffect } from 'react';
import axios from 'axios';
import type { User } from '@/types/user';

export default function UsersWithTraditionalState() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6 border rounded-lg">
      {loading && (
        <div className="text-center py-4">
          <p className="text-gray-600">Loading users...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
          <p className="text-red-800">Error: {error}</p>
        </div>
      )}

      {!loading && !error && (
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