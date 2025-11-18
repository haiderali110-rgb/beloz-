import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
     
            <div className="footer-column">
              <img src="/images/footer logo.png" alt="footer logo" className="footer-logo" />
              <p className="footer-description">
                Find the right Translator or <br />
                Interpreter to begin working on <br />
                your project within minutes.
              </p>
              <h2 className="footer-heading">Follow Us</h2>
              <div className="social-links">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/facebook.png" alt="facebook" className="social-icon" />
                </a>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/twitter.png" alt="twitter" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/linkedin.png" alt="linkedin" className="social-icon" />
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/youtube.png" alt="youtube" className="social-icon" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/instagram.png" alt="instagram" className="social-icon" />
                </a>
              </div>
            </div>

          
            <div className="footer-column">
              <h1 className="footer-heading">About</h1>
              <ul className="footer-links">
                <li><Link to="/about">About</Link></li>
                <li><a href="#">How it works</a></li>
                <li><a href="#">Invite a Friend</a></li>
                <li><a href="#">Blog</a></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

        
            <div className="footer-column">
              <h1 className="footer-heading">Services</h1>
              <ul className="footer-links">
                <li><Link to="/video">Video Remote Interpreting</Link></li>
                <li><Link to="/phone">Over the Phone Interpreting</Link></li>
                <li><Link to="/person">In Person Interpreting</Link></li>
              </ul>
            </div>

          
            <div className="footer-column">
              <h1 className="footer-heading">Support</h1>
              <ul className="footer-links">
                <li><a href="#">Support</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Trust & Safety</a></li>
              </ul>
            </div>

            
            <div className="footer-column">
              <h1 className="footer-heading">Download Our App</h1>
              <div className="app-badges">
                <a href="#">
                  <img src="/images/Mobile app store badge (1).png" alt="App Store" className="app-badge" />
                </a>
                <a href="#">
                  <img src="/images/Mobile app store badge.png" alt="Google Play" className="app-badge" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>© 2023 BELOZ LLC. All Rights Reserved</p>
            <p>Privacy Policy - Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;