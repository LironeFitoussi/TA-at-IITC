# Theme Toggle with React Context API

This example demonstrates theme toggling using **React Context API** - a built-in React feature that eliminates prop drilling by providing a way to share state across components.

## Project Structure

```
src/
├── components/
│   ├── Header.tsx    # Uses useContext directly
│   ├── Content.tsx   # Uses useContext directly
│   └── Footer.tsx    # Uses useContext directly
├── contexts/
│   └── ThemeContext.tsx  # Defines context and provider
├── App.tsx           # Wraps app with ThemeProvider
└── App.css           # Theme-specific styles
```

## How it works

1. **Context Creation**: A `ThemeContext` is created to hold the theme state and toggle function
2. **Provider Component**: A `ThemeProvider` wraps the app and provides the context value
3. **Direct Context Usage**: Components use `useContext` directly to access theme state
4. **No Props Needed**: Components can access theme state from anywhere in the tree

## Key Features

- ✅ No prop drilling needed
- ✅ Components can access theme state from anywhere in the tree
- ✅ Cleaner component interfaces
- ✅ Better separation of concerns
- ✅ Built into React - no external dependencies
- ✅ Clear component structure

## Advantages over Prop Drilling

- 🎉 Components don't need to receive theme as props
- 🎉 No need to pass props through intermediate components
- 🎉 Components are decoupled from their parent's state
- 🎉 Easier to maintain and refactor

## Code Examples

### ThemeContext.tsx (Context Definition)
```tsx
import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

type ThemeContextType = {
  theme: string
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

### App.tsx (Provider Setup)
```tsx
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Content />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
```

### Header.tsx (Direct Context Usage)
```tsx
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export function Header() {
  const context = useContext(ThemeContext)
  
  if (context === undefined) {
    throw new Error('Header must be used within a ThemeProvider')
  }
  
  const { theme, toggleTheme } = context
  
  return (
    <header className={`header ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  )
}
```

### Content.tsx (Direct Context Usage)
```tsx
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export function Content() {
  const context = useContext(ThemeContext)
  
  if (context === undefined) {
    throw new Error('Content must be used within a ThemeProvider')
  }
  
  const { theme } = context
  
  return (
    <main className={`content ${theme}`}>
      <p>Current theme: {theme}</p>
    </main>
  )
}
```

## Running the Example

```bash
npm install
npm run dev
```

Visit the app and click the "Toggle Theme" button to see the theme change!

## Comparison with Prop Drilling

Compare this example with the `theme-no-context` project to see the difference:

- **Prop Drilling**: Components receive theme as props from their parent
- **Context API**: Components access theme directly through `useContext`

The Context API approach is much cleaner and more maintainable!

## Next Steps

Later, we can introduce custom hooks to make the context usage even cleaner:
```tsx
// Future: Custom hook
function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
```
