import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // your styles

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="home">
        <h2><b><Link to="/">Aadhithya Bharathi</Link></b></h2>
      </div>
      <button className="hamburger" onClick={() => {
        const nav = document.getElementById("navlinks");
        nav.classList.toggle("show");
      }}>☰</button>
      <div className="nav-links" id="navlinks">
        <Link to="/aboutme">About Me</Link>
        <Link to="/internships">Internships</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </div>
  );
}

export default Navbar;
