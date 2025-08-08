import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img alt="Gigaversity Logo" className="logo" src="https://gigaversity.in/static/media/GIGAVERSITY_LOGO.75e09a6ac974a05b477c.png" />
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog/first-job">First job</Link></li>
          <li><Link to="/blog/mern-guide">MERN Blog</Link></li>
          <li><Link to="/blog/project-overview">Blog 2</Link></li>
          <li><Link to="/blog/virtual-internship">Internship</Link></li>
          <li><Link to="">Blog</Link></li>
        </ul>
        <div className="navbar-button">
          <button className="apply-btn" title="Apply now !">Apply Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
