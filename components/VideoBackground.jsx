'use client';

import React, { useState, useEffect } from 'react';

const getRandomVideo = () => {
  const videos = [
    '/videos/video1.mp4',
    '/videos/video2.mp4',
    '/videos/video3.mp4',
    '/videos/video4.mp4',
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