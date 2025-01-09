'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';

// Import styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './Portfolio.css';

// Import project data
import { projects } from '@/components/features/achievements/data/projects';

import DesignTimeline from './components/DesignTimeline';

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [showEvolution, setShowEvolution] = useState(false);
  
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    setActiveProject(projects[swiper.activeIndex]);
    setShowEvolution(false);// スライド変更時にTimelineを閉じる
  };
  
  const [showTimeline, setShowTimeline] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-primary py-32">
      {/* Main Project Introduction */}
      {activeProject.isMainProject && (
        <div className="container mx-auto text-center mb-24 px-4">
          <span className="text-accent uppercase tracking-widest text-sm mb-4 block">
            Featured Work
          </span>
          <h2 className="text-responsive-title-lg font-light text-white mb-6">
            Portfolio Evolution
          </h2>
          <p className="text-responsive-md text-white/60 max-w-2xl mx-auto leading-relaxed">
            A continuous journey of refinement in design and development
          </p>
        </div>
      )}

      {/* Other Projects Section */}
      {!activeProject.isMainProject && (
        <div className="container mx-auto text-center mb-24 px-4">
          <h2 className="text-responsive-title-lg font-light text-white mb-6">
            Project Archive
          </h2>
          <p className="text-responsive-md text-white/60 max-w-2xl mx-auto">
            Exploring various technologies and solutions
          </p>
        </div>
      )}

      {/* Slider Section */}
      <div className="container mx-auto relative">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.8}
          spaceBetween={40}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          modules={[EffectCoverflow, Navigation]}
          onSlideChange={handleSlideChange}
          className="mb-16"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div 
                className={`relative aspect-video rounded-lg overflow-hidden 
                  ${index === activeIndex ? 'group cursor-pointer' : 'pointer-events-none opacity-50'}`}
              >
                {/* Project Type Badge */}
                {project.isMainProject ? (
                  <div className="absolute top-6 right-6 transform rotate-12 bg-accent px-4 py-2 rounded-sm z-20">
                    <span className="text-primary font-medium text-sm tracking-wider">Main Portfolio</span>
                  </div>
                ) : project.isFeatured && (
                  <div className="absolute top-6 right-6 transform rotate-12 bg-white/20 px-4 py-2 rounded-sm z-20">
                    <span className="text-white font-medium text-sm tracking-wider">Featured</span>
                  </div>
                )}

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                {index === activeIndex && (
                  <div className="absolute inset-0 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex items-center gap-6">
                        {project.live && (
                          <a 
                            href={project.live} 
                            className="!flex !items-center !justify-center !w-[44px] !h-[44px] !rounded-full bg-white text-primary hover:bg-accent hover:text-white transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                        {project.github && (
                          <a 
                            href={project.github} 
                            className="!flex !items-center !justify-center !w-[44px] !h-[44px] !rounded-full bg-white text-primary hover:bg-accent hover:text-white transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
          
          {/* Navigation Buttons */}
          <button className="swiper-button-prev navigation-button left-4" aria-label="Previous slide">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next navigation-button right-4" aria-label="Next slide">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </Swiper>

        {/* Project Details Section */}
        <div className="text-center mt-16">
          <h3 className="text-responsive-lg font-light text-white mb-6">
            {activeProject.title}
          </h3>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {activeProject.stack.map((tech, index) => (
              <span 
                key={index} 
                className="px-4 py-2 text-responsive-sm bg-white/5 rounded-full text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Development Period */}
          <p className="text-responsive-sm text-white/60 tracking-wider font-light">
            {activeProject.period}
          </p>

          {/* UI/UX Iterations for Main Project */}
            {activeProject.isMainProject && (
              <DesignTimeline 
                isVisible={showTimeline}
                onToggle={() => setShowTimeline(!showTimeline)}
              />
            )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;