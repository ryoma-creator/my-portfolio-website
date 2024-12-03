'use client'

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GsapAnimatedElement from '@/components/scroll/GsapAnimatedElement';

const MaskedEntryAnimation = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [maskSize, setMaskSize] = useState(80);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end start"]
  });

  const initialMaskSize = 80;
  const maxAdditionalSize = 3000;
  const easing = 0.15;

  useEffect(() => {
    let scrollStartPosition = 0;

    const animate = () => {
      if (!containerRef.current) return;

      const scrollProgress = window.scrollY / (containerRef.current.getBoundingClientRect().height - window.innerHeight);
      const delta = scrollProgress - scrollStartPosition;
      scrollStartPosition += delta * easing;

      const currentAdditionalSize = maxAdditionalSize * scrollStartPosition;
      setMaskSize(initialMaskSize + currentAdditionalSize);

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  // 元のスクロールベースのテキストアニメーション効果を維持
  const textLeftX = useTransform(scrollYProgress, [0.2, 0.4], [0, -50]);
  const textRightX = useTransform(scrollYProgress, [0.2, 0.4], [0, 50]);
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);

  return (
    <main className="mb-[100vh]">
      <div ref={containerRef} className="relative h-[300vh] bg-primary">
        <div
          className="sticky top-0 flex items-center justify-center h-screen overflow-hidden bg-primary"
          style={{
            maskImage: 'url("/svg/mask.svg")',
            maskPosition: '52.35% center',
            maskRepeat: 'no-repeat',
            maskSize: `${maskSize}%`,
            WebkitMaskImage: 'url("/svg/mask.svg")',
            WebkitMaskPosition: '52.35% center',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: `${maskSize}%`,
          }}
        >
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/AboutMeVideo/1113764_Earth_Handicraft_3840x2160.mp4" type="video/mp4" />
          </video>
        </div>

        <GsapAnimatedElement
          variant="fadeIn"
          duration={1}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none"
        >
          <motion.span 
            className="text-[8vw] text-white font-bold"
            style={{ x: textLeftX, opacity: textOpacity }}
          >
            About
          </motion.span>
          <motion.span 
            className="text-[8vw] text-white font-bold ml-[2vw]"
            style={{ x: textRightX, opacity: textOpacity }}
          >
            Me
          </motion.span>
        </GsapAnimatedElement>
      </div>
    </main>
  );
};

export default MaskedEntryAnimation;