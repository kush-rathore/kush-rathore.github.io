import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { useSwipeGestures } from '../hooks/useSwipeGestures';

const Testimonials: React.FC = () => {
  const { testimonials } = siteConfig;
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const swipeRef = useSwipeGestures({
    onSwipeLeft: nextTestimonial,
    onSwipeRight: prevTestimonial,
    threshold: 50
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-omniGreen-400' : 'text-omniSilver-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-omniBlack-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 right-32 w-40 h-40 bg-omniGreen-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-32 w-32 h-32 bg-omniGreen-500/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2.5s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-audiowide font-bold text-omniGreen-400 mb-4 text-glow">
            LEARNING TESTIMONIALS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-omniGreen-500 to-omniGreen-300 mx-auto rounded-full"></div>
          <p className="text-omniSilver-300 font-orbitron mt-6 max-w-2xl mx-auto">
            What teachers and mentors say about my learning progress
          </p>
        </div>

        {/* Mobile Swipe Navigation */}
        <div className="md:hidden mb-6">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-omniGreen-500/20 border border-omniGreen-500/50 flex items-center justify-center text-omniGreen-400 hover:bg-omniGreen-500/30 transition-colors"
              style={{ minHeight: '44px', minWidth: '44px' }}
            >
              ←
            </button>
            <span className="text-omniSilver-300 font-orbitron text-sm">
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-omniGreen-500/20 border border-omniGreen-500/50 flex items-center justify-center text-omniGreen-400 hover:bg-omniGreen-500/30 transition-colors"
              style={{ minHeight: '44px', minWidth: '44px' }}
            >
              →
            </button>
          </div>
          <p className="text-center text-omniSilver-400 font-orbitron text-xs">
            Swipe left/right to navigate testimonials
          </p>
        </div>
        
        <div ref={swipeRef}>
          {/* Mobile: Single testimonial view */}
          <div className="md:hidden max-w-md mx-auto">
            <div className="card-hologram group hover:border-omniGreen-500/40 transition-all duration-300 relative">
              {/* Status Indicator */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-omniGreen-500/30 rounded-full border-2 border-omniGreen-500/60 flex items-center justify-center">
                <div className="w-2 h-2 bg-omniGreen-400 rounded-full animate-pulse"></div>
              </div>
              
              <div className="flex items-start space-x-4 mb-4">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-omniGreen-500/50"
                  />
                  {/* Omnitrix Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-omniGreen-500/30 animate-spin" style={{animationDuration: '8s'}}></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-orbitron font-bold text-omniGreen-400 text-lg">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-omniSilver-400 font-orbitron text-sm">
                    {testimonials[currentIndex].position} • {testimonials[currentIndex].company}
                  </p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-omniGreen-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="text-center mb-6">
                <div className="relative">
                  <div className="absolute -left-4 -top-2 text-4xl text-omniGreen-500/40 font-audiowide">"
                  </div>
                  <blockquote className="text-omniSilver-300 font-orbitron leading-relaxed italic pl-6">
                    {testimonials[currentIndex].content}
                  </blockquote>
                  <div className="absolute -right-2 -bottom-2 text-4xl text-omniGreen-500/40 font-audiowide rotate-180">"
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-4">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-omniGreen-500/20 border-2 border-omniGreen-500/30 flex items-center justify-center overflow-hidden">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-omniGreen-400 font-orbitron font-bold text-sm">${testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}</span>`;
                      }
                    }}
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-omniGreen-400 font-orbitron font-bold text-sm">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-omniSilver-400 font-orbitron text-xs">
                    {testimonials[currentIndex].position}
                  </p>
                  <p className="text-omniSilver-500 font-orbitron text-xs">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop: Grid view */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
            <div key={index} className="card-hologram group hover:border-omniGreen-500/40 transition-all duration-300 relative">
              {/* Status Indicator */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-omniGreen-500/30 rounded-full border-2 border-omniGreen-500/60 flex items-center justify-center">
                <div className="w-2 h-2 bg-omniGreen-400 rounded-full animate-pulse"></div>
              </div>
              
              <div className="flex items-start space-x-4 mb-4">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-omniGreen-500/50"
                  />
                  {/* Omnitrix Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-omniGreen-500/30 animate-spin" style={{animationDuration: '8s'}}></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-orbitron font-bold text-omniGreen-400 text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-omniSilver-400 font-orbitron text-sm">
                    {testimonial.position} • {testimonial.company}
                  </p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-omniGreen-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="text-center mb-6">
                <div className="relative">
                  <div className="absolute -left-4 -top-2 text-4xl text-omniGreen-500/40 font-audiowide">"
                  </div>
                  <blockquote className="text-omniSilver-300 font-orbitron leading-relaxed italic pl-6">
                    {testimonial.content}
                  </blockquote>
                  <div className="absolute -right-2 -bottom-2 text-4xl text-omniGreen-500/40 font-audiowide rotate-180">"
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-omniGreen-500/20 border-2 border-omniGreen-500/30 flex items-center justify-center overflow-hidden">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-omniGreen-400 font-orbitron font-bold text-sm">${testimonial.name.split(' ').map(n => n[0]).join('')}</span>`;
                      }
                    }}
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-omniGreen-400 font-orbitron font-bold text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-omniSilver-400 font-orbitron text-xs">
                    {testimonial.position}
                  </p>
                  <p className="text-omniSilver-500 font-orbitron text-xs">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
