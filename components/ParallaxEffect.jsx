'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxEffect = ({ imageUrl }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    gsap.to(image, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <img
        ref={imageRef}
        src={imageUrl}
        alt="Parallax Background"
        className="absolute top-0 left-0 w-full h-[150%] object-cover"
      />
    </div>
  );
};

export default ParallaxEffect;