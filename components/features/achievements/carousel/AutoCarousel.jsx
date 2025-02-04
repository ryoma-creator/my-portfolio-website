'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import AchievementCard from './AchievementCard';
import { SectionGroup, SectionContainer,SectionTitle,SectionSubtitle,SectionSentence } from '@/components/sections/layouts/common/section';

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
      <SectionContainer>
        <SectionGroup
          subtitle="Progress"
          title="Learning Journey"
          sentence="Monthly documentation of growth and achievements throughout the year"
          >

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
  
        {/* コントロールボタン部分の改善 */}
        <div className="absolute bottom-12 right-5 flex items-center gap-3">
          <button
            onClick={() => moveCarousel('prev')}
            className="p-1.5 rounded-full bg-text-secondary hover:bg-text-tertiary transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4 text-text-primary" /> {/* サイズと色を調整 */}
          </button>
          
          {/* メインの再生/一時停止ボタン */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 rounded-full bg-text-secondary border border-textbg-text-primary flex items-center justify-center
            hover:bg-text-tertiary transition-all duration-300"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? 
              <Pause className="w-5 h-5 text-text-primary" /> : 
              <Play className="w-5 h-5 text-text-primary translate-x-[1px]" />
            }
          </button>

          <button
            onClick={() => moveCarousel('next')}
            className="p-1.5 rounded-full bg-text-secondary hover:bg-text-tertiary transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4 text-text-primary" />
          </button>
        </div>
        </SectionGroup>
      </SectionContainer>
    </div>
  );
};

export default AutoCarousel;