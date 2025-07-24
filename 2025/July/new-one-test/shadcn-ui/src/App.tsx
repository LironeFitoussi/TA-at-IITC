import ButtonsWrapper from './components/ButtonsWrapper'
import UserInput from './components/UserInput'
import ProductCardWrapper from './components/ProductCardWrapper'
import UsersTable from './components/UsersTable'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ButtonsWrapper />
      <UserInput />
      <ProductCardWrapper />
      <UsersTable />
    </div>
  )
}

export default App
