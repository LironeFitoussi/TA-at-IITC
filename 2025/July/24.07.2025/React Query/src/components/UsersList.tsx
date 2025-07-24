import { useUser } from "@/hooks/userHooks";
import { useState } from 'react';

interface UsersListProps {
    handleClick: (userId: number) => void
}

export default function UsersList({handleClick}: UsersListProps) {
    const [selectedLetter, setSelectedLetter ] = useState('a')

    const { data: users = [], isLoading, error } = useUser(selectedLetter)

    return (
        <div className="p-6 border rounded-lg">
            <div className="mb-6 flex flex-wrap gap-1">
                {Array.from({ length: 26 }, (_, i) => {
                    const letter = String.fromCharCode(97 + i); // 'a' to 'z'
                    return (
                        <button
                            key={letter}
                            className={`px-2 py-1 rounded text-sm font-medium border ${selectedLetter === letter ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-100'}`}
                            onClick={() => setSelectedLetter(letter)}
                            type="button"
                        >
                            {letter.toUpperCase()}
                        </button>
                    );
                })}
            </div>
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
                        <div key={user.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow" onClick={() => handleClick(user.id)}>
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