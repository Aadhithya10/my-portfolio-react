import React from "react";
import { Link } from 'react-router-dom';
import './resume.css';

function toggleMenu() {
    const nav = document.getElementById("navlinks");
    if (nav) nav.classList.toggle("show");
}

function Resume() {
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
                <p><b><h1>My Resume</h1></b></p>

                <div className="time">
                    <h2>Education</h2>
                    <ul>
                        <li>
                            <p><b>Bachelor of Technology in Computer Science Engineering</b></p>
                            <p>Amrita Vishwa Vidyapeetham, Coimbatore &mdash; 2023 &ndash; 2027 | CGPA: 9.01 / 10</p>
                        </li>
                        <li>
                            <p><b>Diploma in Data Science</b></p>
                            <p>Indian Institute of Technology (IIT) Madras, Remote &mdash; 2023 &ndash; 2026</p>
                        </li>
                    </ul>
                    <br />
                </div>

                <div className="time">
                    <h2>Experience</h2>
                    <ul>
                        <li>
                            <p><b>AI Developer Intern</b></p>
                            <p>ABB &mdash; Marine Team, Bangalore (On-site) | Jul 2026 &ndash; Oct 2026</p>
                            <ul>
                                <li>Added API versioning to backend .NET messaging services (Messaging Web API) with graceful deprecation/retirement.</li>
                                <li>Debugged a race condition in the edge-to-cloud messaging flow (MQTT/AMQP); added automatic retries (10 attempts, 10s apart).</li>
                                <li>Built Grafana dashboards using OpenTelemetry for request volume, latency, and errors with end-to-end trace IDs.</li>
                                <li>Wrote Python/pytest tests simulating outages and Kubernetes pod restarts; made Playwright UI suites portable across environments.</li>
                            </ul>
                        </li>
                        <li>
                            <p><b>Full Stack Developer Intern</b></p>
                            <p>Trusty Bytes, India (On-site) | May 2025 &ndash; Jun 2025</p>
                            <ul>
                                <li>Engineered 11 production-ready screens in React Native (Android &amp; iOS) for a demand-supply workflow application with zero rollback.</li>
                                <li>Architected a reusable component library reducing UI duplication by ~30%.</li>
                            </ul>
                        </li>
                        <li>
                            <p><b>Photojournalist</b></p>
                            <p>Ananda Vikatan (Leading Tamil Publication) | 2024 &ndash; 2025</p>
                        </li>
                        <button className="button" onClick={() => window.open('/internships', '_self')}>Click to know more</button>
                    </ul>
                    <br />
                </div>

                <div className="time">
                    <h2>Projects</h2>
                    <ul>
                        <li>
                            <p><b>EdgeMind &mdash; Multi-Agent AI for Industrial Infrastructure Monitoring</b></p>
                            <p>React Native, Kubernetes, Prometheus, LLMs</p>
                            <p>Built for the ABB Hackathon. Developed a multi-agent AI system monitoring industrial Kubernetes workloads using Prometheus, detecting cascading failures, and performing AI-powered root cause analysis. Top 6 Finalist at ABB Accelerator 2026.</p>
                            <button className="button" onClick={() => window.open('https://github.com/Aadhithya10', '_blank')}>View on GitHub</button>
                        </li>
                        <li>
                            <p><b>Smart Cafeteria Management System</b></p>
                            <p>Go, Flask, React, Random Forest, Docker, JWT</p>
                            <p>Containerized microservices architecture for real-time cafeteria demand forecasting with JWT + 2FA. Random Forest model on 1,800+ records achieving ~81.5% forecasting accuracy.</p>
                            <button className="button" onClick={() => window.open('https://github.com/Aadhithya10', '_blank')}>View on GitHub</button>
                        </li>
                        <li>
                            <p><b>FX Decision Recommendation System</b></p>
                            <p>Python, Prophet, Pandas, REST API</p>
                            <p>FX analytics platform processing 2,500+ data points per currency across 10 years with VaR engine for treasury risk management.</p>
                            <button className="button" onClick={() => window.open('https://github.com/Aadhithya10', '_blank')}>View on GitHub</button>
                        </li>
                        <li>
                            <p><b>Pharmacy Inventory Optimization &amp; Demand Forecasting</b></p>
                            <p>Python, Pandas, Time-Series Forecasting &mdash; IIT Madras Capstone</p>
                            <p>Applied ABC/XYZ classification to build procurement control matrix. MAPE of 2.2% on top-selling product. Identified ~&#8377;52,838 in expiry losses.</p>
                            <button className="button" onClick={() => window.open('https://github.com/Aadhithya10', '_blank')}>View on GitHub</button>
                        </li>
                        <li>
                            <p><b>Attendance Management System</b></p>
                            <p>ReactJS, MongoDB, Tailwind CSS</p>
                            <button className="button" onClick={() => window.open('https://github.com/Acid-Rebel/Presence360', '_blank')}>View progress on GitHub</button>
                        </li>
                        <li>
                            <p><b>TO-DO App</b></p>
                            <p>HTML, CSS, JavaScript</p>
                            <button className="button" onClick={() => window.open('https://to-do-app-sigma-teal.vercel.app/', '_blank')}>View on Vercel</button>
                        </li>
                    </ul>
                    <br />
                </div>

                <div className="time">
                    <h2>Extra Curriculars</h2>
                    <ul>
                        <li>
                            <p><b>Editor &mdash; ASCII Technical Newsletter</b></p>
                            <p>Amrita Vishwa Vidyapeetham | 2024 &ndash; Present</p>
                            <p>Curate and edit technical content for a student audience, driving clarity and engagement on CS and AI topics.</p>
                        </li>
                    </ul>
                    <br />
                </div>

                <div className="time">
                    <h2>Certifications &amp; Courses</h2>
                    <ul>
                        <li>
                            <p><b>Data Analytics Job Simulation</b></p>
                            <p>Deloitte Australia (Forage) &mdash; Mar 2026</p>
                        </li>
                        <li>
                            <p><b>Introduction to Generative AI | Introduction to NLP | Prompt Engineering</b></p>
                            <p>Infosys Springboard &mdash; May 2026</p>
                        </li>
                        <li>
                            <p><b>Web Developer Boot Camp 2025</b></p>
                            <p>Udemy</p>
                        </li>
                        <li>
                            <p><b>Learn Figma 2025: From Basics to Your First Design Project</b></p>
                            <p>Udemy</p>
                        </li>
                        <li>
                            <p><b>50 Days of DSA Python Data Structures Algorithms &mdash; LeetCode</b></p>
                            <p>Udemy</p>
                        </li>
                    </ul>
                    <br />
                </div>

                <div className="time">
                    <h2>Skills</h2>
                    <ul>
                        <li>Programming Languages: Python, C#, JavaScript, Java, Go, C, SQL</li>
                        <li>Backend &amp; APIs: .NET (ASP.NET Core), REST APIs, FastAPI, Flask, WebSockets, Microservices, JWT, 2FA</li>
                        <li>Messaging &amp; Observability: MQTT, AMQP, OpenTelemetry, Grafana, Prometheus</li>
                        <li>Cloud &amp; DevOps: Kubernetes (k3s/k3d), Docker, Helm, Azure DevOps, Azure Pipelines, Git, Redis</li>
                        <li>Testing: pytest, Playwright, Allure, Integration Testing, Test Automation</li>
                        <li>AI / ML: Scikit-learn, Pandas, NumPy, Prophet, LSTM, CNN, YOLO, LLM APIs, Prompt Engineering, Agentic Orchestration</li>
                        <li>Web &amp; Mobile: React, React Native (Expo), HTML/CSS</li>
                        <li>Databases: MongoDB, MySQL, PostgreSQL</li>
                        <li>Data Visualization: Tableau, Matplotlib, Seaborn</li>
                        <li>Soft Skills: Teamwork, Communication, Problem Solving, Leadership</li>
                    </ul>
                    <br />
                </div>

                <br /><br />
                <a href="AadhithyaBharathi__cg.pdf" download className="button" target="_blank">Download Resume</a>

                <blockquote>"Simplicity is the ultimate sophistication." &mdash; Leonardo da Vinci</blockquote>
            </div>
        </div>
    );
}

export default Resume;
