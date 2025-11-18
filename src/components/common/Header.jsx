import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleServiceChange = (e) => {
    
    window.location.href = e.target.value;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/images/Group.png" alt="Logo" />
          </Link>
           
          <button 
            className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            
            <div className="select-container">
              <select onChange={handleServiceChange} value={location.pathname}>
                <option value="/services">Services</option>
                <option value="/video">Video Services</option>
                <option value="/phone">Phone Services</option>
                <option value="/person">Person Services</option>
              </select>
            </div>
            
            <Link to="/career" className={location.pathname === '/career' ? 'active' : ''}>Career</Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
          </nav>
          
          <div className="auth-buttons">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;