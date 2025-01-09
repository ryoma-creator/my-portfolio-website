'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

// Import projects data
import { projects } from '@/components/features/achievements/data/projects';

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProject, setActiveProject] = useState(projects[0]);
  
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    setActiveProject(projects[swiper.activeIndex]);
  };

  return (
    <section className="relative min-h-screen w-full bg-[#0f0f0f] py-24">
      <div className="w-full max-w-[90vw] mx-auto">
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
          className="mb-8"
          onSlideChange={handleSlideChange}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className={`relative aspect-video rounded-lg overflow-hidden ${index === activeIndex ? 'group' : 'pointer-events-none'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay with buttons - Only visible for active slide */}
                {index === activeIndex && (
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center space-x-4 scale-90 group-hover:scale-100 transition-transform duration-300">
                      <a 
                        href={project.live} 
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-black hover:text-white transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a 
                        href={project.github} 
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-white hover:text-black transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
          
          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev w-8 h-8 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors duration-300 after:hidden flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next w-8 h-8 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors duration-300 after:hidden flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </Swiper>

        {/* Project Title and Category */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-light text-white mb-2 capitalize">
            {activeProject.title}
          </h3>
          <p className="text-white/60 text-lg uppercase tracking-wider">
            {activeProject.category}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;