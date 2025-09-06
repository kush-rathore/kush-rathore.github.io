import React from 'react';

interface PullToRefreshIndicatorProps {
  isVisible: boolean;
  isRefreshing: boolean;
  pullDistance: number;
  threshold: number;
}

const PullToRefreshIndicator: React.FC<PullToRefreshIndicatorProps> = ({
  isVisible,
  isRefreshing,
  pullDistance,
  threshold
}) => {
  const progress = Math.min(pullDistance / threshold, 1);
  const rotation = progress * 360;

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300">
      <div 
        className="bg-omniBlack-900/90 backdrop-blur-sm rounded-full p-4 border border-omniGreen-500/30"
        style={{ 
          transform: `translateY(${Math.max(pullDistance - 60, -60)}px)`,
          opacity: Math.min(progress * 2, 1)
        }}
      >
        {isRefreshing ? (
          <div className="w-8 h-8 relative">
            {/* Omnitrix refresh animation */}
            <div className="absolute inset-0 rounded-full border-2 border-omniGreen-500 animate-spin border-t-transparent"></div>
            <div className="absolute inset-1 rounded-full bg-omniGreen-500/20"></div>
            <div className="absolute inset-2 rounded-full bg-omniGreen-500 animate-pulse"></div>
          </div>
        ) : (
          <div className="w-8 h-8 relative">
            {/* Pull indicator */}
            <div 
              className="absolute inset-0 rounded-full border-2 border-omniGreen-500/50"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div className="absolute top-0 left-1/2 w-1 h-3 bg-omniGreen-500 transform -translate-x-1/2 -translate-y-1"></div>
            </div>
            <div className="absolute inset-2 rounded-full bg-omniGreen-500/30"></div>
          </div>
        )}
      </div>
      
      <div className="text-center mt-2">
        <p className="text-xs font-orbitron text-omniGreen-500">
          {isRefreshing ? 'REFRESHING...' : progress >= 1 ? 'RELEASE TO REFRESH' : 'PULL TO REFRESH'}
        </p>
      </div>
    </div>
  );
};

export default PullToRefreshIndicator;
