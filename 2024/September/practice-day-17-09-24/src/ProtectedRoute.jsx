import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const ProtectedRoute = ({ roles }) => {
  const { user } = useAuth();
    if (roles && user.role !== "" && !roles.includes(user.role)) {
        console.log('roles', user.role);
        return <Outlet />;
    } else if (roles && !user) {
        return <Navigate to='/' />;
    }

    return !user ? <Navigate to='/login' /> : <Outlet /> ;
};

export default ProtectedRoute;