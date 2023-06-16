import React from 'react';
import './Forget.css';

const Forget= () => {
  return (
    <div id="ForgetPassword">
      <div id="ForgetPassword-container">
        <h1>Forget Password</h1>
        <div className="forget-input">
          <input type="email" id="email" name="email" required placeholder="Email" />
        </div>
        <button id="submit-button">Reset Password</button>
      </div>
    </div>
  );
};

export default Forget;
