'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Picture1 from '@/public/medias/pexels-eberhardgross-1302242.jpg';
import Picture2 from '@/public/medias/pexels-eberhardgross-1624438.jpg';
import Picture3 from '@/public/medias/pexels-eberhardgross-443446.jpg';
import Picture4 from '@/public/medias/pexels-iriser-1379636.jpg';
import Picture5 from '@/public/medias/pexels-lisettkruusimae-13076223.jpg';



const images = [
  Picture1,
  Picture2,
  Picture3,
  Picture4,
  Picture5,
  Picture1,
  Picture2,
  Picture3,
  Picture4,
  Picture5,
];

const ImageSlider = () => {
  const trackRef = useRef(null);
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const slideFriction = 1;

  const handleMouseDown = (e) => {
    setMouseDownAt(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth * slideFriction;
    const percentage = -(mouseDelta / maxDelta) * 100;
    const nextPercentageUnconstrained = prevPercentage + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    setPercentage(nextPercentage);
  };

  const handleMouseUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [percentage]);

  return (
    <div className="min-h-screen bg-[#141414] overflow-hidden">
      <div
        ref={trackRef}
        className="flex gap-[4vmin] absolute left-1/2 top-1/2 transform -translate-y-1/2"
        style={{ transform: `translate(${percentage}%, -50%)` }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-[40vmin] h-[56vmin]"
          >
            <Image
              src={src}
              fill
              style={{ 
                objectFit: 'cover',
                objectPosition: `${percentage + 100}% 50%`
              }}
              alt={`Slide ${index + 1}`}
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;