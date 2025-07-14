import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export function Header() {
  const context = useContext(ThemeContext)
  
  if (context === undefined) {
    throw new Error('Header must be used within a ThemeProvider')
  }
  
  const { theme, toggleTheme } = context
  
  return (
    <header className={`header ${theme}`}>
      <h1>My App</h1>
      <button onClick={toggleTheme} className="theme-toggle">
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  )
} 