import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <div>
      <header>

      <ul className='nav'>
      <li><Link to="/HomePage" className="nav-link">HomePage</Link></li>
        <li><Link to="/Signup" className="nav-link">Signup</Link></li>
        <li><Link to="/Login" className="nav-link">Login</Link></li>
      </ul>
      </header>
    </div>
  )
}

export default Header
