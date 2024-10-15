import React, { useState } from "react";
import { Link } from "react-router-dom";
import postboxlogo from "../../assets/postboxlogo.jpeg";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={postboxlogo} alt="Logo" className="logo" />
      </div>
      <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/">
          <li>Contact Us</li>
        </Link>
        {/* <li>Blog</li> */}
      </ul>
      <button className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? "X" : "="}
      </button>
    </nav>
  );
};

export default Navbar;
