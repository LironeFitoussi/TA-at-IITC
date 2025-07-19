import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    birthDate: "",
    password: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Subbmitted: ")
    console.log(formData);
    
  }

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target
    // name: username
    // value: ww

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))  
  }

  return (
    <>
      <h1>Hello</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={formData.username}
          onChange={handleChange} 
        />
        <br />
        <label htmlFor='email'>E-mail:</label>
        <input 
          type='email' 
          id='email' 
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor='birthDate'>Birth Date:</label>
        <input 
          type='date' 
          id='birthDate' 
          name='birthDate'
          value={formData.birthDate}
          onChange={handleChange}
        />
        <br />
        <label htmlFor='password'>Password:</label>
        <input 
          type='password' 
          id='password' 
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App