import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Terminal from './components/Terminal';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Background from './components/Background';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <Router>
      <Suspense fallback={null}>
        <LoadingScreen />
        <Background />
        <Routes>
          <Route path="/" element={<Terminal />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;