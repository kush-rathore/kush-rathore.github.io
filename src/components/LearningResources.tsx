import React from 'react';
import siteConfig, { LearningResource } from '../config/siteConfig';

const LearningResources: React.FC = () => {
  const resources = siteConfig.learningResources;

  return (
    <section id="resources" className="section-padding bg-omniBlack-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-16 right-16 w-32 h-32 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 left-16 w-40 h-40 bg-omniGreen-500/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-audiowide font-bold text-omniGreen-400 mb-4 text-glow">
            LEARNING ARSENAL
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-omniGreen-500 to-omniGreen-300 mx-auto rounded-full"></div>
          <p className="text-omniSilver-300 font-orbitron mt-6 max-w-2xl mx-auto">
            Tools, courses, and resources powering my learning journey
          </p>
        </div>

        {/* Online Courses & Tutorials */}
        <div className="mb-12">
          <h3 className="text-2xl font-audiowide font-bold text-omniGreen-400 mb-6 text-center">
            COURSES & TUTORIALS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.tutorials.map((tutorial, index) => (
              <div key={index} className="card-hologram group hover:border-omniGreen-500/40 transition-all duration-300">
                <div className="mb-4">
                  <h4 className="font-audiowide font-bold text-omniGreen-400 mb-2 text-sm">
                    {tutorial.title}
                  </h4>
                  <p className="text-omniSilver-300 font-orbitron text-xs mb-2">
                    by {tutorial.author}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded text-xs font-orbitron ${
                      tutorial.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                      tutorial.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {tutorial.status}
                    </span>
                    <div className="flex text-omniGreen-400">
                      {[...Array(tutorial.rating)].map((_, i) => (
                        <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <span className="text-omniSilver-400 font-orbitron text-xs">{tutorial.type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Books */}
        <div className="mb-12">
          <h3 className="text-2xl font-audiowide font-bold text-omniGreen-400 mb-6 text-center">
            KNOWLEDGE LIBRARY
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.books.map((book, index) => (
              <div key={index} className="card-hologram group hover:border-omniGreen-500/40 transition-all duration-300">
                <div className="mb-4">
                  <h4 className="font-audiowide font-bold text-omniGreen-400 mb-2 text-sm">
                    {book.title}
                  </h4>
                  <p className="text-omniSilver-300 font-orbitron text-xs mb-3">
                    by {book.author}
                  </p>
                  
                  {book.status === 'Reading' && (
                    <div className="mb-3">
                      <div className="w-full bg-omniBlack-800 rounded-full h-2">
                        <div className="bg-gradient-to-r from-omniGreen-500 to-omniGreen-300 h-2 rounded-full" style={{width: `${book.progress}%`}}></div>
                      </div>
                      <div className="text-omniSilver-400 font-orbitron text-xs mt-1">{book.progress}% Complete</div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded text-xs font-orbitron ${
                      book.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                      book.status === 'Reading' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {book.status}
                    </span>
                    <span className="text-omniSilver-400 font-orbitron text-xs">{book.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Software */}
        <div className="mb-12">
          <h3 className="text-2xl font-audiowide font-bold text-omniGreen-400 mb-6 text-center">
            DEVELOPMENT TOOLS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.tools.map((tool: LearningResource, index: number) => (
              <a 
                key={index} 
                href={tool.link || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="card-hologram group hover:border-omniGreen-500/40 transition-all duration-300 block"
              >
                <div className="text-center p-4">
                  <h4 className="font-audiowide font-bold text-omniGreen-400 mb-2 text-sm">
                    {tool.title}
                  </h4>
                  <p className="text-omniSilver-300 font-orbitron text-xs mb-3">
                    {tool.author}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-omniGreen-500/20 rounded text-xs font-orbitron text-omniGreen-400">
                      {tool.type}
                    </span>
                    <div className="flex text-omniGreen-400">
                      {[...Array(tool.rating)].map((_, i) => (
                        <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* YouTube Channels */}
        <div>
          <h3 className="text-2xl font-audiowide font-bold text-omniGreen-400 mb-6 text-center">
            LEARNING CHANNELS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.youtube.map((channel: LearningResource, index: number) => (
              <a 
                key={index} 
                href={channel.link || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="card-hologram group hover:border-omniGreen-500/40 transition-all duration-300 block"
              >
                <div className="text-center p-4">
                  <h4 className="font-audiowide font-bold text-omniGreen-400 mb-2 text-sm">
                    {channel.title}
                  </h4>
                  <p className="text-omniSilver-300 font-orbitron text-xs mb-2">
                    by {channel.author}
                  </p>
                  <p className="text-omniSilver-400 font-orbitron text-xs mb-3">
                    {channel.type}
                  </p>
                  <div className="mt-2">
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-orbitron">
                      {channel.status}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningResources;
