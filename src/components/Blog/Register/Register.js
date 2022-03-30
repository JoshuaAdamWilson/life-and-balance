import React, { useState } from 'react'
import './Register.css';
import axios from "axios"

const Register = () => {
  const [ username, setUserName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ error, setError ] = useState(false)
  const [ createduser, setCreateduser ] = useState("")

const handleSubmit = async (e) => {
  e.preventDefault()
  setError(false)
  try {
    const res = await axios.post("https://life-and-balance.herokuapp.com/api/auth/register", {
      username,
      email,
      password
    })
    setCreateduser("User was Created")
    setTimeout(() => {
      setCreateduser("")
      window.location.replace("/admin")
    }, 3000);
  } catch (error) {
    setError(true)
    setTimeout(() => {
      setError(false)
    }, 3000);
  }
}

  return (
    <div className='register'>
      <form className='register-form' onSubmit={handleSubmit}>
        <h3>Register New User</h3>
        <input 
          type='text'
          placeholder='Full Name'
          onChange={e => setUserName(e.target.value)}
        />
        <input 
          type='email'
          placeholder='Email'
          onChange={e => setEmail(e.target.value)}
        />
        <input 
          type='password'
          placeholder='Password'
          onChange={e => setPassword(e.target.value)}
        />
        <button className="loginButton">Register</button>
        <p className="createdUser">{createduser}</p>
        {error && <p style={{color:"red"}}>Something went wrong!</p>}
      </form>
    </div>
  )
}

export default Register
