import React from "react";
import "./leftNav.css";
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/";
import { useNavigate } from "react-router-dom";
export const TopNav = () => {
  const navigate = useNavigate()
  return (
    <span className="top-nav">
      <h3 onClick={()=> navigate('/login')}>
        <FaUserAlt />
      </h3>
      <h3>
        <FaSignOutAlt />
      </h3>

    </span>
  );
};
