import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-omniBlack-900 border-t border-omniGreen-500/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-omniGreen-500 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Control */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div className="w-10 h-10 relative mr-3">
                  {/* Omnitrix-inspired logo */}
                  <div className="absolute inset-0 rounded-full border-2 border-omniGreen-500 animate-pulse-glow"></div>
                  <div className="absolute inset-1 rounded-full bg-omniGreen-500"></div>
                  <div className="absolute inset-2 rounded-full bg-omniBlack-950"></div>
                  <div className="absolute inset-3 rounded-full bg-omniGreen-500 animate-ping"></div>
                </div>
                <h3 className="text-xl font-audiowide font-bold text-omniGreen-400 text-glow">
                  MISSION CONTROL
                </h3>
              </div>
              <p className="text-omniSilver-300 font-orbitron text-sm leading-relaxed">
                Ready to transform ideas into powerful digital solutions. 
                Let's collaborate on your next mission.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-orbitron font-bold text-omniGreen-400 mb-4">
                NAVIGATION MATRIX
              </h4>
              <div className="space-y-2">
                <a href="#home" className="block text-omniSilver-300 hover:text-omniGreen-400 font-orbitron text-sm transition-colors duration-200">
                  HOME BASE
                </a>
                <a href="#about" className="block text-omniSilver-300 hover:text-omniGreen-400 font-orbitron text-sm transition-colors duration-200">
                  KUSH PROFILE
                </a>
                <a href="#skills" className="block text-omniSilver-300 hover:text-omniGreen-400 font-orbitron text-sm transition-colors duration-200">
                  POWER MATRIX
                </a>
                <a href="#projects" className="block text-omniSilver-300 hover:text-omniGreen-400 font-orbitron text-sm transition-colors duration-200">
                  TRANSFORMATION GALLERY
                </a>
                <a href="#contact" className="block text-omniSilver-300 hover:text-omniGreen-400 font-orbitron text-sm transition-colors duration-200">
                  COMMUNICATION HUB
                </a>
              </div>
            </div>

            {/* Social Networks */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-orbitron font-bold text-omniGreen-400 mb-4">
                SOCIAL NETWORKS
              </h4>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="#" className="w-10 h-10 bg-omniBlack-800 border border-omniGreen-500/30 rounded-full flex items-center justify-center text-omniGreen-400 hover:bg-omniGreen-500 hover:text-omniBlack-950 transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-omniBlack-800 border border-omniGreen-500/30 rounded-full flex items-center justify-center text-omniGreen-400 hover:bg-omniGreen-500 hover:text-omniBlack-950 transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-omniBlack-800 border border-omniGreen-500/30 rounded-full flex items-center justify-center text-omniGreen-400 hover:bg-omniGreen-500 hover:text-omniBlack-950 transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-omniBlack-800 border border-omniGreen-500/30 rounded-full flex items-center justify-center text-omniGreen-400 hover:bg-omniGreen-500 hover:text-omniBlack-950 transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Mission Status */}
          <div className="mt-8 pt-8 border-t border-omniGreen-500/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-omniSilver-400 font-orbitron text-sm">
                  <span className="text-omniGreen-400 font-bold">MISSION STATUS:</span> 
                  <span className="ml-2 text-omniGreen-500">ACTIVE</span>
                </p>
                <p className="text-omniSilver-400 font-orbitron text-sm mt-1">
                  <span className="text-omniGreen-400 font-bold">AGENT:</span> 
                  <span className="ml-2">KUSH RATHORE</span>
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-omniSilver-400 font-orbitron text-sm">
                  <span className="text-omniGreen-400 font-bold">SYSTEM VERSION:</span> 
                  <span className="ml-2">PORTFOLIO v2.0</span>
                </p>
                <p className="text-omniSilver-400 font-orbitron text-sm mt-1">
                  <span className="text-omniGreen-400 font-bold">DEPLOYMENT YEAR:</span> 
                  <span className="ml-2">{currentYear}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 text-center">
            <p className="text-omniSilver-500 font-orbitron text-xs">
              © {currentYear} <span className="text-omniGreen-400 font-bold">KUSH RATHORE</span>. 
              All rights reserved. Mission accomplished with React & Tailwind CSS.
              WebsiteTheme- Ben 10
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


