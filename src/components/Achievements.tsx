import React from 'react';
import siteConfig from '../config/siteConfig';

const Achievements: React.FC = () => {
  const { achievements } = siteConfig;

  return (
    <section id="achievements" className="section-padding bg-omniBlack-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 left-20 w-36 h-36 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-omniGreen-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-audiowide font-bold text-omniGreen-400 mb-4 text-glow">
            ACHIEVEMENT VAULT
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-omniGreen-500 to-omniGreen-300 mx-auto rounded-full"></div>
          <p className="text-omniSilver-300 font-orbitron mt-6 max-w-2xl mx-auto">
            Milestones and accomplishments in my learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="card-hologram group hover:border-omniGreen-500/40 transition-all duration-300 relative">
              {/* Achievement Badge */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-omniGreen-500/30 to-omniGreen-400/20 rounded-full border-2 border-omniGreen-500/50 flex items-center justify-center">
                <div className="text-2xl">{achievement.icon}</div>
              </div>

              <div className="text-center">
                {/* Achievement Icon */}
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>

                {/* Achievement Details */}
                <h3 className="text-xl font-audiowide font-bold text-omniGreen-400 mb-2">
                  {achievement.title}
                </h3>
                
                <p className="text-omniSilver-300 font-orbitron text-sm mb-3 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Date Badge */}
                <div className="inline-block px-3 py-1 bg-omniGreen-500/20 border border-omniGreen-500/30 rounded-full">
                  <span className="text-omniGreen-400 font-orbitron text-xs font-bold">{achievement.date}</span>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-omniGreen-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 text-center">
          <div className="card-hologram inline-block">
            <h3 className="text-xl font-audiowide font-bold text-omniGreen-400 mb-4">
              ACHIEVEMENT SUMMARY
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-audiowide font-bold text-omniGreen-400 mb-1">6</div>
                <div className="text-omniSilver-300 font-orbitron text-sm">Total Badges</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-audiowide font-bold text-omniGreen-400 mb-1">99%</div>
                <div className="text-omniSilver-300 font-orbitron text-sm">Best Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-audiowide font-bold text-omniGreen-400 mb-1">2024</div>
                <div className="text-omniSilver-300 font-orbitron text-sm">Active Year</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
