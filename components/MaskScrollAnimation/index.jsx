'use client'

import React, { useRef, useEffect } from 'react';
import Work from '@/app/work/page';

const MaskScrollAnimation = () => {
  const containerRef = useRef(null);
  const stickyMaskRef = useRef(null);

  const initialMaskSize = 70;
  const mazAdditionalSize = 3000;
  const easing = 0.15;
  let scrollStartPosition = 0;

  useEffect(() => {
    const animate = () => {
      const currentAdditionalSize = mazAdditionalSize * getScrollProgress();
      if (stickyMaskRef.current) {
        stickyMaskRef.current.style.maskSize = `${initialMaskSize + currentAdditionalSize}%`;
        stickyMaskRef.current.style.webkitMaskSize = `${initialMaskSize + currentAdditionalSize}%`;
      }
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

//  ❌ScrollYProgress
  const getScrollProgress = () => {
    if (!containerRef.current || !stickyMaskRef.current) return 0;
    const scrollProgress = stickyMaskRef.current.offsetTop / (containerRef.current.getBoundingClientRect().height - window.innerHeight);
    const delta = scrollProgress - scrollStartPosition;
    scrollStartPosition += delta * easing;
    return scrollStartPosition;
  };

  return (
    <main className="mb-[100vh]">
      <div ref={containerRef} className="relative h-[300vh] bg-primary">
        <div
          ref={stickyMaskRef}
          className="sticky top-0 flex items-center justify-center h-screen overflow-hidden"
          style={{
            maskImage: 'url("/svg/svg.svg")',
            maskPosition: '52.35% center',
            maskRepeat: 'no-repeat',
            maskSize: '1%',
            WebkitMaskImage: 'url("/svg/svg.svg")',
            WebkitMaskPosition: '52.35% center',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: '1%',
          }}
        >
          <div className="bg-primary">
          <Work/>
          {/* <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/AboutMeVideo/1113764_Earth_Handicraft_3840x2160.mp4" type="video/mp4" />
          </video> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MaskScrollAnimation;

// Memo
// let scrollStartPosition = 0 → 0 is start of top position (0 → 1)
// const easing = 0.15; → 0 slow 1 fast



// Memo (const getScrollProgress)

// containerRefとwindow.innerHeight：
// containerRefは全体のスクロール可能な領域。
// window.innerHeightはブラウザウィンドウの高さ
// (全体の高さ - ウィンドウの高さ) で、スクロール可能な距離を計算。
// deltaは変化量って意味。

