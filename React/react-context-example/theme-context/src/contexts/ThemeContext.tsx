import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

// Define the context type
type ThemeContextType = {
  theme: string
  toggleTheme: () => void
}

// Create the context
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Theme provider component
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
} 