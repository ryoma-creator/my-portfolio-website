'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import AchievementCard from './AchievementCard';

const AutoCarousel = ({ achievements }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef(null);
  const [position, setPosition] = useState(0);
  const CARD_WIDTH = 720;
  const GAP_WIDTH = 16;
  
  // 3セット分の配列を作成（前中後）
  const tripleAchievements = [...achievements, ...achievements, ...achievements];
  const singleSetWidth = achievements.length * (CARD_WIDTH + GAP_WIDTH);
  
  // 最初は真ん中のセットが見えるようにポジションを設定
  useEffect(() => {
    setPosition(singleSetWidth);
  }, []);

  useEffect(() => {
    let lastTime = null;
    let animationFrameId = null;

    const animate = (currentTime) => {
      if (!isPlaying) return;
      if (lastTime === null) {
        lastTime = currentTime;
      }

      const delta = currentTime - lastTime;
      const speed = 0.05;

      setPosition((prevPosition) => {
        let newPosition = prevPosition + speed * delta;
        
        // 2セット目が終わったら1セット目の位置に瞬間移動
        if (newPosition >= singleSetWidth * 2) {
          newPosition = singleSetWidth;
        }
        
        return newPosition;
      });

      lastTime = currentTime;
      animationFrameId = requestAnimationFrame(animate);
    };

    if (isPlaying) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPlaying, achievements.length]);

  const moveCarousel = (direction) => {
    setIsPlaying(false);
    setPosition(prev => {
      let newPosition = prev + (direction === 'next' ? CARD_WIDTH + GAP_WIDTH : -(CARD_WIDTH + GAP_WIDTH));
      
      // 範囲外に出たら適切なセットの位置に移動
      if (newPosition < singleSetWidth) {
        newPosition = singleSetWidth * 2 - (singleSetWidth - newPosition);
      } else if (newPosition >= singleSetWidth * 2) {
        newPosition = singleSetWidth + (newPosition - singleSetWidth * 2);
      }
      
      return newPosition;
    });
  };

  return (
    <div className="w-full relative pt-12 pb-24 ">
      {/* Header Section */}
      <div className="container mx-auto text-center mb-8 px-4">
        <span className="text-white/40 uppercase tracking-wider text-xs mb-3 block">
          Progress
        </span>
        <h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-light text-center mb-3"
        >
          Learning Journey
        </h2>
        <p className="text-white/60 text-sm font-light max-w-xl mx-auto leading-relaxed tracking-wide">
          Monthly documentation of growth and achievements throughout the year
        </p>
      </div>

      <div className="overflow-hidden px-4">
        <div
          ref={containerRef}
          className="flex gap-4"
          style={{
            transform: `translateX(-${position}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          {tripleAchievements.map((achievement, index) => (
            <AchievementCard
              key={`${index}-${achievement.id}`}
              achievement={achievement}
              techStack={achievement.techStack}
              index={index}
            />
          ))}
        </div>
      </div>
  
      <div className="absolute bottom-12 right-5 flex items-center gap-3">
        <button
          onClick={() => moveCarousel('prev')}
          className="p-1 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-3 h-3 text-white/80" />
        </button>
        
        {/* メインの再生/一時停止ボタン */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? 
            <Pause className="w-4 h-4 text-white/80" /> : 
            <Play className="w-4 h-4 text-white/80 translate-x-[1px]" />
          }
        </button>

        <button
          onClick={() => moveCarousel('next')}
          className="p-1 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-3 h-3 text-white/80" />
        </button>
      </div>
    </div>
  );
};

export default AutoCarousel;