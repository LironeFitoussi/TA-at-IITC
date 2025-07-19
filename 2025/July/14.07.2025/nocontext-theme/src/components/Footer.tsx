import { useTheme } from "../contexts/ThemeContext";
import { Paragraph } from "./Paragraph";

export function Footer() {
    const { theme } = useTheme()

    // console.log("Footer got Rendered");
    
    return (
        <footer className={`footer ${theme}`}>
            <Paragraph/>
        </footer>
    )
}