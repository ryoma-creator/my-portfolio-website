import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GsapAnimatedList = ({ 
  children, 
  duration = 1, 
  stagger = 0.2, 
  ease = 'power2.out',
  scrollTrigger = false,
  className = '',
  delay = 0
}) => {
  const listRef = useRef(null);

  useEffect(() => {
    const listItems = listRef.current.children;
    
    let animation;
    
    if (scrollTrigger) {
      animation = gsap.fromTo(listItems, 
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0,
          duration,
          stagger: { each: stagger },
          ease,
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          delay
        }
      );
    } else {
      animation = gsap.fromTo(listItems, 
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0,
          duration,
          stagger: { each: stagger },
          ease,
          delay
        }
      );
    }

    return () => {
      if (animation) animation.kill();
    };
  }, [duration, stagger, ease, scrollTrigger, delay]);

  return (
    <ul ref={listRef} className={`flex flex-col gap-10 ${className}`}>
      {children}
    </ul>
  );
};

export default GsapAnimatedList;