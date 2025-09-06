import React from 'react';
import siteConfig from '../config/siteConfig';

const LearningProgress: React.FC = () => {
  const { currentStreak, totalProblems, currentFocus, weeklyGoal } = siteConfig.learningProgress;

  return (
    <section id="progress" className="section-padding bg-omniBlack-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-16 right-16 w-32 h-32 bg-omniGreen-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 left-16 w-40 h-40 bg-omniGreen-500/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-audiowide font-bold text-omniGreen-400 mb-4 text-glow">
            LEARNING PROGRESS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-omniGreen-500 to-omniGreen-300 mx-auto rounded-full"></div>
          <p className="text-omniSilver-300 font-orbitron mt-6 max-w-2xl mx-auto">
            Real-time tracking of my coding journey and skill development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Coding Streak */}
          <div className="card-hologram group hover:border-omniGreen-500/40 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-omniGreen-500/20 rounded-full flex items-center justify-center border-2 border-omniGreen-500/40">
                <svg className="w-8 h-8 text-omniGreen-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-3xl font-audiowide font-bold text-omniGreen-400 mb-2">{currentStreak}</div>
              <div className="text-omniSilver-300 font-orbitron text-sm">Day Streak</div>
            </div>
          </div>

          {/* Problems Solved */}
          <div className="card-hologram group hover:border-omniGreen-500/40 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-omniGreen-500/20 rounded-full flex items-center justify-center border-2 border-omniGreen-500/40">
                <svg className="w-8 h-8 text-omniGreen-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-audiowide font-bold text-omniGreen-400 mb-2">{totalProblems}</div>
              <div className="text-omniSilver-300 font-orbitron text-sm">Problems Solved</div>
            </div>
          </div>

          {/* Hours This Week */}
          <div className="card-hologram group hover:border-omniGreen-500/40 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-omniGreen-500/20 rounded-full flex items-center justify-center border-2 border-omniGreen-500/40">
                <svg className="w-8 h-8 text-omniGreen-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-audiowide font-bold text-omniGreen-400 mb-2">28</div>
              <div className="text-omniSilver-300 font-orbitron text-sm">Hours This Week</div>
            </div>
          </div>

          {/* Current Level */}
          <div className="card-hologram group hover:border-omniGreen-500/40 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-omniGreen-500/20 rounded-full flex items-center justify-center border-2 border-omniGreen-500/40">
                <svg className="w-8 h-8 text-omniGreen-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-3xl font-audiowide font-bold text-omniGreen-400 mb-2">7</div>
              <div className="text-omniSilver-300 font-orbitron text-sm">Learning Level</div>
            </div>
          </div>
        </div>

        {/* Current Focus & Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card-hologram">
            <h3 className="text-xl font-audiowide font-bold text-omniGreen-400 mb-6 text-center">
              CURRENT FOCUS
            </h3>
            <div className="panel-tech text-center">
              <div className="text-2xl font-orbitron font-bold text-omniGreen-400 mb-2">{currentFocus}</div>
              <div className="text-omniSilver-300 font-orbitron text-sm mb-4">This Week's Topic</div>
              <div className="w-full bg-omniBlack-800 rounded-full h-3 mb-2">
                <div className="bg-gradient-to-r from-omniGreen-500 to-omniGreen-300 h-3 rounded-full" style={{width: '65%'}}></div>
              </div>
              <div className="text-omniSilver-400 font-orbitron text-xs">65% Complete</div>
            </div>
          </div>

          <div className="card-hologram">
            <h3 className="text-xl font-audiowide font-bold text-omniGreen-400 mb-6 text-center">
              WEEKLY GOAL
            </h3>
            <div className="panel-tech text-center">
              <div className="text-lg font-orbitron font-bold text-omniGreen-400 mb-2">{weeklyGoal}</div>
              <div className="text-omniSilver-300 font-orbitron text-sm mb-4">Progress: 9/15 Problems</div>
              <div className="w-full bg-omniBlack-800 rounded-full h-3 mb-2">
                <div className="bg-gradient-to-r from-omniGreen-500 to-omniGreen-300 h-3 rounded-full" style={{width: '60%'}}></div>
              </div>
              <div className="text-omniSilver-400 font-orbitron text-xs">60% Complete</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningProgress;
