import { Provider } from 'react-redux'
import { store } from './store'
import './App.css'

import Counter from './components/Counter'
function App() {

  return (
    <>
      <Provider store={store}>
        <h1>My Counter</h1>
        <Counter />
      </Provider>
    </>
  )
}

export default App
