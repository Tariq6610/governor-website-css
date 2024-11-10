import Link from 'next/link';
import React from 'react';
import "./apply.css"; 

function Apply() {
  return (
    <div className="apply-container">
      <div className="apply-inner">
        <h1 className="apply-heading">
          Before continuing to the application please sign up to create an account
        </h1>
        <Link href={'/signUp'}>
          <button className="apply-button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Apply;
