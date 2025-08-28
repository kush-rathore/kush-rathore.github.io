import React from 'react';

const Skills: React.FC = () => {
  const tools = [
    'VS Code', 'Python', 'GitHub', 'C++' , 'DSA in C++', 'Cursor AI','Copilot'
  ];

  const softSkills = [
    'Leadership', 'Team Collaboration', 'Learning Agility', 'Communication', 'Time Management', 'Creativity'
  ];

  const certifications = [
    'Typing'];

  const languages = [
    { name: 'English', level: 'Native' },
    { name: 'Hindi', level: 'Native' }
  ];

  return (
    <section id="skills" className="section-padding bg-omniBlack-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-tech-grid opacity-5"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-omniGreen-500/5 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-audiowide font-bold text-omniGreen-400 mb-4 text-glow">
            SKILLS MATRIX
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-omniGreen-500 to-omniGreen-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tools & Equipment */}
          <div className="card-hologram group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-omniGreen-500/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-omniGreen-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-omniGreen-400">EQUIPMENT ARSENAL</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool, index) => (
                <div key={index} className="panel-tech text-center group-hover:border-omniGreen-500/40 transition-all duration-300">
                  <span className="text-omniSilver-200 font-orbitron text-sm">{tool}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills Matrix */}
          <div className="card-hologram group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-omniGreen-500/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-omniGreen-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-omniGreen-400">MENTAL CAPABILITIES</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {softSkills.map((skill, index) => (
                <div key={index} className="panel-tech text-center group-hover:border-omniGreen-500/40 transition-all duration-300">
                  <span className="text-omniSilver-200 font-orbitron text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Languages */}
          <div className="card-hologram group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-omniGreen-500/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-omniGreen-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-omniGreen-400">ACHIEVEMENTS & LANGUAGES</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-omniGreen-400 font-orbitron font-bold mb-3">CERTIFICATIONS</h4>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <div key={index} className="panel-tech text-center group-hover:border-omniGreen-500/40 transition-all duration-300">
                      <span className="text-omniSilver-200 font-orbitron text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-omniGreen-400 font-orbitron font-bold mb-3">COMMUNICATION PROTOCOLS</h4>
                <div className="space-y-2">
                  {languages.map((lang, index) => (
                    <div key={index} className="panel-tech group-hover:border-omniGreen-500/40 transition-all duration-300">
                      <div className="flex justify-between items-center">
                        <span className="text-omniSilver-200 font-orbitron text-sm">{lang.name}</span>
                        <span className="text-omniGreen-400 font-orbitron text-sm font-bold">{lang.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


