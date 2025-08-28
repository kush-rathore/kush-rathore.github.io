import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ['Undergraduate Student', 'Frontend Developer', 'Coding Enthusiast'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const logoSrc = siteConfig.images.logo;

  return (
    <section id="home" className="min-h-[80vh] md:min-h-screen bg-omniBlack-950 flex items-start pt-6 md:pt-10 relative overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-omniGreen-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-omniGreen-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container-custom w-full py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Alien Profile Card */}
          <div className="text-left">
            {/* Omnitrix-inspired Profile Card */}
            <div className="card-hologram relative group">
              {/* Scanning Line Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-omniGreen-500/20 to-transparent animate-scan"></div>
              </div>
              
              {/* Omnitrix Logo with Profile Image */}
              <div className="mb-8 flex justify-center">
                <div className="relative animate-float-high">
                  {/* Outer Omnitrix Ring */}
                  <div className="absolute -inset-4 rounded-full border-4 border-omniGreen-500 animate-pulse-glow"></div>
                  <div className="absolute -inset-3 rounded-full border-2 border-omniSilver-400"></div>
                  
                  {/* Middle Ring */}
                  <div className="absolute -inset-2 rounded-full border-2 border-omniGreen-500/60"></div>
                  
                  {/* Inner Ring */}
                  <div className="absolute -inset-1 rounded-full border border-omniGreen-500/40"></div>
                  
                  {/* Profile Image Inside Omnitrix */}
                  <img
                    src={logoSrc}
                    alt={`${siteConfig.personal.name} - Omnitrix Profile`}
                    className="w-32 h-32 rounded-full object-cover border-2 border-omniGreen-500 relative z-10"
                  />
                  
                  {/* Energy Pulse */}
                  <div className="absolute inset-0 rounded-full bg-omniGreen-500/20 animate-ping"></div>
                  
                  {/* Omnitrix Center Glow */}
                  <div className="absolute inset-2 rounded-full bg-omniGreen-500/10 animate-pulse"></div>
                </div>
              </div>

              {/* Alien Profile Data */}
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-audiowide font-bold text-omniGreen-400 mb-3 animate-slide-in-left text-center">
                  <span className="text-omniGreen-500 text-glow">{siteConfig.personal.name.toUpperCase()}</span>
                </h1>
                
                <div className="panel-tech">
                  <p className="text-base md:text-lg text-omniSilver-300 font-orbitron leading-relaxed animate-slide-in-left text-center" style={{ animationDelay: '120ms' }}>
                    "{siteConfig.personal.quote}"
                  </p>
                </div>

                {/* Species Classification */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="panel-tech text-center">
                    <div className="text-omniGreen-400 font-orbitron font-bold text-sm mb-1">SPECIES</div>
                    <div className="text-omniSilver-200 font-orbitron">HUMAN</div>
                  </div>
                  <div className="panel-tech text-center">
                    <div className="text-omniGreen-400 font-orbitron font-bold text-sm mb-1">STATUS</div>
                    <div className="text-omniGreen-500 font-orbitron">ACTIVE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Holographic Display */}
          <div className="relative w-full h-64 md:h-[70vh] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-omniBlack-900/80 to-omniBlack-800/60 backdrop-blur-sm border border-omniGreen-500/30">
              {/* Holographic Grid */}
              <div className="absolute inset-0 bg-tech-grid opacity-20"></div>
              
              {/* Floating Data Panels */}
              <div className="absolute top-8 left-8 w-32 h-20 bg-omniGreen-500/10 rounded-lg border border-omniGreen-500/30 animate-float">
                <div className="p-3">
                  <div className="text-omniGreen-400 font-orbitron text-xs font-bold">STATUS</div>
                  <div className="text-omniSilver-200 font-orbitron text-sm">ONLINE</div>
                </div>
              </div>
              
              <div className="absolute top-8 right-8 w-32 h-20 bg-omniGreen-500/10 rounded-lg border border-omniGreen-500/30 animate-float" style={{animationDelay: '1s'}}>
                <div className="p-3">
                  <div className="text-omniGreen-400 font-orbitron text-xs font-bold">POWER</div>
                  <div className="text-omniGreen-500 font-orbitron text-sm">100%</div>
                </div>
              </div>
              
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-16 bg-omniGreen-500/10 rounded-lg border border-omniGreen-500/30 animate-float" style={{animationDelay: '2s'}}>
                <div className="p-3 text-center">
                  <div className="text-omniGreen-400 font-orbitron text-xs font-bold">SYSTEM</div>
                  <div className="text-omniSilver-200 font-orbitron text-sm">PORTFOLIO v2.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


