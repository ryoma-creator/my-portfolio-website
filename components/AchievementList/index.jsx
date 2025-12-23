'use client'

// AchievementList/index.jsx
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Award, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";


// メインのAchievementListコンポーネント
export default function AchievementList({ achievements }) {
  const [hovered, setHovered] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollContainerRef = useRef(null);
  const scrollContentRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // 概要セクションの表示状態
  const [showOverall, setShowOverall] = useState(false);

  if (!achievements || achievements.length === 0) {
    return (
      <div className="w-full p-8 text-center text-gray-500">
        No achievements to display
      </div>
    );
  }

  // 無限ループスクロールの実装
  useEffect(() => {
    const container = scrollContainerRef.current;
    const content = scrollContentRef.current;
    if (!container || !content || achievements.length === 0) return;

    let animationId: number | null = null;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    let isPaused = false;

    // カード幅を動的に計算
    const getCardWidth = () => {
      if (typeof window === 'undefined') return 360;
      if (window.innerWidth < 640) return 280; // sm
      if (window.innerWidth < 768) return 320; // md
      return 360; // lg以上
    };

    const cardWidth = getCardWidth();
    const gap = 16;
    const singleSetWidth = achievements.length * (cardWidth + gap);

    const scroll = () => {
      if (!container || !content) return;
      
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        
        // 1セット分スクロールしたら、最初に戻る
        if (scrollPosition >= singleSetWidth) {
          scrollPosition = scrollPosition - singleSetWidth;
        }
        
        container.scrollLeft = scrollPosition;
      }
      
      animationId = requestAnimationFrame(scroll);
    };

    // マウス/タッチイベント
    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { 
      // スクロール位置を調整
      const currentScroll = container.scrollLeft;
      const adjustedScroll = currentScroll % singleSetWidth;
      container.scrollLeft = adjustedScroll;
      scrollPosition = adjustedScroll;
      isPaused = false;
    };

    const handleTouchStart = () => { isPaused = true; };
    const handleTouchEnd = () => {
      setTimeout(() => {
        const currentScroll = container.scrollLeft;
        const adjustedScroll = currentScroll % singleSetWidth;
        container.scrollLeft = adjustedScroll;
        scrollPosition = adjustedScroll;
        isPaused = false;
      }, 1000);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    isPaused = false;
    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [achievements]);

  // コンテンツを2倍に複製して無限ループを実現
  const duplicatedAchievements = [...achievements, ...achievements];

  return (
    <div className="w-full max-w-[900px] space-y-6 mx-auto">
      {/* Monthly Progress Section */}
      <div 
        ref={scrollContainerRef}
        className="w-full rounded-md border border-white bg-white overflow-x-auto scroll-smooth"
        style={{ 
          scrollbarWidth: 'thin',
          WebkitOverflowScrolling: 'touch',
          overflowY: 'hidden'
        }}
      >
        <div 
          ref={scrollContentRef}
          className="flex space-x-4 p-4"
          style={{ 
            width: 'max-content',
            willChange: 'transform',
            display: 'flex'
          }}
        >
          {duplicatedAchievements.map((achievement, index) => (
            <AchievementCard
              key={`${achievement.period}-${index}`}
              achievement={achievement}
              index={index % achievements.length}
              hovered={hovered}
              setHovered={setHovered}
              isExpanded={isExpanded}
              onToggleExpand={() => setIsExpanded(!isExpanded)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// AchievementCardコンポーネント→hideの上部の部分
// 一番必要な部分🔻
const AchievementCard = React.memo(({
  achievement,
  index,
  hovered,
  setHovered,
  isExpanded,
  onToggleExpand
}) => {
  const techStack = {
    "March 2024": ["HTML", "CSS", "JavaScript", "Git", "Error Handling", "VSCode"],
    "April 2024": ["JavaScript", "DOM", "Async", "Events", "Callbacks", "Git"],
    "May 2024": ["React", "Hooks", "Components", "State", "Props", "Node.js"],
    "June 2024": ["React", "Component Architecture", "State Management", "Hooks", "Props"],
    "July 2024": ["CRUD", "Drag & Drop", "UI/UX", "Local Storage", "useEffect"],
    "August 2024": ["Tailwind", "Next.js", "Component Libraries", "UI Design"],
    "September 2024": ["Next.js", "TypeScript", "Layouts", "SSR", "PostgreSQL"],
    "October 2024": ["GSAP", "Framer Motion", "Scroll Animations", "Performance", "useRef"],
    "Current Focus": ["React Patterns", "TypeScript", "Next.js", "Animation"]
  }[achievement.period] || [];


  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0 rounded-lg bg-[#27272c]',
        'transition-all duration-300 ease-out relative overflow-hidden',
        'max-w-full',
            // blur effect
        hovered !== null && hovered !== index && 
        "scale-[0.98]"
        // "blur-sm scale-[0.98]"
      )}
      style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
    >
      {/* 背景画像 */}
      {achievement.background && (
        <div className="absolute inset-0">
          <Image
            src={achievement.background}
            alt={achievement.title}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
      )}

      <div className="p-6 relative z-10">
        <div className="h-[250px] flex flex-col gap-4">
          {/* 上部コンテンツ */}
          <div>
            <div className="">
              <span className="text-brand-pink text-sm">{achievement.period}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{achievement.title}</h3>
            <p className="text-gray-400 text-sm  line-clamp-2">
              {achievement.achievements[0]}
            </p>
          </div>

          {/* 技術スタック - 中央配置 */}
          <div className="flex-grow flex items-center">
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-brand-pink/20 text-white text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 展開ボタン */}
          <div>
            <button
              onClick={onToggleExpand}
              className="text-white hover:text-brand-pink text-sm flex items-center gap-2 "
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Hide details
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  View details
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 展開時のコンテンツ */}
      {isExpanded && (
        <div className="p-6 pt-0 animate-fadeIn relative z-10">
          <div className="border-t border-white/10 pt-4">
            <div className="space-y-4">
              {achievement.achievements.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1.5">
                    <svg
                      className="w-4 h-4 text-brand-pink"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-white/60 text-sm">{item}</p>
                </div>
              ))}
            </div>
            
            {/* Key Achievement Section */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="text-center">
                <span className="text-brand-pink text-sm flex items-center justify-center gap-2">
                  <Award className="w-4 h-4" />
                  Key Achievement
                </span>
              </div>
              <p className="mt-2 text-center text-white/70 text-sm italic">
                {achievement.highlight}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

AchievementCard.displayName = "AchievementCard";

// 以下はモデルとなったもの。
// <div className="w-full max-w-[900px]">
// <ScrollArea className="w-full rounded-md border border-primary bg-primary">
//   <div className="flex space-x-4 p-4">
//     {achievements.map((achievement, index) => (
//       <div
//         key={index}
//         className="w-[350px] flex-shrink-0 rounded-lg border p-6 bg-[#27272c]"
//       >
//         {/* Card Header */}
//         <div className="mb-6">
//           <h3 className="text-2xl font-bold text-white mb-2">
//             {achievement.title}
//           </h3>
//           <p className="text-emerald-600 font-medium">
//             {achievement.period}
//           </p>
//           <div className="sm:flex justify-center"> 
//             <Award />
//           </div>
//         </div>
//         {/* Achievement List */}
//         <div className="space-y-6">
//           {achievement.achievements.map((achievement, i) => (
//             <div key={i} className="flex items-start gap-3">
//               <div className="mt-1.5">
//                 <svg 
//                   className="w-4 h-4 text-brand-pink" 
//                   fill="none" 
//                   viewBox="0 0 24 24" 
//                   stroke="currentColor"
//                 >
//                   <path 
//                     strokeLinecap="round" 
//                     strokeLinejoin="round" 
//                     strokeWidth={2} 
//                     d="M5 13l4 4L19 7" 
//                   />
//                 </svg>
//               </div>
//               <p className="text-white/60 whitespace-normal">
//                 {achievement}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     ))}
//   </div>
//   {/* スクロールバーを下部に表示 */}
//   <ScrollBar orientation="horizontal" />
// </ScrollArea>
// </div>