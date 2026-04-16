import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Photography from './components/Photography';
import Research from './components/Research';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* Ambient floating particles */
function Particles() {
  const count = 25;
  const particles = Array.from({ length: count }, (_, i) => {
    const size = Math.random() * 4 + 1;
    const left = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = Math.random() * 10 + 15;
    const opacity = Math.random() * 0.3 + 0.1;
    return (
      <div
        key={i}
        className="particle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          bottom: `-${size}px`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          opacity: opacity,
        }}
      />
    );
  });
  return <div className="particles-container">{particles}</div>;
}

function App() {
  // We completely removed the IntersectionObserver since we are now relying entirely on framer-motion's `whileInView` for scroll animations across all components, which is hardware accelerated and smoother.

  return (
    <>
      <Particles />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Photography />
      <Research />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
