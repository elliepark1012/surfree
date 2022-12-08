import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/surfree-logo.png";

const Header = ({ isDarkMode, onToggleDarkMode }) => {
    const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode"; 
    return (
      <header>
        <nav>
          <div className="navbar-div">
                <img 
                  className="logo-image"
                  src={logo} 
                  alt="logo"
                />
          </div>
          <div className="navbar-div">
          <ul className="navbar">
            <li><Link className="nav-bar-link" to="/">Home</Link></li>
            <li><NavLink className="nav-bar-link" exact to="/shops">All Shops</NavLink></li>
            <li><NavLink className="nav-bar-link" exact to="/shops/new"> Join Us</NavLink></li>
            <li><button className="nav-bar-button" onClick={onToggleDarkMode}>{buttonTextContent}</button></li>
          </ul>
          </div>
       </nav>
      </header>  
    )
  }

export default Header;