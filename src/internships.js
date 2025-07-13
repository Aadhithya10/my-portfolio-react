import React from 'react';
import './internships.css';
import { Link } from 'react-router-dom';


function toggleMenu() {
  const nav = document.getElementById("navlinks");
  if (nav) nav.classList.toggle("show");
}
function Internships() {
    return (
        <div>
        <div className="nav-bar"> 
        <div className="home">
           <h2><b><Link to="/">Aadhithya Bharathi</Link></b> </h2></div>
           <button className="hamburger" onClick={() => toggleMenu()}>☰</button>
             <div className="nav-links" id="navlinks">
           
            <Link to="/aboutme">About Me</Link>
            <Link to="/internships">Internships</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact Me</Link>
            </div>

      </div>

      <div className="timeline">
        <h2>Internships</h2>
        <div className="time">
           <p><b>Trusty Bytes | Full Stack Developer | May 2025- June 2025</b></p>
            <p>
                I interned at <b>Trusty Bytes</b>, where I developed the frontend of a demand-supply mobile 
                application using <b>React Native</b>. During this time, I focused on creating responsive and 
                user-friendly interfaces, ensuring seamless interaction and performance across both Android and
                 iOS platforms. This experience strengthened my skills in mobile UI development, component-based 
                 architecture, and cross-platform design.
                 
            </p>
              
                
            <button className="button" onClick={() => window.open('certificate.pdf', '_blank')}>📄 View Certificate</button>
            <br/><br/>
            
        </div>
        <div className="time"> 
            <p><b>Ananda Vikatan | Photo Journalist | August 2024 - Present</b></p>
            <p>
            Alongside my tech pursuits, I’ve been working as a Student Journalist with Ananda Vikatan, one of 
            India’s most respected Tamil magazines. As a photojournalist, I’ve published stories that blend 
            culture, emotion, and visual storytelling. This creative journey has refined my eye for detail and 
            deepened my ability to communicate ideas clearly — skills I now bring into my design and development work.</p>
           <a href="/photography" target="_blank" rel="noopener noreferrer" className="button">Click Here
</a>
            <br/><br/>
        </div>
        
        <blockquote>"Talk is cheap. Show me the code." - Linus Torvalds</blockquote>
    </div>
     </div> 

    );
}
export default Internships;