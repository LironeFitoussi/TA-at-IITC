interface HeaderProps {
  theme: string
  toggleTheme: () => void
}

export function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <header className={`header ${theme}`}>
      <h1>My App</h1>
      <button onClick={toggleTheme} className="theme-toggle">
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  )
} 