import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login, user } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const [exPoint, setExPoint] = useState(0);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Implement login logic (e.g., call login method from AuthContext)
    login({ username, password, role, exPoint });
    setUsername('');
    setPassword('');
    setRole('');
    setExPoint(0);
  };

  useEffect(() => {
    console.log(user); 
    
    // Redirect user to admin dashboard
    if (user) {
      navigate('/');
    }
  }, [user]);
    
  return (
    <form onSubmit={handleLogin} >
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value='admin'>Admin</option>
        <option value='developer'>Developer</option>
        <option value='user'>User</option>
      </select>
      <input type='number' value={exPoint} onChange={(e) => setExPoint(e.target.value)} />
      <button type='submit'>Login</button>3
    </form>
  );
};

export default Login;