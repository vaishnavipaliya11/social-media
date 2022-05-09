import React from "react";
import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { FaWpexplorer } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import "./leftNav.css";
import { useNavigate } from "react-router-dom";
const LeftNav = () => {
  const navigate = useNavigate()
  return (
    <div className="navbar-container">
      <div className="navbar-options">
        <AiOutlineHome className="navbar-icons" />
        <h3>Home</h3>
      </div>
      <div className="navbar-options">
        <FaWpexplorer className="navbar-icons" />
        <h3>Explore</h3>
      </div>
      <div className="navbar-options">
        <BsBookmark className="navbar-icons" />
         <h3 onClick={()=> navigate("/bookmark")}>BookMark</h3>
      </div>
      <div className="navbar-options"  onClick={()=> navigate("/notification")}>
        <MdOutlineNotificationsActive className="navbar-icons" />
          <h3>Notification</h3>
      </div>
      <div className="navbar-options">
        <AiOutlineHeart className="navbar-icons" />
          <h3 onClick={()=> navigate("/liked")}>Liked</h3>
      </div>
      <div className="navbar-options">
        <CgProfile className="navbar-icons" />
          <h3 onClick={()=> navigate("/profile")}>Profile</h3>
      </div> 
      <button className="create-post-btn">Create New Post</button>
    </div>
  );
};

export { LeftNav };
