'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

// components
import Stairs from '@/components/Stairs';
import VideoBackground from '@/components/VideoBackground';

const StairTransition = () => {
  const pathname = usePathname();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(true), 1000); // 1秒後に動画を表示
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence mode='wait'>
      <div key={pathname} className='relative'>
        {/* Video Background */}
        {showVideo && <VideoBackground className='z-10' />}

        {/* Stairs Component */}
        <div className='h-full w-full fixed top-0 left-0 right-0 pointer-events-none z-50 flex'>
          <Stairs />
        </div>

        {/* Fade-out effect */}
        <motion.div
          className='h-screen w-screen fixed top-0 pointer-events-none bg-accent z-40'
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: 'easeInOut' },
          }}
        />
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
