import React, { useEffect, useState } from 'react';

interface OmnitrixTransitionProps {
  isVisible: boolean;
  onComplete?: () => void;
  duration?: number;
  type?: 'loading' | 'transformation' | 'page-transition';
}

const OmnitrixTransition: React.FC<OmnitrixTransitionProps> = ({
  isVisible,
  onComplete,
  duration = 2000,
  type = 'loading'
}) => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const phases = [
      { delay: 0, phase: 1 },      // Initial glow
      { delay: 500, phase: 2 },    // Ring rotation
      { delay: 1000, phase: 3 },   // Core pulse
      { delay: 1500, phase: 4 },   // Transformation flash
      { delay: duration, phase: 5 } // Complete
    ];

    const timers = phases.map(({ delay, phase }) =>
      setTimeout(() => setAnimationPhase(phase), delay)
    );

    const completeTimer = setTimeout(() => {
      onComplete?.();
      setAnimationPhase(0);
    }, duration + 200);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(completeTimer);
    };
  }, [isVisible, duration, onComplete]);

  if (!isVisible) return null;

  const getTransformationText = () => {
    switch (type) {
      case 'transformation':
        return 'ALIEN TRANSFORMATION';
      case 'page-transition':
        return 'ACCESSING DATA';
      default:
        return 'OMNITRIX LOADING';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-omniBlack-950/95 backdrop-blur-sm">
      {/* Background Energy Field */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-omniGreen-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-omniGreen-500/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Main Omnitrix */}
      <div className="relative z-10">
        {/* Outer Ring */}
        <div className={`w-32 h-32 rounded-full border-4 border-omniGreen-500/50 relative ${
          animationPhase >= 2 ? 'animate-spin' : ''
        }`} style={{ animationDuration: '2s' }}>
          
          {/* Ring Segments */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-6 bg-omniGreen-500 rounded-full ${
                animationPhase >= 1 ? 'animate-pulse' : 'opacity-30'
              }`}
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: '1px 64px',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
          
          {/* Middle Ring */}
          <div className={`absolute inset-4 rounded-full border-2 border-omniGreen-400/70 ${
            animationPhase >= 2 ? 'animate-spin' : ''
          }`} style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}>
            
            {/* Inner Core */}
            <div className={`absolute inset-4 rounded-full bg-omniGreen-500 ${
              animationPhase >= 3 ? 'animate-pulse-glow' : 'animate-pulse'
            }`}>
              
              {/* Central Symbol */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-8 h-8 ${
                  animationPhase >= 4 ? 'animate-ping' : ''
                }`}>
                  {/* Ben 10 Symbol */}
                  <svg viewBox="0 0 100 100" className="w-full h-full text-omniBlack-950">
                    <circle cx="50" cy="50" r="40" fill="currentColor" />
                    <circle cx="50" cy="50" r="25" fill="none" stroke="#10B981" strokeWidth="3" />
                    <rect x="45" y="20" width="10" height="60" fill="#10B981" />
                    <rect x="20" y="45" width="60" height="10" fill="#10B981" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Energy Bolts */}
        {animationPhase >= 3 && (
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-16 bg-gradient-to-t from-omniGreen-500 to-transparent animate-pulse"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '2px 0px',
                  transform: `translate(-50%, -100%) rotate(${i * 60}deg)`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        )}

        {/* Transformation Flash */}
        {animationPhase >= 4 && (
          <div className="absolute inset-0 bg-omniGreen-500/30 rounded-full animate-ping"></div>
        )}
      </div>

      {/* Status Text */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="text-2xl font-audiowide font-bold text-omniGreen-400 mb-2 animate-pulse">
          {getTransformationText()}
        </h2>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-omniGreen-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-omniGreen-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-omniGreen-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4 w-64 h-1 bg-omniBlack-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-omniGreen-500 to-omniGreen-300 transition-all duration-200 ease-out"
            style={{ 
              width: `${(animationPhase / 5) * 100}%`,
              boxShadow: '0 0 10px rgba(16, 185, 129, 0.8)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OmnitrixTransition;
