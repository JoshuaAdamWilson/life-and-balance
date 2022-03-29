import axios from 'axios'
import React, { useContext, useRef} from 'react'
import { Context } from '../../../context/Context'
import './Login.css'
import LeafGif from "../../images/leaf-gif.gif"

const Login = () => {
  const userRef = useRef()
  const passwordRef = useRef()
  const { dispatch, isFetching } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type:"LOGIN_START" })
    try {
      const res = await axios.post("/auth/login", {
        email: userRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({ type:"LOGIN_SUCCESS", payload: res.data })
      window.location.replace("/admin")
    } catch (error) {
      dispatch({ type:"LOGIN_FAILURE" })
      console.log(error)
    }
  }

  return (
    <div className='login'>
      
        {isFetching ? (
          <img src={LeafGif} className="leaf-gif" />
        ) : (
          <form className='login-form' onSubmit={handleSubmit}>
            <h3>Login</h3>
            <input type='text' placeholder='Email' ref={userRef} />
            <input type='password' placeholder='Password' ref={passwordRef} />
            <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
          </form>
        )}
        

    </div>
  )
}

export default Login
