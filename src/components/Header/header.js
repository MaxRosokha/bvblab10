import React from 'react';
import logo from '../../image/Logo1.png';
import favorite from '../../image/favorite_border.png';
import account from '../../image/account_circle.png';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
      <nav>
          <div className="menu-section">
              <div className="menu-icon">
                  <span className="menu-line"></span>
                  <span className="menu-line"></span>
                  <span className="menu-line"></span>
              </div>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/collections">Collections</Link></li>
                  <li><Link to="/">New</Link></li>
              </ul>
          </div>
          <div className="logo">
              <img src={logo} alt="Logo" />
          </div>
          <div className="icons">
              <Link to="/favoritePage">
                  <button className="icon-button" onClick={() => {
                  }}>
                      <img src={favorite} alt="Favorite icon" />
                  </button>
              </Link>
              <Link to="/SignIn">
                  <button className="icon-button">
                      <img src={account} alt="Account icon" />
                  </button>
              </Link>
          </div>
      </nav>
  </header>
);

export default Header;