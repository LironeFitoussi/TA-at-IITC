import { useAuth } from '../context/AuthContext';

const Logout = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    // Implement logout logic (e.g., call logout method from AuthContext)
    logout();
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;