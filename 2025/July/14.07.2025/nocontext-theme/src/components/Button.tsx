import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
export function Button() {
    const { theme, toggleTheme } = useTheme()
    // console.log("Button got Rendered");

    return (
        <button onClick={toggleTheme}>
            {theme === 'light' ? <FaSun /> : <FaMoon />}
        </button>
    )
}