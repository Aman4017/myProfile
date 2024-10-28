import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Content/Home';
import Experience from './Components/Content/Experience';
import TechStack from './Components/Content/TechStack';
import Projects from './Components/Content/Projects';
import Contact from './Components/Content/Contact';
import { BallTriangle } from 'react-loader-spinner';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Resume from './Components/Content/Resume';

function App() {
  const [loading, setLoading] = useState(false);

  // for loading screen
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Router>
      {loading ? (
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#d946ef"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/techstack" element={<TechStack />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Analytics />
          <SpeedInsights />
        </>
      )}
    </Router>
  );
}

export default App;
