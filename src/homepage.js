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
        <button className="hamburger" onClick={() => toggleMenu()}>&#9776;</button>
        <div className="nav-links" id="navlinks">
          <Link to="/aboutme">About Me</Link>
          <Link to="/internships">Internships</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>
      <div className="intro">
        <p><b><h1>Introduction</h1></b></p>
        <br />
        <div className="intro-con">
          <img src="sitting.jpg" alt="Aadhithya Bharathi" style={{ width: "250px", height: "340px" }} />
          <div className="intro-text">
            <p><b>Hello, I'm Aadhithya Bharathi &mdash; a final-year Computer Science undergraduate at Amrita Vishwa Vidyapeetham (CGPA: 9.01/10), passionate about AI/ML engineering, full-stack development, and building systems that make a real-world impact.</b></p>
            <p>
              I have built production-grade full-stack applications, ML pipelines, and distributed systems
              across internships at ABB Marine and Trusty Bytes. As an AI Developer Intern at ABB Marine
              (Jul&ndash;Oct 2026), I worked on Kubernetes observability, API versioning in .NET,
              messaging reliability (MQTT/AMQP), and automated test infrastructure using Python,
              OpenTelemetry, Grafana, and Playwright.
              <br /><br />
              In parallel, I am pursuing a Diploma in Data Science from IIT Madras, deepening my skills in
              forecasting, analytics, and machine learning. I was a <b>Top 6 Finalist at the ABB Accelerator 2026</b>
              &mdash; selected from 1,600+ teams and 14,000+ participants across 300+ colleges nationwide &mdash;
              where I presented EdgeMind, a multi-agent AI system for industrial Kubernetes monitoring.
              <br /><br />
              Beyond engineering, I am a visual storyteller. My photography has been published in Ananda Vikatan,
              one of India's highest-circulation Tamil magazines. Thank you for visiting &mdash; feel free to
              explore and reach out if you'd like to connect or collaborate!
            </p>
          </div>
        </div>
        <blockquote>"The best way to predict the future is to invent it." &mdash; Alan Kay</blockquote>
      </div>
    </div>
  );
}

function toggleMenu() {
  const nav = document.getElementById("navlinks");
  if (nav) nav.classList.toggle("show");
}

export default Homepage;
