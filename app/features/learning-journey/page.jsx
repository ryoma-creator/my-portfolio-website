// app/features/learning-journey/page.jsx
'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SectionWrapper from '@/components/sections/common/SectionWrapper';
import IntroSection from '@/components/sections/layouts/strengths/IntroSection';
import BackgroundSection from '@/components/sections/layouts/strengths/BackgroundSection';
import ApproachSection from '@/components/sections/layouts/strengths/ApproachSection';
import ResultsSection from '@/components/sections/layouts/strengths/ResultsSection';
import { learningJourneyData } from '@/components/sections/data/features/learningJourney';
import PageHeader from '@/components/sections/common/PageHeader';

export default function LearningJourneyPage() {
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

      <main>
        <SectionWrapper variant="gradient2">
          <PageHeader {...learningJourneyData.header} />
        </SectionWrapper>

        <SectionWrapper variant="gradient">
          <IntroSection {...learningJourneyData.intro} />
        </SectionWrapper>

        <SectionWrapper variant="gradient2">
          <BackgroundSection {...learningJourneyData.background} />
        </SectionWrapper>

        <SectionWrapper variant="gradient">
          <ApproachSection {...learningJourneyData.approach} />
        </SectionWrapper>

        <SectionWrapper variant="gradient2">
          <ResultsSection {...learningJourneyData.results} />
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