import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Header.css';
import '../App.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">
          <img src="https://cdn.pixabay.com/photo/2021/02/19/14/20/youtube-6030352_1280.png" alt="YouTube" />
          <span className="logo-text" style={{ fontSize: '24px' }}>Youtube Clone</span>
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
