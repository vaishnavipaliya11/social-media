import React from "react";
import { Link } from "react-router-dom";
import "./login.css"
export const Login = () => {
  return (
    <div className="form-container">
      <div className="validation">
        <h2>Login</h2>
        <form action="">
          <div className="input-wrapper">
            <input
              name="email"
              type="text"
              className="form-input"
              placeholder="Enter your Email"
            />
          </div>

          <div className="input-wrapper">
            <input
              className="form-input"
              name="password"
              type="text"
              class="form-input"
              placeholder="Enter your password"
            />
          </div>

          <div className="form-footer-one">
            <button className="remove-card-btn">Guest Login</button>
            <button className="remove-card-btn">Login</button>
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
