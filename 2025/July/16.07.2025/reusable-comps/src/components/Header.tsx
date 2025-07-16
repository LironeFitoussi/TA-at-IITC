interface HeaderProps {
    title: string;
    subtitle: string;
}


function Header ({ title, subtitle}: HeaderProps) {
    return (
        <header className="header">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    )
}

export default Header