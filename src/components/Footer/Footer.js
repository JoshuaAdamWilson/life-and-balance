import React from "react";
import "./Footer.css";
import FooterPicture from "../images/life-quote-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-first">
          <h4>SUICIDE PREVENTION</h4>
          <div className="social-links">
            <p>
              <strong>National Suicide Prevention Hotline:</strong>
              <br />
              1-800-273-8255
              <br />
              <strong>Crisis Text Line:</strong>
              <br />
              Text Hello to 741741
              <br />
              <strong>National Domestic Violence Hotline:</strong>
              <br />
              Text "START" to 88788 or
              <br /> Call 1-800-799-7233
            </p>
          </div>
        </div>
        <img
          src={FooterPicture}
          alt="logo and website name"
          className="footer-picture"
        />
        <div className="footer-second">
          <Link to="/acceptable-use">Acceptable Use Policy</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/disclaimer">Disclaimer</Link>
          <Link to="/refunds">Refund Policy</Link>
        </div>
      </div>
      <p className="copyright">
        Copyright © Life and Balance {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
