import React from "react";
import logo from "../../image/Logo1.png";
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-info">
        <h3 className="footer-title">INFO</h3>
        <ul className="footer-links">
          <li><a href="#pricing">Pricing</a></li>
          <br/>
          <li><a href="#about">About</a></li>
          <br/>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </div>
      <div className="footer-logo">
        <img src={logo} alt="Boom Van Behoefte Logo" />
      </div>
      <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </button>
    </div>
    <nav className="footer-nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/collections">Collections</Link></li>
      <li><Link to="/">New</Link></li>
    </nav>
  </footer>
);

export default Footer;