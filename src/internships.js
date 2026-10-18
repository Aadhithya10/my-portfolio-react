import React from 'react';
import { Link } from 'react-router-dom';
import './internships.css';

function toggleMenu() {
  const nav = document.getElementById("navlinks");
  if (nav) nav.classList.toggle("show");
}

function Internships() {
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
         <p><b><h1>Internships &amp; Experience</h1></b></p>

        <div className="time">
           <p><b>ABB &mdash; Marine Team | AI Developer Intern | Jul 2026 &ndash; Oct 2026 | Bangalore, India (On-site)</b></p>
            <p>
                I interned at <b>ABB's Marine division</b> in Bangalore as an AI Developer, working on the
                company's industrial edge-to-cloud messaging and monitoring platform.
            </p>
            <ul>
                <li>Added <b>API versioning</b> to a .NET backend messaging service (Messaging Web API), enabling seamless client migration while retired versions return clear errors and deprecated ones return warnings.</li>
                <li>Debugged a <b>race condition</b> in the edge-to-cloud messaging flow (MQTT/AMQP) where messages failed due to arriving before their conversation was saved; removed incorrect resend logic and added automatic retries (10 attempts, 10s apart) with a failure notification.</li>
                <li>Built <b>Grafana observability dashboards</b> using OpenTelemetry to monitor request volume, latency, and errors; improved logs with trace IDs so a single message can be followed end-to-end.</li>
                <li>Wrote <b>Python/pytest automated tests</b> simulating outages and Kubernetes pod restarts to verify service recovery; made Playwright UI test suites portable across all environments.</li>
            </ul>
            <br />
        </div>

        <div className="time">
           <p><b>Trusty Bytes | Full Stack Developer Intern | May 2025 &ndash; Jun 2025 | India (On-site)</b></p>
            <p>
                I interned at <b>Trusty Bytes</b>, where I developed the frontend of a demand-supply mobile
                application using <b>React Native</b>. I focused on creating responsive and user-friendly
                interfaces, ensuring seamless interaction and performance across both Android and iOS platforms.
            </p>
            <ul>
                <li>Engineered <b>11 production-ready screens</b> in React Native (Android &amp; iOS) with zero rollback post-deployment.</li>
                <li>Architected a <b>reusable component library</b> that reduced UI duplication by ~30%, cutting iteration time for the 5-person engineering team.</li>
                <li>Operated within an <b>agile sprint cycle</b> with daily standups and PR-based code reviews.</li>
            </ul>
            <button className="button" onClick={() => window.open('certificate.pdf', '_blank')}>&#128196; View Certificate</button>
            <br /><br />
        </div>

        <div className="time">
            <p><b>Ananda Vikatan | Photojournalist | 2024 &ndash; 2025</b></p>
            <p>
            Alongside my tech pursuits, I worked as a Student Photojournalist with <b>Ananda Vikatan</b>, one of
            India's most respected and highest-circulation Tamil magazines. I published documentary photo stories
            that blend culture, emotion, and visual storytelling. This creative journey has refined my eye for
            detail and deepened my ability to communicate ideas clearly.
            </p>
           <a href="/photography" target="_blank" rel="noopener noreferrer" className="button">View Photography</a>
            <br /><br />
        </div>

        <blockquote>"Talk is cheap. Show me the code." &mdash; Linus Torvalds</blockquote>
    </div>
     </div>
    );
}

export default Internships;
