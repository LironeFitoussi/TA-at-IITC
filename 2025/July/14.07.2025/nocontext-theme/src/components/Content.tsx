import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export function Content() {
    const context = useContext(ThemeContext)

    if (context === undefined) throw new Error("BABA")

    const { theme } = context 
    return (
        <main className={`main ${theme}`}>
            <h2>Welcome to our app!</h2>
            <p>This example uses prop drilling to pass theme state down the component tree.</p>
            <p>Current theme: <strong>{theme}</strong></p>
        </main>
    )
}