import React from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
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
            />
          </div>

          <div>
            <input
              type="text"
              className="form-input"
              name="lastName"
              placeholder="Enter your Last Name"
            />
          </div>

          <div>
            <input
              type="email"
              className="form-input"
              name="Email"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <input
              type="password"
              className="form-input"
              placeholder="Enter your password"
              name="Password"
            ></input>
          </div>

          <div style={{ color: "red" }}>
            <p>error</p>
          </div>

          <div>
            <Link to="/login">
              <p> Already have an account?</p>
            </Link>

            <button>Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};
