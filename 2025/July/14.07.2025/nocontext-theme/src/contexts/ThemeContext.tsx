import { useState, createContext, useContext } from 'react'
import type { ReactNode } from 'react'

type ThemeContextType = {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode}) {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
      setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (context === undefined) throw new Error("BABA")
    return context;
}