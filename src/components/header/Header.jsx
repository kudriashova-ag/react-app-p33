import React from 'react';
import { NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
      <header>
        <nav className="main-menu">
          
          <NavLink to="/">Home</NavLink>
          <NavLink to="/weather">Weather</NavLink>
        </nav>
      </header>
    );
}

export default Header;
