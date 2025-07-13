import React from "react";
import { Link } from 'react-router-dom';
import './resume.css';



function toggleMenu() {
    const nav = document.getElementById("navlinks");
    nav.classList.toggle("show");

    }
function Resume() {
    return (
        <div>
            <div className="nav-bar"> 
                <div className="home">
                    <h2><b><Link to="/">Aadhithya Bharathi</Link></b></h2>
                </div>
                <button className="hamburger" onClick={() => toggleMenu()}>☰</button>
                <div className="nav-links" id="navlinks">
                    <Link to="/">Home</Link>
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
                    <p><b>Bachelor of Technology in Computer Science and Engineering</b></p>
                    <p>Amrita Vishwa Vidhyapeetham, 2023 - Present</p>
                </li>
                <li>
                    <p><b>Diploma in Data Science</b></p>
                    <p>IIT Madras, 2023- Present</p>
                </li>
            </ul>
             <br/>
            </div>
            <div className="time">
            <h2>Experience</h2>
            <ul>
                <li>
                    <p><b>Full stack developer intern</b></p>
                    <p>Trusty Bytes, May 2025-June 2025</p>
                </li>
                <li>
                    <p><b>Photo Journalist</b></p>
                    <p>Ananda Vikatan, August 2024- August 2025</p>
                </li>
                <button className="button" onClick={()=>window.open('./internships', '_blank')}>Click to know more</button>
            </ul>
             <br/>
            </div>
            <div className="time">
                <h2>Extra Curriculars</h2>
                <ul>
                    <li>
                        <p><b>Editor at ASCII newsletter</b></p>
                        <p>Amrita Vishwa Vidhyapeetham</p>
                    </li>
                </ul>
                 <br/>
                </div>
                <div className="time">
                <h2>projects</h2>
                <ul>
                    <li>
                        <p><b>Made an TO-DO website </b></p>
                        <p>HTML, CSS, JavaScript</p>
                        <button className="button" onClick={()=>window.open('https://to-do-app-sigma-teal.vercel.app/', '_blank')}>View My project on Vercel</button>
                    </li>
                    <li>
                        <p><b>Made an Online Bakery Website </b></p>
                        <p>HTML, CSS, JavaScript</p>
                    </li>
                </ul>
                 <br/>
                </div>
                <div className="time">
                    <h2>Courses</h2>
                    <ul>
                        <li>
                            <p><b>Web Developer Boot camp 2025</b></p>
                            <p>Udemy</p>
                        </li>
                        <li>
                            <p><b>Learn Figma 2025 : From Basics to Your First Design Project </b></p>
                            <p>Udemy</p>
                        </li>
                        <li>
                            <p><b>50 Days of DSA Python Data Structures Algorithms LEETCODE</b></p>
                            <p>Udemy</p>
                        </li>
                    </ul> <br/>
                        
                </div>
            <div className="time">
                <h2>Skills</h2>
                <ul>
                    <li>Programming Languages: Python, Java, C, JavaScript</li>
                    <li>Web Development: HTML, CSS</li>
                    <li>Database Management: MySQL</li>
                    <li>Soft Skills: Teamwork, Communication, Problem Solving, leadership</li>
                </ul>
                <br/>
                </div>
         
        <br/> <br/>
                <a href="Aadhithya.pdf" download className="button" target="_blank" >Download Resume</a>

            <blockquote>
              "Simplicity is the ultimate sophistication." - Leonardo da Vinci
            </blockquote>   
           </div>

    




        </div>
    );
}
export default Resume;
