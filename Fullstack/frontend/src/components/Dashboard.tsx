import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import BookList from './BookList';
import AddBook from './AddBook';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [refreshKey, setRefreshKey] = useState(0);

  const handleBookAdded = () => {
    setRefreshKey(prev => prev + 1);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <header style={{ backgroundColor: '#343a40', color: 'white', padding: '1rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0 }}>📚 Book Library</h1>
          {user && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span>Welcome, {user.name}!</span>
              <button
                onClick={handleLogout}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        {user && <AddBook onBookAdded={handleBookAdded} />}
        <BookList refreshTrigger={refreshKey} />
      </main>
    </div>
  );
};

export default Dashboard; 