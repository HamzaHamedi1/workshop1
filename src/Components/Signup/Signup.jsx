import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import './Signup.css';

const Signup = () => {
  return (
    <div id="Signup">
      <div id="Signup-container">
        <h2>Sign Up</h2>
        <div className="signup-input">
          <input type="text" id="username" name="username" required placeholder="Username" />
        </div>
        <div className="signup-input">
          <input type="email" id="email" name="email" required placeholder="Email" />
        </div>
        <div className="signup-input">
          <input type="password" id="password" name="password" required placeholder="Password" />
        </div>
        <div className="signup-input">
          <input type="password" id="confirm-password" required placeholder="Confirm Password" />
    
        </div>
        <div className="signup-social">
          <button className="signup-facebook">
            <FaFacebook className="signup-icon" />
          </button>
          <button className="signup-google">
            <FaGoogle className="signup-icon" />
          </button>
      <button type="submit" id="submit-button">Sign Up</button>
    
        </div>
      </div>
    </div>
  );
}

export default Signup;
