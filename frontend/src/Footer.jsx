// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>We are dedicated to advocating for the rights of children worldwide, ensuring they have a voice and receive the protection and care they deserve.</p>
        </div>
        <div className="footer-section">
          <h2>Contact</h2>
          <p>Email: info@childrights.org</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Child Rights Awareness. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
