'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import AchievementCard from './AchievementCard';

const AutoCarousel = ({ achievements }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef(null);
  const [position, setPosition] = useState(0);
  const CARD_WIDTH = 720; // カードの幅を更新
  const GAP_WIDTH = 16;

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
        const maxScroll = (achievements.length) * (CARD_WIDTH + GAP_WIDTH);
        
        // 最後まで来たら最初に戻る
        if (newPosition >= maxScroll) {
          newPosition = 0;
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
      const newPosition = prev + (direction === 'next' ? CARD_WIDTH + GAP_WIDTH : -(CARD_WIDTH + GAP_WIDTH));
      const maxScroll = (achievements.length - 1) * (CARD_WIDTH + GAP_WIDTH);
      return Math.max(0, Math.min(newPosition, maxScroll));
    });
  };

  return (
    <div className="w-full relative pt-4 pb-16">
      {/* メインのカルーセル部分 */}
      <div className="overflow-hidden px-4">
        <div
          ref={containerRef}
          className="flex gap-4"
          style={{
            transform: `translateX(-${position}px)`,
            transition: position === 0 ? 'none' : 'transform 0.3s ease-out',
          }}
        >
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              achievement={achievement}
              techStack={achievement.techStack}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* コントロールボタン */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full p-2 z-10">
        <button
          onClick={() => moveCarousel('prev')}
          className="p-2 rounded-full hover:bg-accent/20 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-accent" />
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 rounded-full hover:bg-accent/20 transition-colors"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? 
            <Pause className="w-6 h-6 text-accent" /> : 
            <Play className="w-6 h-6 text-accent" />
          }
        </button>
        <button
          onClick={() => moveCarousel('next')}
          className="p-2 rounded-full hover:bg-accent/20 transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-accent" />
        </button>
      </div>
    </div>
  );
};

export default AutoCarousel;