import React from 'react';
import { Project, siteConfig } from '../config/siteConfig';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="card-hologram group transform hover:scale-105 transition-all duration-500">
      {/* Project Image */}
      <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} Screenshot`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const placeholder = target.nextElementSibling as HTMLElement;
            if (placeholder) placeholder.style.display = 'flex';
          }}
        />
        
        {/* Fallback placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-omniBlack-800/80 to-omniBlack-900/60 hidden items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-omniGreen-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-omniGreen-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-omniSilver-300 font-orbitron text-sm">PROJECT PREVIEW</span>
          </div>
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-omniBlack-950/60 via-transparent to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full border border-omniGreen-500 text-omniGreen-400 font-orbitron text-xs font-bold bg-omniBlack-900/80 backdrop-blur-sm">
          Featured
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-audiowide font-bold text-omniGreen-400 group-hover:text-omniGreen-300 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-omniSilver-300 font-orbitron text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 bg-omniGreen-500/20 text-omniGreen-400 font-orbitron text-xs rounded-full border border-omniGreen-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          {project.instagram && (
            <a
              href={project.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center text-xs"
              title="View on Instagram"
            >
              <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              INSTAGRAM
            </a>
          )}
          
          {project.youtube && (
            <a
              href={project.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center text-xs"
              title="Watch on YouTube"
            >
              <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
              YOUTUBE
            </a>
          )}
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-3 mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-omniGreen-500 text-omniGreen-400 rounded-lg hover:bg-omniGreen-500/10 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              View Code
            </a>
          )}
          
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-omniGreen-500 text-omniBlack-900 font-bold rounded-lg hover:bg-omniGreen-400 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { projects } = siteConfig;
  
  return (
    <section id="projects" className="section-padding bg-omniBlack-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-tech-grid opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-omniGreen-500/3 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-audiowide font-bold text-omniGreen-400 mb-4 text-glow">
            PROJECT GALLERY
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-omniGreen-500 to-omniGreen-300 mx-auto rounded-full"></div>
        </div>

        {/* Featured Projects Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-audiowide font-bold text-omniGreen-400 mb-8 text-center">
            FEATURED PROJECTS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects && projects.length > 0 ? (
              projects.map((project: Project, index: number) => (
                <ProjectCard key={index} project={project} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-omniSilver-400 font-orbitron">No projects available at the moment.</p>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-hologram inline-block p-8">
            <h3 className="text-2xl font-audiowide font-bold text-omniGreen-400 mb-4">
              READY FOR NEW MISSIONS
            </h3>
            <p className="text-omniSilver-300 font-orbitron mb-6 max-w-2xl mx-auto">
              Looking for a developer who can transform ideas into powerful digital solutions? Let's collaborate on your next project!
            </p>
            <a
              href="#contact"
              className="btn-omnitrix inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              INITIATE CONTACT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
