import Link from "next/link";
import React from "react";
import './signUp.css'; 

function SignUp() {
  return (
    <div className="signup-container">
      <Link href={"/"}>
        <button className="signup-home-button">Home</button>
      </Link>
      <h1 className="signup-heading">Sign Up</h1>
      <div className="form-container">
        <label htmlFor="Name">Name</label>
        <input
          className="input-field"
          type="text"
          name="Name"
          placeholder="Name"
          required
          id=""
        />
        <label htmlFor="email">Email Address</label>
        <input
          className="input-field"
          type="text"
          name="email"
          placeholder="Email Address"
          required
          id=""
        />
        <div className="login-link">
          <h3>already have an account?</h3>
          <Link href={"/signIn"}>
            <button className="login-button">SignIn</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
