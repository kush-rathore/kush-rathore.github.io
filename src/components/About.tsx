import React from 'react';
import { siteConfig } from '../config/siteConfig';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-omniBlack-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cosmic opacity-30"></div>
      <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-audiowide font-bold text-omniGreen-400 mb-4 text-glow">
            PROFILE DATABASE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-omniGreen-500 to-omniGreen-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Personal Information Panel */}
          <div className="card-hologram">
            <div className="panel-tech">
              <h3 className="text-2xl font-audiowide font-bold text-omniGreen-400 mb-6 text-glow">
                IDENTITY MATRIX
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-omniGreen-500/20 pb-2">
                  <span className="text-omniSilver-300 font-orbitron">NAME:</span>
                  <span className="text-omniGreen-400 font-orbitron font-bold">{siteConfig.personal.name}</span>
                </div>
                <div className="flex justify-between items-center border-b border-omniGreen-500/20 pb-2">
                  <span className="text-omniSilver-300 font-orbitron">AGE:</span>
                  <span className="text-omniGreen-400 font-orbitron font-bold">{siteConfig.personal.age}</span>
                </div>
                <div className="flex justify-between items-center border-b border-omniGreen-500/20 pb-2">
                  <span className="text-omniSilver-300 font-orbitron">LOCATION:</span>
                  <span className="text-omniGreen-400 font-orbitron font-bold">{siteConfig.personal.location}</span>
                </div>
                <div className="flex justify-between items-center border-b border-omniGreen-500/20 pb-2">
                  <span className="text-omniSilver-300 font-orbitron">EMAIL:</span>
                  <span className="text-omniGreen-400 font-orbitron font-bold">{siteConfig.personal.email}</span>
                </div>
                <div className="flex justify-between items-center border-b border-omniGreen-500/20 pb-2">
                  <span className="text-omniSilver-300 font-orbitron">STATUS:</span>
                  <span className="text-omniGreen-500 font-orbitron font-bold">{siteConfig.personal.status}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interests Panel */}
          <div className="card-hologram">
            <div className="panel-tech">
              <h3 className="text-2xl font-audiowide font-bold text-omniGreen-400 mb-6 text-glow">
                INTEREST PROTOCOLS
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {siteConfig.interests.map((interest, index) => (
                  <div key={index} className="bg-omniBlack-800/50 border border-omniGreen-500/30 rounded-lg p-3 text-center hover:border-omniGreen-500/60 transition-colors duration-300">
                    <span className="text-omniSilver-200 font-orbitron text-sm">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


