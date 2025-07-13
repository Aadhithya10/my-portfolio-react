import React from "react"; 
import { Link } from 'react-router-dom'; 
import './photography.css';



function toggleMenu() {
    const nav = document.getElementById("navlinks");
    if (nav) nav.classNameList.toggle("show");
}
function Photography() {
    return (
        <div>
           <div className="nav-bar"> 
      <div className="home">
         <h2><b><Link to="/">Aadhithya Bharathi</Link> </b> </h2></div>
        <button className="hamburger" onClick={() => toggleMenu()}>☰</button>
            <div className="nav-links" id="navlinks">
            
            <Link to="/aboutme">About Me</Link>
            <Link to="/internships">Internships</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact Me</Link>
          </div>

    </div>
    <div className="timeline">
  <h2>Few of My Best Works</h2>
  
   
  <div className="time-left">
    <img src="p1.jpg" alt="Butterfly" />
    <p>📸 Nature Close-up: Capturing the delicate beauty of a butterfly at the park</p>
  </div>


  <div className="time-right">
    <p>📸 Street Portrait: A joyful moment of a little girl</p>
    <img src="p2.jpg" alt="Street Portrait" />
  </div>


  <div className="time-left">
    <img src="p3.jpg" alt="Cityscape" />
    <p>📸 Photography: Vibrant city nightscape</p>
  </div>


  <div className="time-right">
    <p>📸 Street Photography: A dad and his daughter</p>
    <img src="p4.jpg" alt="fam" />
    
  </div>


<div className="time5" style={{ textAlign: 'center' }}>
  <p style={{ marginBottom: '15px' }}><b>Links to see my stories published in Ananda Vikatan app</b></p>
  <img 
    src="photo1.jpg" 
    alt="Aadhithya with a camera" 
    style={{ 
      width: '200px', 
      height: 'auto', 
      borderRadius: '12px', 
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)', 
      marginBottom: '15px' 
    }}
  />

  <br/>
  <button className="button" onClick={() =>window.open('https://www.vikatan.com/author/aadhithya-bharathi-a')}>Click here</button>
  <br/><br/>
</div>

</div>

        </div>
    );
    }
export default Photography;