import './App.css'

// Components Imports
import Products from './components/Products'
import Cart from './components/Cart'

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px'}}>
      <h1>Redux Cart (with toolkit)</h1>
      <Products />
      <Cart />
    </div>
  )
}

export default App
