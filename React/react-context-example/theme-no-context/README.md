# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# Theme Toggle with Prop Drilling

This example demonstrates theme toggling using **prop drilling** - passing state down through props at each level of the component tree.

## Project Structure

```
src/
├── components/
│   ├── Header.tsx    # Receives theme and toggleTheme as props
│   ├── Content.tsx   # Receives theme as prop
│   └── Footer.tsx    # Receives theme as prop
├── App.tsx           # Manages state and passes props down
└── App.css           # Theme-specific styles
```

## How it works

1. **State Management**: The `theme` state and `toggleTheme` function are defined in the `App` component
2. **Prop Drilling**: These are passed down as props to each child component (`Header`, `Content`, `Footer`)
3. **Component Usage**: Each component receives the theme state and can access the toggle function

## Key Features

- ✅ Simple and straightforward
- ✅ No additional dependencies
- ✅ Easy to understand for beginners
- ✅ Clear separation of components

## Drawbacks

- ❌ Props must be passed through every intermediate component
- ❌ Components become tightly coupled to their parent's state
- ❌ Harder to maintain as the component tree grows
- ❌ Components that don't need the theme still receive it as props

## Code Examples

### App.tsx (State Management)
```tsx
function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  
  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Content theme={theme} />
      <Footer theme={theme} />
    </div>
  )
}
```

### Header.tsx (Receives Props)
```tsx
interface HeaderProps {
  theme: string
  toggleTheme: () => void
}

export function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <header className={`header ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  )
}
```

### Content.tsx (Receives Props)
```tsx
interface ContentProps {
  theme: string
}

export function Content({ theme }: ContentProps) {
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

## Next Steps

Compare this with the `theme-context` project to see how React Context API eliminates the need for prop drilling!
