import Link from 'next/link';
import React from 'react';
import './signIn.css'; 

function SignIn() {
  return (
    <div className="signin-container">
      <Link href={'/'}>
        <button className="signin-home-button">Home</button>
      </Link>
      <h1 className="signin-heading">Sign In</h1>
      <div className="form-container">
        <label htmlFor="Name">Name</label>
        <input
          className="input-field"
          type="text"
          name="Name"
          placeholder="Name"
          required
          id="name"
        />
        <label htmlFor="email">Email Address</label>
        <input
          className="input-field"
          type="text"
          name="email"
          placeholder="Email Address"
          required
          id="email"
        />
        <div className="signup-link">
          <h3>don&apos;t have an account ?</h3>
          <Link href={'/signUp'}>
            <button className="signup-button">SignUp</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
