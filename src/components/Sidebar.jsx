import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import '../App.css';

function Sidebar() {
  return (
    <nav className="sidebar">
      <Link to="/" className="sidebar-item">
        <i className="fas fa-home"></i>
        <span>홈</span>
      </Link>
      <Link to="/shorts" className="sidebar-item">
        <i className="fas fa-bolt"></i>
        <span>Shorts</span>
      </Link>
      <Link to="/subscriptions" className="sidebar-item">
        <i className="fas fa-play"></i>
        <span>구독</span>
      </Link>
      <hr />
      <Link to="/library" className="sidebar-item">
        <i className="fas fa-book"></i>
        <span>보관함</span>
      </Link>
      <Link to="/history" className="sidebar-item">
        <i className="fas fa-history"></i>
        <span>시청 기록</span>
      </Link>
    </nav>
  );
}

export default Sidebar;
