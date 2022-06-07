import React from "react";
import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { FaWpexplorer } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import "./leftNav.css";
import { useNavigate, useParams } from "react-router-dom";
import { PostModal } from "../modal/postModal";
import { useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const LeftNav = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {user}= useSelector(store => store.timeline)
  return (
    <div className="navbar-container">
      <PostModal onClose={onClose} isOpen={isOpen} />
      <div className="navbar-options">
        <AiOutlineHome className="navbar-icons" />
        <h3 onClick={() => navigate("/")}>Home</h3>
      </div>
      <div className="navbar-options">
        <FaWpexplorer className="navbar-icons" />
        <h3 onClick={()=> navigate("/explore")}>Explore</h3>
      </div>
      <div className="navbar-options">
        <BsBookmark className="navbar-icons" />
        <h3 onClick={() => navigate("/bookmark")}>BookMark</h3>
      </div>
      <div className="navbar-options" onClick={() => navigate("/notification")}>
        <MdOutlineNotificationsActive className="navbar-icons" />
        <h3>Notification</h3>
      </div>
      <div className="navbar-options">
        <AiOutlineHeart className="navbar-icons" />
        <h3 onClick={() => navigate("/liked")}>Liked</h3>
      </div>
      <div className="navbar-options">
        <CgProfile className="navbar-icons" />
        <h3 onClick={() => navigate(`/profile/${user?.username}`)}>Profile</h3>
      </div>
      <button className="create-post-btn" onClick={onOpen}>
        {" "}
        Create New Post
      </button>
    </div>
  );
};

export { LeftNav };
