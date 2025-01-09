'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import AchievementCard from './AchievementCard';

const AutoCarousel = ({ achievements }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [noTransition, setNoTransition] = useState(false);
  const CARD_WIDTH = 720;
  const GAP_WIDTH = 16;
  
  // クローン用の配列を作成（前後に1つずつ追加）
  const extendedAchievements = [
    achievements[achievements.length - 1],
    ...achievements,
    achievements[0]
  ];

  // 初期位置を設定（最初の要素の位置）
  useEffect(() => {
    setPosition(CARD_WIDTH + GAP_WIDTH);
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
        const maxScroll = (achievements.length + 1) * (CARD_WIDTH + GAP_WIDTH);
        
        // 最後のクローンまで来たら、アニメーションなしで最初に戻る
        if (newPosition >= maxScroll) {
          setNoTransition(true);
          setTimeout(() => setNoTransition(false), 0);
          return CARD_WIDTH + GAP_WIDTH;
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
      
      // 端に到達した場合の処理
      if (direction === 'next' && newPosition >= (achievements.length + 1) * (CARD_WIDTH + GAP_WIDTH)) {
        setNoTransition(true);
        setTimeout(() => setNoTransition(false), 0);
        return CARD_WIDTH + GAP_WIDTH;
      }
      if (direction === 'prev' && newPosition <= 0) {
        setNoTransition(true);
        setTimeout(() => setNoTransition(false), 0);
        return achievements.length * (CARD_WIDTH + GAP_WIDTH);
      }
      
      return newPosition;
    });
  };

  return (
    <div className="w-full relative pt-4 pb-16">
      <div className="overflow-hidden px-4">
        <div
          ref={containerRef}
          className="flex gap-4"
          style={{
            transform: `translateX(-${position}px)`,
            transition: noTransition ? 'none' : 'transform 0.3s ease-out',
          }}
        >
          {extendedAchievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              achievement={achievement}
              techStack={achievement.techStack}
              index={index}
            />
          ))}
        </div>
      </div>

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