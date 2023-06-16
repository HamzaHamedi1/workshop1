import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import NoEncryptionIcon from '@mui/icons-material/NoEncryption';

const Login = () => {
  return (
    <div id="Login">
      <h1>Welcome</h1>
      <div id="Login-container">
        <h2>Login</h2>
        <div className="input-container">
          <span>Email</span>
          <div className="Login-input">
            <input type="email" id="email2" name="email2" required />
            <EmailIcon className="email-icon" />
          </div>
        </div>
        <div className="input-container">
          <span>Password</span>
          <div className="Login-input">
            <input type="password" id="password2" name="password2" required/>
            <NoEncryptionIcon className="password-icon"/>
          </div>
        </div>
        <div id='ele1'>
        <div id='check'><input type="checkbox" />Remember Me </div>
        <div id='forget'><Link to="/Forget" className="nav-link"> Forgot-password</Link></div>
        </div>
        <button type="submit" id="login-button">Log in</button>
        <h4>Don't have an account? | <Link to="/Signup" className="nav-link">Signup</Link></h4>
      </div>
    </div>
  );
}

export default Login;
