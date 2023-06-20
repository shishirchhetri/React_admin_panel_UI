import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import profile from '../../assets/profile.jpg'

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="top-left">
          <span className="logo">Admin Panel</span>
        </div>

        <div className="top-right">
          <div className="icon-container">
            <NotificationsNone />
            <span className="icon-batch">1</span>
          </div>

          <div className="icon-container">
            <Language />
            <span className="icon-batch">1</span>
          </div>

          <div className="icon-container">
            <Settings />
          </div>

          <img src={profile} alt="profile" className="profile-img"/>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
