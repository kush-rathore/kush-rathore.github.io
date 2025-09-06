import React from 'react';
import { siteConfig } from '../config/siteConfig';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding bg-omniBlack-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-32 right-20 w-28 h-28 bg-omniGreen-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-36 h-36 bg-omniGreen-500/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-audiowide font-bold text-omniGreen-400 mb-4 text-glow">
            EDUCATION & LEARNING
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-omniGreen-500 to-omniGreen-300 mx-auto rounded-full"></div>
          <p className="text-omniSilver-300 font-orbitron mt-6 max-w-2xl mx-auto">
            Academic background and continuous learning journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {siteConfig.education.map((edu: EducationItem, index) => (
              <div key={index} className="card-hologram group hover:border-omniGreen-500/40 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  {/* Education Badge */}
                  <div className="flex-shrink-0 w-16 h-16 bg-omniGreen-500/20 rounded-full flex items-center justify-center group-hover:bg-omniGreen-500/30 transition-colors relative border-2 border-omniGreen-500/40">
                    <div className="absolute inset-2 rounded-full border border-omniGreen-500/60"></div>
                    <svg className="w-8 h-8 text-omniGreen-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-omniGreen-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-orbitron font-bold text-omniGreen-400 mb-1">
                          {edu.degree}
                        </h3>
                        <h4 className="text-lg font-orbitron font-medium text-omniSilver-200">
                          {edu.institution}
                        </h4>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <div className="inline-block px-4 py-2 bg-omniGreen-500/20 border border-omniGreen-500/30 rounded-lg text-omniGreen-400 font-orbitron text-sm font-medium relative">
                          <div className="absolute inset-0 bg-tech-grid opacity-30 rounded-lg"></div>
                          <span className="relative">{edu.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-omniSilver-300 font-orbitron leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
