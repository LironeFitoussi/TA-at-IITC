import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [joke, setJoke] = useState('')
  const [jokes, setJokes] = useState([])

  async function fetchJoke () {
    const res = await axios.get('http://localhost:3000/api/v1/jokes/random')
    console.log(res.data)

    setJoke(res.data)
    console.log("Component updated");
  }

  async function getAllJokes () {
    const res = await axios.get('http://localhost:3000/api/v1/jokes')
    console.log(res.data)
    
    setJokes(res.data)
    console.log("Component updated");
  }


  useEffect(() => {
    fetchJoke()
    getAllJokes()
    console.log("Component mounted");
  }, [])
  
  return (
    <>
      {/* <div>{JSON.stringify(joke)}</div> */}
      <div>
        <h1>Random Joke</h1>
        <p>{joke.setup}</p>
        <p>{joke.punchline}</p>
      </div>
      <button onClick={fetchJoke}>Get Random Joke</button>

      {jokes.map((joke) => (
        <div key={joke._id}>
          <h6>{joke.setup}</h6>
          <p>{joke.punchline}</p>
          <span>{joke._id}</span>
        </div>
      ))}
    </>
  )
}

export default App
