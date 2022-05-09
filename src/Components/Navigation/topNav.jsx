import React from "react";
import "./leftNav.css";
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/";
export const TopNav = () => {
  return (
    <div className="top-nav">
      <h3>
        <FaUserAlt />
      </h3>
      <h3>
        <FaSignOutAlt />
      </h3>
    </div>
  );
};
