import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Header.css';
import '../App.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button">
          <i className="fas fa-bars"></i>
        </button>
        <Link to="/" className="logo">
          <img src="/youtube-logo.png" alt="YouTube" />
        </Link>
      </div>
      <SearchBar />
      <div className="header-right">
        <button className="header-icon-button">
          <i className="fas fa-video"></i>
        </button>
        <button className="header-icon-button">
          <i className="fas fa-bell"></i>
        </button>
        <button className="header-icon-button">
          <i className="fas fa-user-circle"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
