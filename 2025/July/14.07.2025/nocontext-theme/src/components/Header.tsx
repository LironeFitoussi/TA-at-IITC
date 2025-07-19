import { useTheme } from "../contexts/ThemeContext";
import { Button } from "./Button"
import { UserHero } from "./UserHero";

export function Header() {
    const { theme } = useTheme()
    // console.log("Header got Rendered");

    return (
        <header className={`header ${theme}`}>
            <UserHero />
            <h1>My App</h1>
            <Button />
        </header>
    )
}

