import React from "react";
import "./leftNav.css";
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../features/auth/authSlice";
export const TopNav = () => {
  const navigate = useNavigate();
  const {user,token}= useSelector((store)=> store.timeline)
  const { auth, setAuth } = useAuth();

  const dispatch= useDispatch()
  const logOutHandler = () => {
    dispatch(userLogout())
    navigate("/login")
  };
  return (
    <span className="top-nav">
      {token ? (
        <h3>
          <FaSignOutAlt onClick={() =>logOutHandler()} />
        </h3>
      ) : (
        <h3 onClick={() => navigate("/login")}>
          <FaUserAlt />
        </h3>
      )}
    </span>
  );
};
