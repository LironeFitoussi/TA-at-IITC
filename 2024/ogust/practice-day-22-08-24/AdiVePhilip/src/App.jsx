import { useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)
  const [showCounter, setShowCounter] = useState(true)
  
  // console.log('App.jsx is being rendered')
  const handleClick = () => {
    console.log("Button Cliked");
    setShowCounter(!showCounter);

    // if (showCounter === true) {
    //   setShowCounter(flase)
    // } else if (showCounter === flase){
    //   setShowCounter(true)
    // }
  }

  console.log(showCounter);

  return (
    <>
      <h1>Learn States</h1>
      <div className="card">
        {
            showCounter ? 
            
            (<button onClick={() => setCount((count) => count + 1)}>
              App count is {count}
            </button> ) 
            :
            (<div>no button</div>)
        }

        <button onClick={handleClick}>Hide Counter</button>
        {/* <Counter /> */}
      </div>
    </>
  )
}

export default App
