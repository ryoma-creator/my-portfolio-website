'use client'

import { motion } from 'framer-motion';

export default function IntroSection({ subtitle, title, description, videoSrc }) {
  return (
    <>
      {/* Small subtitle */}
      <div className="text-center mb-4 pt-24">
        <span className="text-sm uppercase tracking-wider text-white/60">
          {subtitle}
        </span>
      </div>

      {/* Main title and description */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-light mb-8">
          {title}
        </h1>
        <p className="text-lg text-white/80 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Video Section */}
      <div className="relative w-full h-[70vh] overflow-hidden rounded-lg">
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