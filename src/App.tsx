import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import EnhancedSkills from './components/EnhancedSkills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Resume from './components/Resume';
import LearningProgress from './components/LearningProgress';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import LearningResources from './components/LearningResources';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-omniBlack-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            {/* Omnitrix Loading Animation */}
            <div className="absolute inset-0 rounded-full border-4 border-omniGreen-500 animate-pulse-glow"></div>
            <div className="absolute inset-2 rounded-full bg-omniGreen-500 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-omniBlack-950"></div>
            <div className="absolute inset-6 rounded-full bg-omniGreen-500 animate-ping"></div>
          </div>
          <h2 className="text-2xl font-orbitron font-bold text-omniGreen-500 mb-2">INITIALIZING</h2>
          <p className="text-omniSilver-400 font-orbitron">Loading Portfolio Matrix...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-omniBlack-950 min-h-screen">
      <div className="fixed inset-0 bg-tech-grid opacity-20 pointer-events-none"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <LearningProgress />
        <Achievements />
        <Skills />
        <EnhancedSkills />
        <Experience />
        <Education />
        <Projects />
        <CompetitiveProgramming />
        <Blog />
        <LearningResources />
        <Testimonials />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
