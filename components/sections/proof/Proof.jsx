'use client'

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';
import CareerDetail from './CareerDetail';
import AchievementList from '@/components/AchievementList';
import { achievements } from '@/components/scroll/HorizontalScrollText/achievements';

export default function Proof() {
  const [activeTab, setActiveTab] = useState('technical');
  const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);

  const proofSections = {
    technical: [
      {
        title: "Frontend Development Projects",
        approach: [
          "Implemented responsive web applications",
          "Developed reusable component libraries",
          "Applied modern development practices"
        ],
        results: [
          "5+ React/Next.js projects completed",
          "Optimized performance metrics",
          "Clean, maintainable codebase"
        ],
        skills: [
          "React/Next.js expertise",
          "Modern CSS frameworks",
          "Performance optimization"
        ],
        impact: "Delivered high-quality projects that improved user experience and team productivity"
      }
    ],
    // 他のセクションは省略
  };

  return (
    <section className="py-16 bg-transparent">
      {/* メインタイトル */}
      <div className="text-center mb-16">
        <div className="flex flex-col items-center gap-6">
          <GsapAnimatedText 
            text="Proven Track Record"
            variant="perspectiveTilt" 
            duration={1.5}
            scrollTrigger={true}
            className="text-5xl md:text-7xl font-bold text-white"
          />
          <GsapAnimatedText 
            text="Solutions backed by real results"
            variant="blurIn" 
            duration={1.5}
            delay={0.3}
            scrollTrigger={true}
            className="text-xl md:text-2xl text-white/80"
          />
        </div>
      </div>

      {/* タブナビゲーション */}
      <div className="flex justify-center gap-8 mb-16">
        {['Technical', 'Analytical', 'Global'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`px-8 py-4 rounded-lg text-xl font-bold transition-all ${
              activeTab === tab.toLowerCase()
                ? 'bg-accent text-gray-900'
                : 'bg-gray-800/50 text-white hover:bg-gray-700/50'
            }`}
          >
            {tab} Experience
          </button>
        ))}
      </div>

      {/* コンテンツエリア */}
      <div className="max-w-5xl mx-auto space-y-8">
        {/* メインの実績表示 */}
        {proofSections[activeTab].map((detail, index) => (
          <CareerDetail
            key={index}
            {...detail}
          />
        ))}

        {/* Learning Timeline - Technical タブでのみ表示 */}
        {activeTab === 'technical' && (
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <GsapAnimatedText 
                  text="Learning Journey"
                  variant="blurIn"
                  duration={1.5}
                  className="text-2xl font-bold"
                />
                <button
                  onClick={() => setIsTimelineExpanded(!isTimelineExpanded)}
                  className="text-accent flex items-center gap-2"
                >
                  <ChevronDown className={`transform transition-transform ${
                    isTimelineExpanded ? 'rotate-180' : ''
                  }`} />
                </button>
              </div>

              <div className={`transition-all duration-300 ${
                isTimelineExpanded 
                  ? 'max-h-[600px] opacity-100' 
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <div className="bg-gray-900/30 rounded-xl p-6">
                  <AchievementList achievements={achievements} />
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}