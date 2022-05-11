import React from "react";
import "./leftNav.css";
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
export const TopNav = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const logOutHandler = () => {
    setAuth(localStorage.removeItem("token"));
    navigate("/login");
  };
  return (
    <span className="top-nav">
      {auth ? (
        <h3>
          <FaSignOutAlt onClick={logOutHandler} />
        </h3>
      ) : (
        <h3 onClick={() => navigate("/login")}>
          <FaUserAlt />
        </h3>
      )}
    </span>
  );
};
