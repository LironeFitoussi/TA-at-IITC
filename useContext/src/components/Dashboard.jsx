import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, signOut } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.firstName} {user.lastName}!</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;