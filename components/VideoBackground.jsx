'use client';

import React, { useState, useEffect } from 'react';

const getRandomVideo = () => {
  const videos = [
    'https://res.cloudinary.com/dnm2fyhwt/video/upload/v1733368963/video1_jsbnsu.mp4',
    'https://res.cloudinary.com/dnm2fyhwt/video/upload/v1733368980/video2_vv4ze7.mp4',
    'https://res.cloudinary.com/dnm2fyhwt/video/upload/v1733368984/video3_uummrz.mp4',
    'https://res.cloudinary.com/dnm2fyhwt/video/upload/v1733368973/video4_odcqzo.mp4',
    'https://res.cloudinary.com/dnm2fyhwt/video/upload/v1733368965/vecteezy_general-mathematics-equation-math-formula-text-background_21256861_tlz5k7.mp4'
  ];
  return videos[Math.floor(Math.random() * videos.length)];
};

const VideoBackground = ({ opacity = 0.3 }) => {
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    setVideoSrc(getRandomVideo());
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 w-full h-full overflow-hidden z-[-1]">
      {videoSrc && (
        <video
          className="absolute min-w-full min-h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-black" 
        style={{ opacity: 1 - opacity }}
      ></div>
    </div>
  );
};

export default VideoBackground;