// AchievementCarousel.jsx
import React, { useState, useRef } from 'react';
import { Pause, Play } from "lucide-react";
// import AchievementList from './AchievementList';

export default function AchievementCarousel({ achievements }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef(null);
  
  const SCROLL_SPEED = 60; // 秒数（調整可能）

  return (
    <div className="relative">
      {/* 再生/停止ボタン */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute -top-12 right-0 p-2 rounded-full bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors z-20"
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>

      {/* スクロールコンテナ */}
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="transition-all duration-500"
          style={{
            animation: isPlaying ? `scroll ${SCROLL_SPEED}s linear infinite` : 'none'
          }}
        >
          <AchievementList achievements={achievements} />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}