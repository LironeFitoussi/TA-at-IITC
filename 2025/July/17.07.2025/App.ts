import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [user, setUser] = useState({
    username: "",
    id: ""
  })
  const [userName, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const logInUser = async (username: string, password: string) => {
      const { data } = await axios.post('http://localhost:3001/api/auth/sign-in', {
        username, 
        password
      })

      // save token to local storage
      localStorage.setItem('token', data.token)

      fetchUser()
  }

  // Pass the Authorization Bearer token header in fetchUser
  const fetchUser = async() => {
    const token = localStorage.getItem('token')
    if (!token) return

    const { data } = await axios.get('http://localhost:3001/api/auth/me', {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    setUser(() => data.user)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <>
      {user?.id ? <p>the user is {user.username}, id :{user.id}</p> : <form>
        <input
          type="text"
          placeholder="Username"
          name="username"
          id="username"
          style={{ display: "block", marginBottom: "8px" }}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          style={{ display: "block", marginBottom: "8px" }}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={() => logInUser(userName, password)}
        >
          Login
        </button>
        </form>}
    </>
  )
}

export default App
