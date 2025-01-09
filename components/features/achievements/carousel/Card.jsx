// components/features/achievements/carousel/Card.jsx
'use client';

import React from 'react';
import { ChevronDown, ChevronUp, Award } from "lucide-react";
import Image from 'next/image';
import { cn } from "@/lib/utils";

const Card = React.memo(({
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

    <div className="w-[360px] flex-shrink-0 rounded-lg bg-[#27272c] relative overflow-hidden">
    {/* 背景画像 */}
    {achievement.background && (
  <div className="absolute inset-0">
    <Image
      src={achievement.background}
      alt={achievement.title}
      fill
      sizes="(max-width: 360px) 100vw, 360px"  // カードの固定幅に合わせて設定
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
              <span className="text-emerald-500 text-sm">{achievement.period}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{achievement.title}</h3>
            <p className="text-gray-400 text-sm line-clamp-2">
              {achievement.achievements[0]}
            </p>
          </div>

          {/* 技術スタック - 中央配置 */}
          <div className="flex-grow flex items-center">
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full"
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
              className="text-emerald-400 hover:text-emerald-300 text-sm flex items-center gap-2"
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
                      className="w-4 h-4 text-emerald-500"
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
                <span className="text-emerald-400 text-sm flex items-center justify-center gap-2">
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

Card.displayName = "Card";

export default Card;