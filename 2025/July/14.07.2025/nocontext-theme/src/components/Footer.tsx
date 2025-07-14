import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export function Footer() {
    const context = useContext(ThemeContext)
    if (context === undefined) throw new Error("BABA")
    const { theme } = context 

    return (
        <footer className={`footer ${theme}`}>
            <p>Footer - Theme: {theme}</p>
        </footer>
    )
}