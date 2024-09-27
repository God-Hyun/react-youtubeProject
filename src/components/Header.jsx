import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Login from './Login';
import useStore from '../store';
import './Header.css';
import '../App.css';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { FaVideo, FaBell } from 'react-icons/fa';

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const { isLoggedIn, user, logout } = useStore();

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">
          <img src="https://cdn.pixabay.com/photo/2021/02/19/14/20/youtube-6030352_1280.png" alt="YouTube" />
          <span className="logo-text">Godhyun's YouTube</span>
        </Link>
      </div>
      <SearchBar />
      <div className="header-right">
        <button className="header-icon-button">
          <FaVideo />
        </button>
        <button className="header-icon-button">
          <FaBell />
        </button>
        {isLoggedIn ? (
          <div className="user-menu">
            <button className="header-icon-button">
              <IoPersonCircleOutline style={{ fontSize: '24px' }}/>
              <span>{user.username}</span>
            </button>
            <button onClick={logout}>로그아웃</button>
          </div>
        ) : (
          <button className="login-button" onClick={handleLoginClick}>
            <IoPersonCircleOutline style={{ fontSize: '24px' }} />
            <span>로그인</span>
          </button>
        )}
      </div>
      {showLogin && <Login onClose={handleCloseLogin} />}
    </header>
  );
}

export default Header;
