import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdSubscriptions } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import { VscLibrary } from "react-icons/vsc";
import { RiHistoryLine } from "react-icons/ri";
import "./Sidebar.css";

function Sidebar() {
  return (
    <nav className="sidebar">
      <Link to="/" className="sidebar-item">
        <AiFillHome />
        <span>홈</span>
      </Link>
      <Link to="/shorts" className="sidebar-item">
        <BsLightningCharge />
        <span>Shorts</span>
      </Link>
      <Link to="/subscriptions" className="sidebar-item">
        <MdSubscriptions />
        <span>구독</span>
      </Link>
      <hr />
      <Link to="/library" className="sidebar-item">
        <VscLibrary />
        <span>보관함</span>
      </Link>
      <Link to="/history" className="sidebar-item">
        <RiHistoryLine />
        <span>시청 기록</span>
      </Link>
    </nav>
  );
}

export default Sidebar;
