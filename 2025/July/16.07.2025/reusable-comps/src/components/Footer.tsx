
interface FooterProps {
    text?: string
}

function Footer ({text = " 2025 Your Company Name. All rights reserved."}: FooterProps) {
    return (
        <footer>
            <p>© {text}</p>
        </footer>
    )
}

export default Footer