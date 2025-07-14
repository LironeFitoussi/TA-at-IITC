import { useTheme } from "../contexts/ThemeContext";
import { Paragraph } from "./Paragraph";
import { SwitchUser } from "./SwitchUser";
export function Content() {
    const { theme } = useTheme()

    // console.log("Content got Rendered");

    return (
        <main className={`main ${theme}`}>
            <h2>Welcome to our app!</h2>
            <p>This example uses prop drilling to pass theme state down the component tree.</p>
            <Paragraph />
            <SwitchUser/>
        </main>
    )
}