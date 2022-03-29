import React from 'react'
import './NotFound.css'
import NotFoundPicture from '../images/notfoundpicture.jpg'

const NotFound = () => {
  return (
    <div>
      <img src={NotFoundPicture} alt="about" className="not-found-picture" />
    </div>
  )
}

export default NotFound
