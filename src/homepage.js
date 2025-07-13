import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css'; 



function Homepage() {
  return (
    <div>
      <div className="nav-bar"> 
        <div className="home">
          <h2><b><Link to="/">Aadhithya Bharathi</Link></b></h2>
        </div>
        <button className="hamburger" onClick={() => toggleMenu()}>☰</button>
       <div className="nav-links" id="navlinks">
        
        <Link to="/aboutme">About Me</Link>
        <Link to="/internships">Internships</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact Me</Link>
      </div>

      </div>

      <div className="intro">
        <h1><b> Introduction:</b></h1>
        <br />
        <div className="intro-con">
          <img src="sitting.jpg" alt="Aadhithya Bharathi" style={{ width: "250px", height: "340px" }} />
          <div className="intro-text">
            <p><b>Hello, I’m Aadhithya Bharathi — a Computer Science undergraduate with a passion for building web experiences and telling stories through code and creativity.</b></p>
            <p>I specialize in full-stack web development, with a strong interest in designing intuitive, scalable, and responsive web applications. I enjoy working across both frontend and backend stacks — turning ideas into interactive digital products that serve real-world users.
            <br /><br />Beyond programming, I’m also a visual storyteller. My interest in photography has led me to publish work in Ananda Vikatan, where I’ve captured moments that blend culture, emotion, and narrative. This creative background complements my approach to development — where user experience, design, and functionality go hand in hand.
            I believe in continuous learning, collaborative growth, and using technology as a tool for positive impact. This portfolio showcases a mix of my technical projects, creative work, and personal explorations.
            Thank you for visiting — feel free to explore and reach out if you'd like to connect or collaborate.</p>
          </div>
        </div>
        <blockquote>“The best way to predict the future is to invent it.” — Alan Kay</blockquote>
      </div>
    </div>
  );
}


function toggleMenu() {
  const nav = document.getElementById("navlinks");
  if (nav) nav.classList.toggle("show");
}

export default Homepage;
