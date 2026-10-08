import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const Navigate = useNavigate();
  
  return (
    <header className="app-header">
      <nav className="nav-bar">
        <div className="logo">
          <h5>Hunter Flick</h5>
        </div>
    
        {/* Mobile toggle */}
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />

        <ul className="navigation">
          {/* <li><Link to="/">Home</Link></li> */}
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </nav>
    </header>
  );
};

export default Header;