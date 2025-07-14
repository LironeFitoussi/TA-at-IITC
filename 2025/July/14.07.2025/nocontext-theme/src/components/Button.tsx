import { FaMoon, FaSun } from "react-icons/fa";
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export function Button() {
    const context = useContext(ThemeContext)

    if (context === undefined) throw new Error("BABA")
    
    const { theme, toggleTheme } = context 
    
    return (
        <button onClick={toggleTheme}>
            {theme === 'light' ? <FaSun /> : <FaMoon />}
        </button>
    )
}