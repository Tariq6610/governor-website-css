import React from 'react';
import "./result.css"; 

function Page() {
  return (
    <div className="page-container">
      <h1 className="page-heading">Grand Entrance Exam Result</h1>
      <div className="form-container">
        <label htmlFor="regNum">Registration Number</label>
        <input
          className="input-field"
          type="text"
          name="regNum"
          placeholder="Registration Number"
          required
          id="regNum"
        />
        <label htmlFor="CNIC">CNIC or B-Form Number</label>
        <input
          className="input-field"
          type="text"
          name="CNIC"
          placeholder="CNIC or B-Form Number"
          required
          id="CNIC"
        />
      </div>
    </div>
  );
}

export default Page;
