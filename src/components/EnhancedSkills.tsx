import React from 'react';
import { siteConfig, EnhancedSkillCategory, EnhancedSkill } from '../config/siteConfig';

const EnhancedSkills: React.FC = () => {
  const { enhancedSkills } = siteConfig;

  const getSkillColor = (level: number) => {
    if (level >= 80) return "from-green-500 to-green-300";
    if (level >= 60) return "from-yellow-500 to-yellow-300";
    if (level >= 40) return "from-orange-500 to-orange-300";
    return "from-red-500 to-red-300";
  };

  const getSkillText = (level: number) => {
    if (level >= 80) return "Advanced";
    if (level >= 60) return "Intermediate";
    if (level >= 40) return "Beginner+";
    return "Beginner";
  };

  return (
    <section id="enhanced-skills" className="section-padding bg-omniBlack-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-tech-grid opacity-5"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-omniGreen-500/5 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-audiowide font-bold text-omniGreen-400 mb-4 text-glow">
            ENHANCED SKILLS MATRIX
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-omniGreen-500 to-omniGreen-300 mx-auto rounded-full"></div>
          <p className="text-omniSilver-300 font-orbitron mt-6 max-w-2xl mx-auto">
            Detailed breakdown of technical skills with progress tracking and experience metrics
          </p>
        </div>

        {enhancedSkills.map((category: EnhancedSkillCategory, categoryIndex: number) => (
          <div key={categoryIndex} className="mb-12">
            <h3 className="text-2xl font-audiowide font-bold text-omniGreen-400 mb-8 text-center">
              {category.category.toUpperCase()}
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {category.skills.map((skill: EnhancedSkill, skillIndex: number) => (
                <div key={skillIndex} className="card-hologram group hover:border-omniGreen-500/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-orbitron font-bold text-omniGreen-400 text-lg">
                      {skill.name}
                    </h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-orbitron font-bold bg-gradient-to-r ${getSkillColor(skill.level)} text-black`}>
                      {getSkillText(skill.level)}
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-omniSilver-400 font-orbitron mb-2">
                      <span>Progress</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-omniBlack-800 rounded-full h-3 relative overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${getSkillColor(skill.level)} h-3 rounded-full transition-all duration-1000 ease-out relative`}
                        style={{width: `${skill.level}%`}}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Skill Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="panel-tech text-center py-2">
                      <div className="text-omniGreen-400 font-orbitron font-bold text-sm mb-1">EXPERIENCE</div>
                      <div className="text-omniSilver-200 font-orbitron text-xs">{skill.experience}</div>
                    </div>
                    <div className="panel-tech text-center py-2">
                      <div className="text-omniGreen-400 font-orbitron font-bold text-sm mb-1">PROJECTS</div>
                      <div className="text-omniSilver-200 font-orbitron text-xs">{skill.projects} completed</div>
                    </div>
                  </div>

                  {/* Skill Level Indicator */}
                  <div className="mt-4 flex justify-center">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < Math.floor(skill.level / 20) 
                              ? 'bg-omniGreen-400' 
                              : 'bg-omniBlack-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Overall Progress Summary */}
        <div className="card-hologram mt-16">
          <h3 className="text-2xl font-audiowide font-bold text-omniGreen-400 mb-8 text-center">
            LEARNING ANALYTICS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-omniGreen-500/20 rounded-full flex items-center justify-center border-2 border-omniGreen-500/40">
                <svg className="w-8 h-8 text-omniGreen-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="text-2xl font-audiowide font-bold text-omniGreen-400 mb-1">15</div>
              <div className="text-omniSilver-300 font-orbitron text-sm">Skills Tracked</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-omniGreen-500/20 rounded-full flex items-center justify-center border-2 border-omniGreen-500/40">
                <svg className="w-8 h-8 text-omniGreen-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-2xl font-audiowide font-bold text-omniGreen-400 mb-1">63%</div>
              <div className="text-omniSilver-300 font-orbitron text-sm">Average Progress</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-omniGreen-500/20 rounded-full flex items-center justify-center border-2 border-omniGreen-500/40">
                <svg className="w-8 h-8 text-omniGreen-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-2xl font-audiowide font-bold text-omniGreen-400 mb-1">8</div>
              <div className="text-omniSilver-300 font-orbitron text-sm">Months Learning</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-omniGreen-500/20 rounded-full flex items-center justify-center border-2 border-omniGreen-500/40">
                <svg className="w-8 h-8 text-omniGreen-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="text-2xl font-audiowide font-bold text-omniGreen-400 mb-1">78</div>
              <div className="text-omniSilver-300 font-orbitron text-sm">Total Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedSkills;
