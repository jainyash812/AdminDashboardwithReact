import React, { useState } from "react";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import "./sidebar.css";
import "../../app.css";
import { Link } from "react-router-dom";
export default function SideBar() {
  const [visibleSideBar, setVisibleSideBar] = useState(false);

  const toggleSideBar = () => {
    if (visibleSideBar) {
      setVisibleSideBar("flex");
    } else {
      setVisibleSideBar("none");
    }
  };
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link className="link" to="/">
                <li className="sidebarListItem">
                  <LineStyleIcon className="sidebarListIcon" />
                  Home
                </li>
              </Link>
              <li className="sidebarListItem">
                <TimelineIcon className="sidebarListIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <TrendingUpIcon className="sidebarListIcon" />
                Sales
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link to="/users" className="link">
                <li className="sidebarListItem">
                  <PersonOutlineIcon className="sidebarListIcon" />
                  Users
                </li>
              </Link>
              <li className="sidebarListItem">
                <AttachMoneyOutlinedIcon className="sidebarListIcon" />
                Transactions
              </li>
              <li className="sidebarListItem">
                <BarChartOutlinedIcon className="sidebarListIcon" />
                Reports
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <MailOutlinedIcon className="sidebarListIcon" />
                Mail
              </li>
              <li className="sidebarListItem">
                <DynamicFeedOutlinedIcon className="sidebarListIcon" />
                Feedback
              </li>
              <li className="sidebarListItem">
                <ChatBubbleOutlineOutlinedIcon className="sidebarListIcon" />
                Messages
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <ReportOutlinedIcon className="sidebarListIcon" />
                Report
              </li>
              <li className="sidebarListItem">
                <TimelineIcon className="sidebarListIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <AssignmentOutlinedIcon className="sidebarListIcon" />
                Manage
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
