import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import "./Admin.css"
import axios from "axios"
import { Context } from "../../../context/Context"
import LoadingGif from "../../images/leaf-gif.gif"

const Admin = () => {
  const { user, dispatch } = useContext(Context)
  const [ currentUser, setCurrentUser ] = useState([])
  const [ allUsers, setAllUsers ] = useState([])
  const [ email, setEmail ] = useState("")
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ loaded, setLoaded ] = useState(false)
  const [ message, setMessage ] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`https://life-and-balance.herokuapp.com/api/users/${user._id}`)
      setCurrentUser(response.data)
    }
    const getAllUsers = async () => {
      const response = await axios.get('https://life-and-balance.herokuapp.com/api/users/all')
      setAllUsers(response.data)
    }
    getUser()
    getAllUsers()
    setLoaded(true)
  }, [])

  const deleteUser = async (userToDelete) => {
    try {
      await axios.delete("https://life-and-balance.herokuapp.com/api/users/" + userToDelete._id, { data: userToDelete })
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
  const handleUpdate = async (e) => {
    e.preventDefault()
    dispatch({ type: "UPDATE_START"})
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password
    }
    try {
      const response = await axios.put("https://life-and-balance.herokuapp.com/api/users/" + user._id, updatedUser)
      setMessage(true)
      setTimeout(() => {
        setMessage(false)
        window.location.reload()
      }, 5000);
      
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE"})
    }
  }

  if (!loaded) {
    return <div className="admin-page">
        <img className="loading" src={LoadingGif} />
      </div>
  }

  return (
    <div className="admin-page">
      <h2 className="admin">Admin Panel</h2>
      <div className="navigation-section">
        <Link to="/register">Register New User</Link>
        <Link to="/blog/post-upload">Add a blog Post</Link>
        <Link to="/add-event">Add an Event</Link>
      </div>

      <h2 className="admin-users">Update Your Account</h2>
      <form className="account" onSubmit={handleUpdate}>
        <label>Username</label>
        <input
          type="text"
          placeholder={user.username} 
          onChange={e => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder={user.email}
          onChange={e => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Update</button>
        {message && <p className="message">Updated! Please logout and log back in<br /> using your new credentials!</p>}
      </form>
      {user.admin && (
        <>
          <h2 className="admin-users">All Users</h2>
          <ul className="users">
            {allUsers.map(thisUser => {
              return <li key={thisUser._id}>{thisUser.admin === true ? (
                ""
              ) : (
                <>
                  {thisUser.username} -- <button onClick={() => {
                    if (window.confirm(`Delete ${thisUser.username}? All their posts will be deleted as well!`)) {
                      deleteUser(thisUser)
                    }
                  }}>
                    Delete User
                  </button>
                </>
              )}</li>
            })}
          </ul>
        </>
      )}
    </div>
  )
}

export default Admin
