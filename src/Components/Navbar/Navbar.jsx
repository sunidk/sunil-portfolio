import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <NavLink to="/">
              <img src="./github.png" width="15%" alt="Portfolio logo" />
            </NavLink>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            &#9776; 
          </div>
          <div className={`links ${isOpen ? "open" : ""}`}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
