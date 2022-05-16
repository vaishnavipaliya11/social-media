import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./login.css";
import { useAuth } from "../../context/authContext";
const Login = () => {
  const [userDetails, setUserDetails] = useState({ username: "", password: "" });

  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();

  const onChangehandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const loginHanddler = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.post("api/auth/login",{
        username:userDetails.username,
        password:userDetails.password
      })
      localStorage.setItem("token", response.data.encodedToken);
      setAuth(true);
      navigate("/");
    }catch(error){
      console.error()
    }
  };

  const testHandler = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post("api/auth/login", {
        username: "adarshbalika",
        password: "adarshBalika123",
      });
      localStorage.setItem("token", data.encodedToken);
      setAuth(true);
      navigate("/");
    } catch (error) {
      alert(error);
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
              type="text"
              class="form-input"
              placeholder="Enter your password"
              onChange={(e) => onChangehandler(e)}
            />
          </div>

          <div className="form-footer-one">
            <button className="remove-card-btn" onClick={(e) => testHandler(e)}>
              Guest Login
            </button>
            <button
              className="remove-card-btn"
              onClick={(e) => loginHanddler(e)}
            >
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
