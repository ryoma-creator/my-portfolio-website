'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SectionWrapper from '@/components/sections/common/SectionWrapper';
import PageHeader from "@/components/sections/common/PageHeader";
import IntroSection from "@/components/sections/layouts/strengths/IntroSection";
import { SectionGroup, SectionContainer } from "@/components/sections/layouts/common/section";
import AchievementList from "@/components/AchievementList";
import { achievements } from "@/components/features/achievements/data/achievements";
import { learningJourneyData } from "@/components/sections/data/learningJourney/learningJourney";
import Footer from '@/components/sections/Footer';

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
        <main>
        {/* PageHeader */}
        <SectionWrapper variant="gradient">
          <PageHeader {...learningJourneyData.header} />
        </SectionWrapper>
        
        {/* IntroSection */}
        <SectionWrapper variant="light">
          <IntroSection {...learningJourneyData.intro} />
        </SectionWrapper>
      
        {/* Achievement Timeline */}
        <SectionWrapper variant="gradient">
          <div className="py-24">
            <SectionContainer>
              <SectionGroup
                subtitle="MONTHLY PROGRESS"
                title="Technical Evolution Timeline"
                sentence="Track my development journey month by month, from foundational concepts to advanced implementations."
              >
                <div className="mt-16">
                  <AchievementList achievements={achievements} />
                  <p className="text-sm text-text-tertiary text-center">
                    ← Scroll horizontally to explore more →
                  </p>
                </div>
              </SectionGroup>
            </SectionContainer>
          </div>
        </SectionWrapper>
      
      {/* Back to Home Section */}
      <SectionWrapper variant="dark">
        <div className="py-16 flex justify-center">
          <Link 
            href="/" 
            className="px-8 py-3
              bg-white/10 backdrop-blur-sm 
              border border-white/20
              rounded-full 
              hover:bg-white/15 
              transition-all duration-300
              text-white/80 hover:text-white"
          >
            Back to Home
          </Link>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <SectionWrapper variant="dark">
        <Footer />
      </SectionWrapper>
    </main>
    </>
  );
}