'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PageTurn = ({ children }) => {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;

    gsap.fromTo(page,
      { rotationY: 0 },
      {
        rotationY: -90,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: page,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={pageRef} style={{ transformStyle: 'preserve-3d' }}>
      {children}
    </div>
  );
};

export default PageTurn;