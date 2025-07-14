import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export function Paragraph () {
    const context = useContext(ThemeContext)
    if (context === undefined) throw new Error("BABA")
    const { theme } = context

    // console.log("Paragraph got Rendered");
    
    return <p>Footer - Theme: {theme}</p>
}