import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Simulated sign-in function
  const signIn = (email, password) => {
    // In a real app, you'd validate credentials against a backend
    // and receive user details from the server
    setUser({
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      email: email
    });
  };

  // Simulated sign-up function
  const signUp = (firstName, lastName, age, email, password) => {
    // In a real app, you'd send this data to a backend
    setUser({ firstName, lastName, age, email });
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);