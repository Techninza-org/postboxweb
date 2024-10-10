import React from "react";
import { Link } from "react-router-dom";
import postboxlogo from "../../assets/postboxlogo.jpeg";
import "./footer.css";

const Footer = () => {
  const openPage1 = () => {
    window.open("/termCon", "noopener,noreferrer");
  };

  const openPage2 = () => {
    window.open("/privacy", "noopener,noreferrer");
  };
  return (
    <div>
      <div className="footer">
        <div className="footer-links">
          <ul>
            <li>
              {" "}
              <Link to="/termCon" onClick={openPage1}>
                Terms and Conditions
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/privacy" onClick={openPage1}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/privacy" onClick={openPage2}>
                Refund Policy
              </Link>
            </li>
            <li>
              <img src={postboxlogo} alt="Logo" className="logo" />
            </li>
          </ul>
        </div>
        <div className="footer-copyright">
          <ul>
            <li>© 2024 All Rights Reserved by </li>
            <li>EZIO TRAVELS PRIVATE LIMITED</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
