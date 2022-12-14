import React from 'react';
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className='nav-link' to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link' to="/about">About</Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link' to="/contactus">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}