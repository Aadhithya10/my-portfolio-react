import React from "react";
import { Link } from 'react-router-dom';
import './resume.css'; 


function toggleMenu() {
  const nav = document.getElementById("navlinks");
  if (nav) nav.classList.toggle("show");  
}

function Contact() {
  return (
    <div>
      <div className="nav-bar"> 
        <div className="home">
          <h2><b><Link to="/">Aadhithya Bharathi</Link></b></h2>
        </div>
        <button className="hamburger" onClick={toggleMenu}>☰</button> 
        <div className="nav-links" id="navlinks">
          <Link to="/aboutme">About Me</Link>
          <Link to="/internships">Internships</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>

      <div 
        className="timeline" 
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}
      >
        <div style={{ flex: 1, minWidth: '250px' }}>
          <h2>Contact Me</h2>
          <p>If you have any questions or would like to get in touch, feel free to reach out via email or connect with me on LinkedIn.</p>
          <div className="time">
            <p>📧 Email: <a href="mailto:aadhithyabharathi10@gmail.com">aadhithyabharathi10@gmail.com</a></p>
          </div>
          <div className="time">
            <p>🔗 LinkedIn: <a href="https://www.linkedin.com/in/aadhithya-bharathi-86a9aa290/" target="_blank" rel="noopener noreferrer">View My Profile</a></p>
          </div>
          <div className="time">
            <p>💻 GitHub: <a href="https://github.com/Aadhithya10" target="_blank" rel="noopener noreferrer">View My Profile</a></p>
          </div>
          <div className="time">
            <p>👨‍💻 HacherRank: <a href="https://www.hackerrank.com/profile/aadhithyabharat1" target="_blank" rel="noopener noreferrer">View My Profile</a></p>
          </div>
          
          <blockquote>"The only way to do great work is to love what you do." - Steve Jobs</blockquote>
        </div>

        <img 
          src="photo1.jpg" 
          alt="Aadhithya holding a camera"
          style={{ 
            width: '200px', 
            height: 'auto', 
            borderRadius: '12px', 
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)', 
            marginLeft: '20px', 
            marginTop: '10px' 
          }} 
        />
      </div>
    </div>
  );
}

export default Contact;
