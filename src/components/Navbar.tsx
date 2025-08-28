import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-omniBlack-950/95 backdrop-blur-md border-b border-omniGreen-500/30' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
              {/* Omnitrix-inspired logo */}
              <div className="absolute inset-0 rounded-full border-2 border-omniGreen-500 animate-pulse-glow"></div>
              <div className="absolute inset-1 rounded-full bg-omniGreen-500"></div>
              <div className="absolute inset-2 rounded-full bg-omniBlack-950"></div>
              <div className="absolute inset-3 rounded-full bg-omniGreen-500 animate-ping"></div>
            </div>
            <span className="text-xl md:text-2xl font-orbitron font-bold text-omniGreen-500 text-glow flex items-center">


              PORTFOLIO
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-omniSilver-300 hover:text-omniGreen-400 font-orbitron font-medium transition-all duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-omniGreen-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-omniGreen-500/30 hover:border-omniGreen-500/60 transition-colors"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span className={`w-5 h-0.5 bg-omniGreen-500 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`w-5 h-0.5 bg-omniGreen-500 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`w-5 h-0.5 bg-omniGreen-500 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-omniGreen-500/20">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-omniSilver-300 hover:text-omniGreen-400 hover:bg-omniBlack-800/50 rounded-lg font-orbitron font-medium transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


