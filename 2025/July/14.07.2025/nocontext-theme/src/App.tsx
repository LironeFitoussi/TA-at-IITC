import './App.css'

// Components
import { Header } from './components/Header'
import { Content } from './components/Content'
import { Footer } from './components/Footer'

// Context
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <div className="app">
          <Header/>
          <Content />
          <Footer />
        </div>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
