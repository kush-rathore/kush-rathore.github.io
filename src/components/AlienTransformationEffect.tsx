import React, { useEffect, useState } from 'react';

interface AlienTransformationEffectProps {
  isActive: boolean;
  children: React.ReactNode;
  effectType?: 'fade' | 'scale' | 'rotate' | 'all';
  duration?: number;
  delay?: number;
}

const AlienTransformationEffect: React.FC<AlienTransformationEffectProps> = ({
  isActive,
  children,
  effectType = 'all',
  duration = 800,
  delay = 0
}) => {
  const [isTransforming, setIsTransforming] = useState(false);
  const [transformPhase, setTransformPhase] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const startTimer = setTimeout(() => {
      setIsTransforming(true);
      setTransformPhase(1);
    }, delay);

    const phaseTimer = setTimeout(() => {
      setTransformPhase(2);
    }, delay + duration / 2);

    const completeTimer = setTimeout(() => {
      setIsTransforming(false);
      setTransformPhase(0);
    }, delay + duration);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(phaseTimer);
      clearTimeout(completeTimer);
    };
  }, [isActive, duration, delay]);

  const getTransformClasses = () => {
    if (!isTransforming) return '';

    const baseClasses = 'transition-all duration-300 ease-in-out';
    
    switch (effectType) {
      case 'fade':
        return `${baseClasses} ${transformPhase === 1 ? 'opacity-0' : 'opacity-100'}`;
      
      case 'scale':
        return `${baseClasses} ${transformPhase === 1 ? 'scale-0' : transformPhase === 2 ? 'scale-110' : 'scale-100'}`;
      
      case 'rotate':
        return `${baseClasses} ${transformPhase === 1 ? 'rotate-180 scale-75' : 'rotate-0 scale-100'}`;
      
      case 'all':
      default:
        return `${baseClasses} ${
          transformPhase === 1 
            ? 'opacity-0 scale-0 rotate-180' 
            : transformPhase === 2 
            ? 'opacity-100 scale-110 rotate-0' 
            : 'opacity-100 scale-100 rotate-0'
        }`;
    }
  };

  const getGlowEffect = () => {
    if (!isTransforming) return '';
    return 'drop-shadow-lg drop-shadow-omniGreen-500/50';
  };

  return (
    <div className="relative">
      {/* Transformation Energy Field */}
      {isTransforming && (
        <>
          {/* Energy Rings */}
          <div className="absolute inset-0 -m-4 pointer-events-none">
            <div className="absolute inset-0 rounded-full border-2 border-omniGreen-500/30 animate-ping"></div>
            <div className="absolute inset-2 rounded-full border border-omniGreen-400/50 animate-pulse"></div>
          </div>
          
          {/* Energy Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-omniGreen-500 rounded-full animate-bounce"
                style={{
                  top: `${20 + (i * 10)}%`,
                  left: `${10 + (i * 10)}%`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '0.6s'
                }}
              />
            ))}
          </div>
          
          {/* Central Flash */}
          {transformPhase === 2 && (
            <div className="absolute inset-0 bg-omniGreen-500/20 rounded-lg animate-pulse"></div>
          )}
        </>
      )}
      
      {/* Content with Transformation */}
      <div className={`${getTransformClasses()} ${getGlowEffect()}`}>
        {children}
      </div>
    </div>
  );
};

export default AlienTransformationEffect;
