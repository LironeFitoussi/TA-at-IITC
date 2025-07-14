import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

import { Button } from "./Button"

export function Header() {
    const context = useContext(ThemeContext)
    if (context === undefined) throw new Error("BABA")
    const { theme } = context 

    return (
        <header className={`header ${theme}`}>
            <h1>My App</h1>
            <Button />
        </header>
    )
}

