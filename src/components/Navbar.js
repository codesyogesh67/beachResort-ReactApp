import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__nav">
        <div className="navbar__header">
          <Link to="/">
            <img className="navbar__logo" src={logo} alt="Beach resort" />
          </Link>
          <button
            type="button"
            className="navbar__button"
            onClick={handleToggle}
          >
            <FaAlignRight className="navbar__icon" />
          </button>{" "}
        </div>

        <ul className={isOpen ? "navbar__links show-nav" : "navbar__links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
