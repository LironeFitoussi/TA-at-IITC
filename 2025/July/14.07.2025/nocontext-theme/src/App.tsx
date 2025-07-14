import './App.css'

// Components
import { Header } from './components/Header'
import { Content } from './components/Content'
import { Footer } from './components/Footer'

// Context
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header/>
        <Content />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
