'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SectionWrapper from '@/components/sections/common/SectionWrapper';
import IntroSection from '@/components/sections/analytics/IntroSection';
import BackgroundSection from '@/components/sections/analytics/BackgroundSection';
import ApproachSection from '@/components/sections/analytics/ApproachSection';
import ResultsSection from '@/components/sections/analytics/ResultsSection';

export default function AnalyticsPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 固定ナビゲーション */}
      <nav className={`fixed top-6 left-6 z-50 transition-all duration-300 ${
        isScrolled ? 'opacity-100' : 'opacity-60 hover:opacity-100'
      }`}>
        <Link 
          href="/" 
          className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          <span>Back to Home</span>
        </Link>
      </nav>

      <main>
        <SectionWrapper variant="gradient">
          <IntroSection />
        </SectionWrapper>

        <SectionWrapper variant="gradient2">
          <BackgroundSection />
        </SectionWrapper>

        <SectionWrapper variant="gradient">
          <ApproachSection />
        </SectionWrapper>

        <SectionWrapper variant="gradient2">
          <ResultsSection />
        </SectionWrapper>
      </main>

      {/* フローティングボタン（モバイル向け） */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-4 bg-accent rounded-full shadow-lg hover:bg-accent/80 transition-all md:hidden"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </button>
    </>
  );
}