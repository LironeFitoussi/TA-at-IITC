import './App.css';
import { useState } from 'react'
import logImg from './assets/logo192.png'
import ChildComp from './components/ChildComp';

function App() {
  const [counter, setCounter] = useState(0)
  const increaseCount = () => {
    setCounter(counter + 1)
  }

  const reduceCount = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className="App">
      <img src={logImg} />
      <h1>Counter App</h1>
      <div className='counter-container'>
        <button onClick={reduceCount}>-</button>
        <ChildComp counter={counter}/>
        <button onClick={increaseCount}>+</button>
      </div>
    </div>
  );
}

export default App;
