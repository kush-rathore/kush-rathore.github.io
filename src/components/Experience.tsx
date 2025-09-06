import React from 'react';
import { siteConfig } from '../config/siteConfig';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-omniBlack-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-omniGreen-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-omniGreen-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-audiowide font-bold text-omniGreen-400 mb-4 text-glow">
            LEARNING JOURNEY
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-omniGreen-500 to-omniGreen-300 mx-auto rounded-full"></div>
          <p className="text-omniSilver-300 font-orbitron mt-6 max-w-2xl mx-auto">
            My path of learning programming and building technical skills
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-omniGreen-500 to-omniGreen-300"></div>
            
            <div className="space-y-12">
              {siteConfig.experience.map((exp: ExperienceItem, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Omnitrix Timeline Dot */}
                  <div className="absolute left-4 w-8 h-8 bg-omniGreen-500 rounded-full border-4 border-omniBlack-900 shadow-lg shadow-omniGreen-500/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-omniBlack-950 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="ml-20 card-hologram group hover:border-omniGreen-500/40 transition-all duration-300 relative">
                    {/* Alien Species Badge */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-omniGreen-500/20 rounded-full border-2 border-omniGreen-500/40 flex items-center justify-center">
                      <svg className="w-6 h-6 text-omniGreen-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8zM12 12h.01" />
                      </svg>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-orbitron font-bold text-omniGreen-400 mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-orbitron font-medium text-omniSilver-200">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <div className="inline-block px-4 py-2 bg-omniGreen-500/20 border border-omniGreen-500/30 rounded-lg text-omniGreen-400 font-orbitron text-sm font-medium relative">
                          <div className="absolute -left-1 -top-1 w-2 h-2 bg-omniGreen-500 rounded-full animate-ping"></div>
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-omniSilver-300 font-orbitron leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
