import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useState } from "react";
import axios from "axios";

export const Signup = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [erorMsg, setErrorMsg] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const handelUserInput = (e) => {
   const {name,value}= e.target;
   setUserData({...userData,[name]:value});
   setErrorMsg(false)
  };

  const signUpHandler = async (e) => {
   e.preventDefault()
   try{
     const response = await axios.post("api/auth/signup",{
       firstName:userData.firstName,
       lastName:userData.lastName,
       username:userData.username,
       password:userData.password
     })
     localStorage.setItem("token", response.data.encodedToken);

      setAuth(true);
      navigate("/login");
     console.log(response);
   }catch(err){
     console.log(err);
   }
  };

  console.log(userData);
  return (
    <div className="form-container">
      <div className="validation">
        <h2>Sign Up</h2>
        <form action="">
          <div>
            <input
              type="text"
              className="form-input"
              placeholder="Enter your First Name "
              name="firstName"
              onChange={handelUserInput}
              value={userData.firstName}
            />
          </div>

          <div>
            <input
              type="text"
              className="form-input"
              name="lastName"
              placeholder="Enter your Last Name"
              onChange={handelUserInput}
              value={userData.lastName}
            />
          </div>

          <div>
            <input
              type="username"
              className="form-input"
              name="username"
              placeholder="Enter your email"
              onChange={handelUserInput}
              value={userData.username}
            />
          </div>

          <div>
            <input
              type="password"
              className="form-input"
              placeholder="Enter your password"
              name="password"
              onChange={handelUserInput}
              value={userData.password}
            ></input>
          </div>

          <div style={{ color: "red" }}>
            <p>{erorMsg && "Enter the fields"}</p>
          </div>

          <div>
            <Link to="/login">
              <p> Already have an account?</p>
            </Link>

            <button
              className="remove-card-btn"
              onClick={(e) => signUpHandler(e)}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
