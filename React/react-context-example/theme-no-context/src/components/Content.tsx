interface ContentProps {
  theme: string
}

export function Content({ theme }: ContentProps) {
  return (
    <main className={`content ${theme}`}>
      <h2>Welcome to our app!</h2>
      <p>This example uses prop drilling to pass theme state down the component tree.</p>
      <p>Current theme: <strong>{theme}</strong></p>
    </main>
  )
} 