import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import git from "../../Images/github.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink to="/" onClick={closeMenu}>
            <img
              src={git}
              width="60"
              height="60"
              alt="Portfolio logo"
            />
          </NavLink>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
          <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>
            Projects
          </NavLink>
          <NavLink to="/skills" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>
            Skills
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
