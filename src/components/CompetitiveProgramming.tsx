import React from 'react';
import siteConfig from '../config/siteConfig';

const CompetitiveProgramming: React.FC = () => {
  const { platforms, recentSolves } = siteConfig.competitiveProgramming;

  return (
    <section id="competitive" className="section-padding bg-omniBlack-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 left-20 w-36 h-36 bg-omniGreen-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-audiowide font-bold text-omniGreen-400 mb-4 text-glow">
            CODING ARENA
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-omniGreen-500 to-omniGreen-300 mx-auto rounded-full"></div>
          <p className="text-omniSilver-300 font-orbitron mt-6 max-w-2xl mx-auto">
            Competitive programming journey and problem-solving achievements
          </p>
        </div>

        {/* Platform Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {platforms.map((platform, index) => (
            <div key={index} className="card-hologram group hover:border-omniGreen-500/40 transition-all duration-300">
              <div className="text-center">
                {/* Platform Badge */}
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${platform.color} rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {platform.badge}
                </div>

                <h3 className="text-lg font-audiowide font-bold text-omniGreen-400 mb-2">
                  {platform.name}
                </h3>

                <div className="space-y-2 text-sm">
                  <div className="text-omniSilver-300 font-orbitron">
                    <span className="text-omniGreen-400 font-bold">{platform.problems}</span> Problems
                  </div>
                  <div className="text-omniSilver-300 font-orbitron">
                    Rank: <span className="text-omniGreen-400 font-bold">{platform.rank}</span>
                  </div>
                  <div className="text-omniSilver-400 font-orbitron text-xs">
                    @{platform.username}
                  </div>
                </div>

                {/* View Profile Button */}
                <button className="mt-4 w-full py-2 bg-omniGreen-500/10 border border-omniGreen-500/30 rounded-lg text-omniGreen-400 font-orbitron text-xs font-medium hover:bg-omniGreen-500/20 transition-all duration-300">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Solves */}
        <div className="card-hologram">
          <h3 className="text-xl font-audiowide font-bold text-omniGreen-400 mb-6 text-center">
            RECENT VICTORIES
          </h3>
          
          <div className="space-y-4">
            {recentSolves.map((solve, index) => (
              <div key={index} className="panel-tech flex items-center justify-between p-4 hover:bg-omniGreen-500/5 transition-colors duration-300">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-orbitron font-bold text-omniGreen-400">{solve.problem}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-orbitron ${
                      solve.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                      solve.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {solve.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-omniSilver-400 font-orbitron">
                    <span>{solve.platform}</span>
                    <span>{solve.language}</span>
                    <span>{solve.date}</span>
                  </div>
                </div>
                <div className="text-omniGreen-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Goals Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-hologram text-center">
            <h4 className="font-audiowide font-bold text-omniGreen-400 mb-3">SHORT TERM</h4>
            <p className="text-omniSilver-300 font-orbitron text-sm">Solve 100 LeetCode problems</p>
            <div className="mt-3 text-2xl font-audiowide text-omniGreen-400">45/100</div>
          </div>
          <div className="card-hologram text-center">
            <h4 className="font-audiowide font-bold text-omniGreen-400 mb-3">MEDIUM TERM</h4>
            <p className="text-omniSilver-300 font-orbitron text-sm">Reach 2-star on CodeChef</p>
            <div className="mt-3 text-2xl">⭐➡️⭐⭐</div>
          </div>
          <div className="card-hologram text-center">
            <h4 className="font-audiowide font-bold text-omniGreen-400 mb-3">LONG TERM</h4>
            <p className="text-omniSilver-300 font-orbitron text-sm">Participate in ICPC</p>
            <div className="mt-3 text-2xl">🎯</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
