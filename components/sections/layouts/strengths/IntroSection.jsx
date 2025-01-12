'use client'

import { motion } from 'framer-motion';

export default function IntroSection() {
  return (
    <>
      {/* Small subtitle */}
      <div className="text-center mb-4">
        <span className="text-sm uppercase tracking-wider text-white/60">
          MY PHILOSOPHY
        </span>
      </div>

      {/* Main title and description */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-light mb-8">
          Analytical Thinking in Modern Development
        </h1>
        <p className="text-lg text-white/80 leading-relaxed">
          In today's rapidly evolving tech landscape, many developers focus solely on implementation without proper analysis. Through rigorous legal philosophy training and practical experience, I've developed a systematic approach that transforms complex challenges into measurable solutions. This unique perspective allows me to bridge the gap between theoretical understanding and practical application.
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
          <source src="https://res.cloudinary.com/da3abynbu/video/upload/v1736499132/samples/dance-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>
    </>
  );
}