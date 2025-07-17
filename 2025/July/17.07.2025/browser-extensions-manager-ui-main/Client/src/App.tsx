import './App.css'
import { AuthProvider } from './contexts/AuthContext'

// Routes
import MainPage from './routes/MainPage'
function App() {


  return (
    <AuthProvider>
      <MainPage />
    </AuthProvider>
  )
}

export default App
