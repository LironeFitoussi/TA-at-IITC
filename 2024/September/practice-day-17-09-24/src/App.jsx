import { Navigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import ProtectedRoute from './ProtectedRoute';
import Home from './components/Home';
import AdminDashboard from './components/AdminDashboard';
import DeveloperDashboard from './components/DeveloperDashboard';
import HighRanked from './components/HighRanked';
import { useAuth } from './context/AuthContext';

const App = () => {
  const { user } = useAuth();
  return (
      <Router>
        <Routes>
          <Route path='/' element={<ProtectedRoute />}>
            <Route index element={<Home />} /> {/* Use index for the default child route */}
          </Route>

          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />

          {/* Special Admin Rote */}
          { user?.role === 'admin' &&
            <Route path='/admin' element={<AdminDashboard />} />
          }

          {/* Special Developer Route */}
          { user?.role === 'developer' &&
            <Route path='/developer' element={<DeveloperDashboard />} />
          }

          {/* Special High Ranked Route */}
          { user?.exPoint >= 100 &&
            <Route path='/highRanked' element={<HighRanked />} />
          }
          {/* Auto REdicrect for unfound routes */}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
  );
};

export default App;