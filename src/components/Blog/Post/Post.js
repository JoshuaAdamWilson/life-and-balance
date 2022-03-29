import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import NotFound from "../../NotFound/NotFound"
import './Post.css'
import { Context } from "../../../context/Context"

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2]
  const [ post, setPost ] = useState({})
  const [ redirect, setRedirect ] = useState(false)
  const PF = "https://life-and-balance.herokuapp.com/images/"
  const { user } = useContext(Context)
  const [ title, setTitle ] = useState("")
  const [ desc, setDesc ] = useState("")
  const [ updateMode, setUpdateMode ] = useState(false)

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get("https://life-and-balance.herokuapp.com/posts/" + path)
        setPost(response.data)
        setTitle(response.data.title)
        setDesc(response.data.desc)
      } catch (error) {
        setRedirect(true)
      }
    }
    getPost()
  }, [path])

  const handleDelete = async () => {
    try {
      await axios.delete("https://life-and-balance.herokuapp.com/posts/" + path, { data: { username: user.username }})
      window.location.replace("/")
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = async () => {
    try {
      await axios.put("https://life-and-balance.herokuapp.com/posts/" + path, { username: user.username, title, desc })
      setUpdateMode(false)
    } catch (error) {
      console.log(error)
    }
  }

  const openUpdate = () => {
    if (updateMode) {
      setUpdateMode(false)
    } else {
      setUpdateMode(true)
    }
  }

  if (redirect) {
    return <NotFound />
  }

  return (
    <div className="single-post-container">
      <img className="single-blog-post-picture" src={PF + post.photo} alt="post" />
      {updateMode ? (
        <h2><input 
          type="text"
          value={title}
          className="single-blog-post-title-input" 
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
        /></h2>
      ) : (
        <h2 className="single-blog-post-title">{post.title}</h2>
      )}
      {post.username === user?.username && (
        <>
          <i className="icon far fa-edit" onClick={openUpdate}
          ></i>
          <i className="icon far fa-trash-alt" onClick={handleDelete}></i>
        </>
      )}
      <p className="single-blog-post-author">Written by: {post.username}</p>
      <p className="single-blog-date">{new Date(post.createdAt).toDateString()}</p>
      {updateMode ? (
        <>
          <textarea
            className="single-blog-description-input"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          /><br />
          <button className="update" onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <div className="blog-content" dangerouslySetInnerHTML={{__html: `${post.desc}`}} />
      )}

    </div>
  )
}

export default Post
