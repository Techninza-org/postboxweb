import React from "react";
import { Link } from "react-router-dom";
import postboxlogo from "../../assets/postboxlogo.jpeg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <ul>
        <li>
            <Link to="/">
              <img src={postboxlogo} alt="Logo" className="logo" />
            </Link>
          </li>
          <li>
            <Link to="/">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/privacy">Refund Policy</Link>
          </li>
          
        </ul>
      </div>
      <div className="footer-copyright">
        <ul>
          <li>© 2024 All Rights Reserved by</li>
          <li>EZIO TRAVELS PRIVATE LIMITED</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
