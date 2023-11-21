import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <h2>Sign Up</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Username" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Confirm Password" />
          </div>
          <button className="btn-signup" type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
