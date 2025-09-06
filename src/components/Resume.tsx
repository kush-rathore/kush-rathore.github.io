import React from 'react';
import { siteConfig } from '../config/siteConfig';

const Resume: React.FC = () => {
  const handleDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/documents/Kush_Rathore_Resume.pdf';
    link.download = 'Kush_Rathore_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="section-padding bg-omniBlack-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-25">
        <div className="absolute top-24 left-16 w-24 h-24 bg-omniGreen-500/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-24 right-16 w-32 h-32 bg-omniGreen-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-audiowide font-bold text-omniGreen-400 mb-4 text-glow">
            RESUME / CV
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-omniGreen-500 to-omniGreen-300 mx-auto rounded-full"></div>
          <p className="text-omniSilver-300 font-orbitron mt-6 max-w-2xl mx-auto">
            Download my complete professional resume for detailed information
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="card-hologram text-center group hover:border-omniGreen-500/40 transition-all duration-300">
            {/* Resume Icon */}
            <div className="w-24 h-24 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-omniGreen-500/20 rounded-lg rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-omniGreen-500/30 rounded-lg -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-omniBlack-800 border-2 border-omniGreen-500/40 rounded-lg p-4 group-hover:border-omniGreen-500/60 transition-colors">
                <svg className="w-16 h-16 text-omniGreen-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-omniGreen-400 mb-4">
              Student CV
            </h3>
            
            <p className="text-omniSilver-300 font-orbitron mb-8 leading-relaxed">
              Download my academic CV showcasing educational achievements, programming skills, and learning projects.
            </p>

            {/* Download Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="panel-tech text-center">
                <div className="text-2xl font-orbitron font-bold text-omniGreen-400 mb-1">PDF</div>
                <div className="text-omniSilver-400 font-orbitron text-sm">Format</div>
              </div>
              <div className="panel-tech text-center">
                <div className="text-2xl font-orbitron font-bold text-omniGreen-400 mb-1">2024</div>
                <div className="text-omniSilver-400 font-orbitron text-sm">Updated</div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleDownload}
                className="btn-omnitrix group/btn relative overflow-hidden"
              >
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-5 h-5 group-hover/btn:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="font-orbitron font-bold">DOWNLOAD CV</span>
                </div>
              </button>
              
              <a href="#education" className="btn-secondary group/btn relative overflow-hidden">
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                  <span className="font-orbitron font-bold">VIEW EDUCATION</span>
                </div>
              </a>
              
              <a href="#testimonials" className="btn-secondary group/btn relative overflow-hidden">
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="font-orbitron font-bold">TESTIMONIALS</span>
                </div>
              </a>
            </div>

            <p className="text-omniSilver-500 font-orbitron text-xs mt-4">
              Last updated: August 2024 • PDF Format • Student CV
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
