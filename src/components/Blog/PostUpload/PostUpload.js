import React, { useContext, useState } from 'react'
import './PostUpload.css'
import axios from "axios"
import { Context } from '../../../context/Context'
import { Block, Editor, EditorState, RichUtils, convertToRaw } from 'draft-js'
import 'draft-js/dist/Draft.css';
import draftToHtml from 'draftjs-to-html';
import { convertToHTML } from 'draft-convert'
import 'draft-js/dist/Draft.css';

const PostUpload = () => {
  const [ title, setTitle ] = useState("")
  const [ desc, setDesc ] = useState(() => EditorState.createEmpty())
  const [ file, setFile ] = useState(null)
  const { user } = useContext(Context)
  const [ error, setError ] = useState("")
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const rawContentState = convertToRaw(desc.getCurrentContent());

    const newPost = {
      username: user.username,
      title,
      desc: draftToHtml(rawContentState)
    }
    if (file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append("name", filename)
      data.append("file", file)
      newPost.photo = filename
      try {
        await axios.post("/upload", data)
      } catch (error) {
        console.log(error)
      }
    } else {
      setError("Photo Required")
      return
    }
    try {
      console.log(newPost)
      const res = await axios.post('https://life-and-balance.herokuapp.com/api/posts', newPost)
      
      window.location.replace("/blog/" + res.data._id)
    } catch (error) {
      console.log(error)
    }
    
  }

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(desc, command)

  if (newState) {
    setDesc(newState);
    return 'handled';
  }

  return 'not-handled';
  }

  const onUnderlineClick = (e) => {
    e.preventDefault();
    setDesc(RichUtils.toggleInlineStyle(desc, 'UNDERLINE'));
    return
  }

  const onBoldClick = (e) => {
    e.preventDefault();
    setDesc(RichUtils.toggleInlineStyle(desc, 'BOLD'));
    return
  }

  const onItalicClick = (e) => {
    e.preventDefault();
    setDesc(RichUtils.toggleInlineStyle(desc, 'ITALIC'));
    return
  }

  // const onBlockClick = (e) => {
  //   e.preventDefault();
  //   setDesc(RichUtils.toggleInlineStyle(desc, 'QUOTE'));
  //   return
  // }

  return (
    <div>
      <form className="post-upload">
        <div className="input-form">
          <h1>Add Post</h1>
          <label>Add an Image: </label>
          <div className="uploadContainer">
            <input 
              type="file"
              id="file-input"
              onChange={e => setFile(e.target.files[0])}
            />
            {file && (
              <img className="uploadImage" src={URL.createObjectURL(file)} alt="" />
            )}
          </div>
          <input 
            type="text"
            placeholder="Title"
            className="write-input-title"
            autoFocus={true}
            onChange={e => setTitle(e.target.value)}
          />
          <p className="styling-buttons">
            <button onClick={onBoldClick}><strong>B</strong></button>
            <button onClick={onUnderlineClick} style={{"textDecoration": "underline"}}>U</button>
            <button onClick={onItalicClick}><em>I</em></button>
            {/* <button onClick={onBlockClick}>Block</button> */}
          </p>
          <Editor
            placeholder="Write here..."
            handleKeyCommand={handleKeyCommand}
            className="write-input-content"
            editorState={desc}
            onChange={setDesc}
          />
          {error && <p className="photo-requirement">{error}</p>}
          <button className="write-submit" type="submit" onClick={handleSubmit}>Publish</button>
        </div>
      </form>
    </div>
  )
}

export default PostUpload
