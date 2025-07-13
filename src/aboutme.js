import React from 'react';
import './aboutme.css';
import { Link } from 'react-router-dom';

function toggleMenu() {
  const nav = document.getElementById("navlinks");
  if (nav) nav.classList.toggle("show");
}

function AboutMe() {
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

      <div className="timeline">
        <h2>About Me</h2>
        <div className="time" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div>
            <h2>Personal Details</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><b>Name:</b> Aadhithya Bharathi</li>
              <li><b>Education:</b> Undergraduate student in Computer Science</li>
              <li><b>Interests:</b> Blending tech & creativity; building user-friendly digital experiences</li>
            </ul>
          </div>
          <img src="standing.jpg" alt="Aadhithya holding a camera" style={{ width: '300px', height: 'auto', borderRadius: '12px', marginLeft: '80px', marginTop: '10px' }} />
        </div>

        <div className="time">
          <h2>Technical Skills</h2>
          <ul className="skills-list">
            <li>
              <span>Python</span>
              <div className="skill-bar"><div className="skill-level" style={{ width: '90%' }}></div></div>
            </li>
            <li>
              <span>C</span>
              <div className="skill-bar"><div className="skill-level" style={{ width: '80%' }}></div></div>
            </li>
            <li>
              <span>Java</span>
              <div className="skill-bar"><div className="skill-level" style={{ width: '70%' }}></div></div>
            </li>
            <li>
              <span>HTML</span>
              <div className="skill-bar"><div className="skill-level" style={{ width: '90%' }}></div></div>
            </li>
            <li>
              <span>CSS</span>
              <div className="skill-bar"><div className="skill-level" style={{ width: '85%' }}></div></div>
            </li>
            <li>
              <span>JavaScript</span>
              <div className="skill-bar"><div className="skill-level" style={{ width: '70%' }}></div></div>
            </li>
            <li>
              <span>SQL</span>
              <div className="skill-bar"><div className="skill-level" style={{ width: '70%' }}></div></div>
            </li>
          </ul>
        </div>

        <div className="time">
          <h2>General Skills</h2>
          <ul>
            <li>Problem solving & critical thinking</li>
            <li>Fast learner & adaptable to new technologies</li>
            <li>Effective communication & collaboration</li>
          </ul>
        </div>

        <div className="time">
          <h2>Competitions participated</h2>
          <ul>
            <li>Participated in the Smart India Hackathon (SIH), contributing innovative solutions as part of a team.</li>
            <li>Advanced to the final round of the Amrita Value-Based Health Hackathon, working on impactful healthcare solutions.</li>
          </ul>
        </div>

        <blockquote>"Creativity is intelligence having fun." - Albert Einstein</blockquote>
      </div>
    </div>
  );
}

export default AboutMe;
