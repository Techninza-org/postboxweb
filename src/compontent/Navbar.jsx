import React from "react";
import postboxlogo from "../assets/postboxlogo.jpeg";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={postboxlogo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Contact Us</li>
        {/* <li>Blog</li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
