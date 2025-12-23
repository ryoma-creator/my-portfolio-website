'use client'

import { motion } from 'framer-motion';

export default function IntroSection({ subtitle, title, description, videoSrc }) {
  return (
    <>
      {/* Text content with padding */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Small subtitle */}
        <div className="text-center mb-4 pt-24">
          <span className="text-sm uppercase tracking-wider text-gray-500">
            {subtitle}
          </span>
        </div>

        {/* Main title and description */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-8 text-gray-900">
            {title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Video Section - Full width */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[70vh] overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>
    </>
  );
}