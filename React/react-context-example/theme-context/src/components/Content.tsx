import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export function Content() {
  const context = useContext(ThemeContext)
  
  if (context === undefined) {
    throw new Error('Content must be used within a ThemeProvider')
  }
  
  const { theme } = context
  
  return (
    <main className={`content ${theme}`}>
      <h2>Welcome to our app!</h2>
      <p>This example uses React Context API to share theme state across components.</p>
      <p>No prop drilling needed! 🎉</p>
      <p>Current theme: <strong>{theme}</strong></p>
    </main>
  )
} 