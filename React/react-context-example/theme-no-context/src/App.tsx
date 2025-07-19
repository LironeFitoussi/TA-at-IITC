import { useState } from 'react'
import { Header } from './components/Header'
import { Content } from './components/Content'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Content theme={theme} />
      <Footer theme={theme} />
    </div>
  )
}

export default App
