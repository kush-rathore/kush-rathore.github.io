import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { useSwipeGestures } from '../hooks/useSwipeGestures';

const Blog: React.FC = () => {
  const { blogPosts } = siteConfig;
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextPost = () => {
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  };
  
  const prevPost = () => {
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };
  
  const swipeRef = useSwipeGestures({
    onSwipeLeft: nextPost,
    onSwipeRight: prevPost,
    threshold: 50
  });

  return (
    <section id="blog" className="section-padding bg-omniBlack-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-24 right-24 w-32 h-32 bg-omniGreen-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-24 left-24 w-40 h-40 bg-omniGreen-500/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-audiowide font-bold text-omniGreen-400 mb-4 text-glow">
            LEARNING LOG
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-omniGreen-500 to-omniGreen-300 mx-auto rounded-full"></div>
          <p className="text-omniSilver-300 font-orbitron mt-6 max-w-2xl mx-auto">
            Documenting my coding journey, insights, and discoveries
          </p>
        </div>

        {/* Mobile Swipe Navigation */}
        <div className="md:hidden mb-6">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <button 
              onClick={prevPost}
              className="w-12 h-12 rounded-full bg-omniGreen-500/20 border border-omniGreen-500/50 flex items-center justify-center text-omniGreen-400 hover:bg-omniGreen-500/30 transition-colors"
              style={{ minHeight: '44px', minWidth: '44px' }}
            >
              ←
            </button>
            <span className="text-omniSilver-300 font-orbitron text-sm">
              {currentIndex + 1} / {blogPosts.length}
            </span>
            <button 
              onClick={nextPost}
              className="w-12 h-12 rounded-full bg-omniGreen-500/20 border border-omniGreen-500/50 flex items-center justify-center text-omniGreen-400 hover:bg-omniGreen-500/30 transition-colors"
              style={{ minHeight: '44px', minWidth: '44px' }}
            >
              →
            </button>
          </div>
          <p className="text-center text-omniSilver-400 font-orbitron text-xs">
            Swipe left/right to navigate posts
          </p>
        </div>
        
        <div ref={swipeRef}>
          {/* Mobile: Single post view */}
          <div className="md:hidden">
            <article className="card-hologram group hover:border-omniGreen-500/40 transition-all duration-300 cursor-pointer">
              {/* Category Badge */}
              <div className="absolute -top-3 -right-3 px-3 py-1 bg-omniGreen-500/20 border border-omniGreen-500/40 rounded-full">
                <span className="text-omniGreen-400 font-orbitron text-xs font-bold">{blogPosts[currentIndex].category}</span>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-audiowide font-bold text-omniGreen-400 mb-3 group-hover:text-omniGreen-300 transition-colors">
                  {blogPosts[currentIndex].title}
                </h3>
                
                <p className="text-omniSilver-300 font-orbitron text-sm leading-relaxed mb-4">
                  {blogPosts[currentIndex].excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs text-omniSilver-400 font-orbitron mb-4">
                  <span>{blogPosts[currentIndex].date}</span>
                  <span>{blogPosts[currentIndex].readTime}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {blogPosts[currentIndex].tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-omniBlack-800 border border-omniGreen-500/20 rounded text-omniGreen-400 font-orbitron text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read More Button */}
              <div className="mt-auto">
                <button 
                  className="w-full py-3 bg-omniGreen-500/10 border border-omniGreen-500/30 rounded-lg text-omniGreen-400 font-orbitron text-sm font-medium hover:bg-omniGreen-500/20 hover:border-omniGreen-500/50 transition-all duration-300"
                  style={{ minHeight: '44px' }}
                >
                  Read More
                </button>
              </div>
            </article>
          </div>
          
          {/* Desktop: Grid view */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="card-hologram group hover:border-omniGreen-500/40 transition-all duration-300 cursor-pointer">
                {/* Category Badge */}
                <div className="absolute -top-3 -right-3 px-3 py-1 bg-omniGreen-500/20 border border-omniGreen-500/40 rounded-full">
                  <span className="text-omniGreen-400 font-orbitron text-xs font-bold">{post.category}</span>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-audiowide font-bold text-omniGreen-400 mb-3 group-hover:text-omniGreen-300 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-omniSilver-300 font-orbitron text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-xs text-omniSilver-400 font-orbitron mb-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-omniBlack-800 border border-omniGreen-500/20 rounded text-omniGreen-400 font-orbitron text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Read More Button */}
                <div className="mt-auto">
                  <button className="w-full py-2 bg-omniGreen-500/10 border border-omniGreen-500/30 rounded-lg text-omniGreen-400 font-orbitron text-sm font-medium hover:bg-omniGreen-500/20 hover:border-omniGreen-500/50 transition-all duration-300">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <button className="btn-omnitrix group/btn relative overflow-hidden">
            <div className="flex items-center justify-center space-x-3">
              <svg className="w-5 h-5 group-hover/btn:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span className="font-orbitron font-bold">VIEW ALL POSTS</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
