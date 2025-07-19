import { AuthProvider } from './contexts/AuthContext'

// Routes
import Layout from './routes/layout'


function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  )
}

export default App
