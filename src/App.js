import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './homepage';
import Aboutme from './aboutme';
import Internships from './internships';
import Resume from './resume';
import Contact from './contact';
import Photography from './photography';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </Router>
  );
}

export default App;
