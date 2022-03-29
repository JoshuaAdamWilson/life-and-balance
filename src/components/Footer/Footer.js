import React from 'react'
import './Footer.css'
import FooterPicture from '../images/life-quote-logo.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-first">
          <h4>SUICIDE PREVENTION</h4>
          <div className="social-links">
            <p>
              <strong>National Suicide Prevention Hotline:</strong><br />1-800-273-8255
              <br />
              <strong>Crisis Text Line:</strong><br />Text Hello to 741741
              <br />
              <strong>National Domestic Violence Hotline:</strong><br />Text "START" to 88788 or call 1-800-799-7233
            </p>
          </div>
        </div>
        <img src={FooterPicture} alt="logo and website name" className="footer-picture" />
        <div className="footer-second">
          <a href="http://localhost:3000/">Privacy Policy</a>
          <a href="http://localhost:3000/">Terms & Conditions</a>
          <a href="http://localhost:3000/">Disclaimer</a>
        </div>
      </div>
      <p className="copyright">
        Copyright © Life and Balance {new Date().getFullYear()}
      </p>
    </div>
  )
}

export default Footer
