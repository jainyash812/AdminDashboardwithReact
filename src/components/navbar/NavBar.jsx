import React from "react";
import "./navbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">react@dmin</span>
        </div>
        <div className="navbarRight">
          <div className="navbarIconContainer">
            <NotificationsNoneIcon />
            <span className="navIconBadge">2</span>
          </div>
          <div className="navbarIconContainer">
            <LanguageIcon />
            <span className="navIconBadge">2</span>
          </div>
          <div className="navbarIconContainer">
            <SettingsIcon />
            <span className="navIconBadge">2</span>
          </div>
          <img
            src="https://picsum.photos/200"
            className="navAvatar"
            alt="navAvatar"
          />
        </div>
      </div>
    </div>
  );
}
