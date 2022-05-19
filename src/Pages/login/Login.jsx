import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./login.css";
import { useAuth } from "../../context/authContext";
import { userLogin } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const [userDetails, setUserDetails] = useState({ username: "", password: "" });

  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onChangehandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
    
  };
 
  const testHandler = async (e) => {
    try {
      e.preventDefault();
      const res = await dispatch(
        userLogin({ username: 'adarshbalika', password: 'adarshBalika123' })
      );
      navigate("/")
    } catch (error) {
      console.log(error);
    }
    e.preventDefault();
   
      e.preventDefault();
      
    
  };

  const handelLogin = async (e) => {
    try {
      e.preventDefault();
      const res = await dispatch(
        userLogin(userDetails)
      );
      navigate("/")
    } catch (error) {
      console.log(error);
    }
    
  };
  return (
    <div className="form-container">
      <div className="validation">
        <h2>Login</h2>
        <form action="">
          <div className="input-wrapper">
            <input
              name="username"
              type="text"
              className="form-input"
              placeholder="Enter your Username"
              onChange={(e) => onChangehandler(e)}
            />
          </div>
          <div className="input-wrapper">
            <input
              className="form-input"
              name="password"
              class="form-input"
              placeholder="Enter your password"
              onChange={(e) => onChangehandler(e)}
            />
          </div>

          <div className="form-footer-one">
            <button className="remove-card-btn" onClick={(e) => testHandler(e)}>
              Guest Login
            </button>
            <button className="remove-card-btn" onClick={(e) => handelLogin(e)}>
              Login
            </button>
          </div>

          <div className="form-footer">
            <p> Don't have an account ?</p>

            <Link to="/sign">Create an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Login };
