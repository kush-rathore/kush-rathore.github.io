import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';  // This should now work
import Footer from './components/Footer';

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
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;


