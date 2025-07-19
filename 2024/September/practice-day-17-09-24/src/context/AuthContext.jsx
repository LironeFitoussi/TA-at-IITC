import { createContext, useContext, useState } from 'react';

// createContext() creates a context object that we can use to share data between components.
const AuthContext = createContext();

// AuthProvider is a component that provides the context value to its children.
export const AuthProvider = ({ children, props }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Implement login logic here (e.g., API call)
    setUser(userData);
  };

  const logout = () => {
    // Implement logout logic here
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// useContext() is a hook that returns the current context value for the context object.
export const useAuth = () => useContext(AuthContext);