import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ isDarkMode, onToggleDarkMode }) => {
    const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode"; 

    return (
      <header>
        <nav>
          <Link to="/">
            <h1 className="branding">
              <span className="logo">{"::"}</span>
              Surf-free
            </h1>
          </Link>
        <div className="navigation">
          <NavLink className="button" exact to="/shops">
            All Shops
          </NavLink>
          <NavLink className="button" exact to="/shops/new">
            New Shops
          </NavLink>
          <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
        </div>
       </nav>
      </header>  
    )
  }

export default Header 