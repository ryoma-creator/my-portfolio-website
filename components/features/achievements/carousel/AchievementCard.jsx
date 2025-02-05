'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

import { techIcons } from '../data/techData'; 


const AchievementCard = ({ achievement, techStack, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // 月を短縮形に変換
  const formatMonth = (dateStr) => {
    const [month, year] = dateStr.split(' ');
    const shortMonth = month.slice(0, 3).toUpperCase();
    return { month: shortMonth, year };
  };

  const { month, year } = formatMonth(achievement.period);

  return (
    <div 
      className="flex-none w-[720px]" // 1.8倍に拡大
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href="/learningJourney" className="block">
        <div className="relative rounded-lg overflow-hidden cursor-pointer">
          {/* 画像部分 */}
          <div className="relative h-[320px]"> {/* 高さも調整 */}
            <Image
              src={achievement.background}
              alt={achievement.title}
              fill
              sizes="(max-width: 720px) 100vw, 720px"
              priority={index === 0}
              className="object-cover"
            />
            {/* オーバーレイ - isHovered時に全体を暗く */}
            <div className={`
              absolute inset-0 transition-all duration-300
              ${isHovered ? 'bg-black/70' : 'bg-gradient-to-b from-transparent to-black/70'}
            `} />

            {/* スケルトン番号（月表示） */}
            <div className="absolute top-6 left-6 flex items-baseline gap-3">
              <div className="text-8xl leading-none font-extrabold text-transparent 
                text-outline opacity-80">
                {month}
              </div>
              <div className="text-3xl font-bold text-white/80">
                {year}
              </div>
            </div>

            {/* ホバー時のRead Nowボタン */}
            {isHovered && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="px-8 py-4 
                    bg-white/10 backdrop-blur-sm 
                    border border-white/20
                    text-white rounded-full
                    hover:bg-white/15 
                    transition-all duration-300
                    shadow-[0_4px_24px_-1px_rgba(0,0,0,0.1)]
                    text-lg font-semibold"
                >
                  Read the Journey
                </button>
              </div>
            )}

            {/* 下部の情報エリア */}
            <div className={`
              absolute bottom-0 left-0 right-0 p-6
              transition-opacity duration-300
              ${isHovered ? 'opacity-0' : 'opacity-100'}
            `}>
              <div className="flex justify-between items-end">
                {/* 左側: タイトル */}
                <div className="flex-1 mr-8">
                  <h4 className="text-xl text-white/90 leading-tight">
                    {achievement.title}
                  </h4>
                </div>
                {/* 右側: 技術スタック */}
                <div className="flex flex-wrap gap-2 justify-end">
  {techStack?.map((tech, index) => {
    const Icon = techIcons[tech];
    return Icon ? (
      <div
        key={index}
        className="p-2 bg-accent/20 rounded-full hover:bg-accent/30 
          transition-colors group relative"
      >
        <Icon className="w-5 h-5 text-white" />
        {/* ツールチップ */}
        <span className="absolute bottom-full right-0 mb-2 px-2 py-1 
          text-sm bg-black/80 rounded opacity-0 group-hover:opacity-100
          transition-opacity whitespace-nowrap">
          {tech}
        </span>
      </div>
    ) : null;
  })}
</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AchievementCard;