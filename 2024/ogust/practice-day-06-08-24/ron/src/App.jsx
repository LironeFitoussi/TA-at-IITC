import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import Components:
import Header from './components/Header.jsx'
import Preps from './components/Preps.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Preps />
      <hr />
    </>
  )
}

export default App
