import { useState } from 'react'
import './App.css'

// Components
import Form from './components/Form'
import Success from './components/Success'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [score, setScore] = useState(1)

  const handleSubmit = () => {
    setIsSubmitted(prevState => !prevState)
  }
  
  console.log(score);

  if (isSubmitted) {
    return <Success score={score}/>
  } else {
    return <Form handleSubmit={handleSubmit} setScore={setScore}/>
  }
}

export default App
