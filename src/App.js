import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './components/Body';
import Home from './components/Home';
import Projects from './components/Projects';
import {ContactUs} from './components/Contact';
import TextShpere from './components/TextShpere';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={ <TextShpere />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
