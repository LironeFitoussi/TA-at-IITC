interface FooterProps {
  theme: string
}

export function Footer({ theme }: FooterProps) {
  return (
    <footer className={`footer ${theme}`}>
      <p>Footer - Theme: {theme}</p>
    </footer>
  )
} 