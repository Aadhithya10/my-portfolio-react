import React from 'react';
import { Link } from 'react-router-dom';
import './aboutme.css';

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
        <button className="hamburger" onClick={() => toggleMenu()}>&#9776;</button>
        <div className="nav-links" id="navlinks">
          <Link to="/aboutme">About Me</Link>
          <Link to="/internships">Internships</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>

      <div className="timeline">
        <p><b><h1>About Me</h1></b></p>
        <div className="time" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div>
            <h2>Personal Details</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><b>Name:</b> Aadhithya Bharathi</li>
              <li><b>Education:</b> Final-year B.Tech Computer Science Engineering, Amrita Vishwa Vidyapeetham (CGPA: 9.01/10)</li>
              <li><b>Parallel Degree:</b> Diploma in Data Science, IIT Madras</li>
              <li><b>Location:</b> Coimbatore, India</li>
              <li><b>Interests:</b> AI/ML Engineering, Full-Stack Development, Distributed Systems, Data Analytics</li>
            </ul>
          </div>
        </div>

        <div className="time">
          <h2>Technical Skills</h2>
          <ul className="skills-list">
            <li>
              <span>Python</span>
              <div className="skill-bar"><div className="skill-level" style={{ width: '90%' }}></div></div>
            </li>
            <li>
              <span>JavaScript / React / React Native</span>
              <div className="skill-bar"><div className="skill-level" style={{ width: '80%' }}></div></div>
            </li>
            <li>
              <span>C# / .NET (ASP.NET Core)</span>
              <div className="skill-bar"><div className="skill-level" style={{ width: '75%' }}></div></div>
            </li>
            <li>
              <span>Go</span>
              <div className="skill-bar"><div className="skill-level" style={{ width: '70%' }}></div></div>
            </li>
            <li>
              <span>Java</span>
              <div className="skill-bar"><div className="skill-level" style={{ width: '70%' }}></div></div>
            </li>
            <li>
              <span>C</span>
              <div className="skill-bar"><div className="skill-level" style={{ width: '75%' }}></div></div>
            </li>
            <li>
              <span>SQL / Databases (MySQL, MongoDB, PostgreSQL)</span>
              <div className="skill-bar"><div className="skill-level" style={{ width: '75%' }}></div></div>
            </li>
            <li>
              <span>Docker / Kubernetes / Helm</span>
              <div className="skill-bar"><div className="skill-level" style={{ width: '70%' }}></div></div>
            </li>
            <li>
              <span>Machine Learning (Scikit-learn, Pandas, NumPy, Prophet, LSTM, YOLO)</span>
              <div className="skill-bar"><div className="skill-level" style={{ width: '80%' }}></div></div>
            </li>
            <li>
              <span>OpenTelemetry / Grafana / Prometheus</span>
              <div className="skill-bar"><div className="skill-level" style={{ width: '70%' }}></div></div>
            </li>
            <li>
              <span>HTML / CSS</span>
              <div className="skill-bar"><div className="skill-level" style={{ width: '90%' }}></div></div>
            </li>
          </ul>
        </div>

        <div className="time">
          <h2>General Skills</h2>
          <ul>
            <li>Problem solving &amp; critical thinking</li>
            <li>Fast learner &amp; adaptable to new technologies</li>
            <li>Effective communication &amp; collaboration</li>
            <li>Agile / Sprint-based development</li>
            <li>Technical writing &amp; documentation</li>
          </ul>
        </div>

        <div className="time">
          <h2>Achievements &amp; Competitions</h2>
          <ul>
            <li><b>Top 6 Finalist &mdash; ABB Accelerator 2026:</b> Selected from 1,600+ teams, 14,000+ participants, and 300+ colleges nationwide. Presented EdgeMind at the ABB Innovation Centre, Bengaluru.</li>
            <li>Participated in the Smart India Hackathon (SIH), contributing innovative solutions as part of a team.</li>
            <li>Advanced to the final round of the Amrita Value-Based Health Hackathon, working on impactful healthcare solutions.</li>
          </ul>
        </div>

        <div className="time">
          <h2>Research</h2>
          <ul>
            <li>
              <b>Multimodal AI Framework for Early Diagnosis of Fibromyalgia</b><br />
              Paper Presentation &mdash; Invente'25, SSN College of Engineering (Sep 2025)<br />
              Designed a multimodal deep learning framework combining imaging and clinical tabular data for early-stage fibromyalgia detection.
            </li>
          </ul>
        </div>

        <blockquote>"Creativity is intelligence having fun." &mdash; Albert Einstein</blockquote>
      </div>
    </div>
  );
}

export default AboutMe;
