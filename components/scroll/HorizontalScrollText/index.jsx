'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ljData } from './achievements';

gsap.registerPlugin(ScrollTrigger);


// 以下をpropsとして受け取っている
{/* <HorizontalScrollText 
scrollContainerRef={scrollAreaRef}
/> */}

const HorizontalScrollText = ({ scrollContainerRef }) => {
  const trackRef = useRef(null);
  const containerRef = useRef(null); // 🔥これが抜けていました
  const scrollArea = useRef(null);

  useEffect(() => {
    const scrollArea = scrollAreaRef.current;  // ❌ scrollAreaRef は props の名前が違う
    const track = trackRef.current;
    const container = containerRef.current;    // ✅ 追加


    if (!track || !scrollArea) return;

    gsap.to(track, {
      x: () => -(track.offsetWidth - container.offsetWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${track.offsetWidth - container.offsetWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        scroller: scrollContainerRef.current, // ✅ props から受け取った ref を使用
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [scrollContainerRef]);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden bg-[#141414]">
      <div
        ref={trackRef}
        className="flex gap-[4vmin] absolute left-0 top-1/2 transform -translate-y-1/2"
      >
        {ljData.map((milestone, index) => (
          <div 
            key={index} 
            className="relative w-[80vmin] h-auto bg-white rounded-lg p-8 flex-shrink-0 shadow-lg"
          >
            {/* Card Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {milestone.title}
              </h3>
              <p className="text-emerald-600 font-medium">
                {milestone.period}
              </p>
            </div>

            {/* Achievement List */}
            <div className="space-y-3">
              {milestone.achievements.map((achievement, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1.5">
                    <svg 
                      className="w-4 h-4 text-emerald-500" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollText;