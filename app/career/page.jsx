'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SectionWrapper from '@/components/sections/common/SectionWrapper';
import PageHeader from "@/components/sections/common/PageHeader";
import { SectionGroup, SectionContainer } from "@/components/sections/layouts/common/section";
import Footer from '@/components/sections/Footer';
import FocusCards from '@/components/ui/focus-cards';

// careerData をインポート
import { careerData } from '@/components/sections/data/career/careerData';

export default function CareerPage() {
  return (
    <main>
      {/* PageHeader */}
      <SectionWrapper variant="gradient">
        <PageHeader {...careerData.header} />
      </SectionWrapper>

      {/* Career Highlights */}
      <SectionWrapper variant="gradient">
        <div className="py-24">
          <SectionContainer>
            <SectionGroup
              subtitle={careerData.intro.subtitle}
              title={careerData.intro.title}
              sentence={careerData.intro.description}
            >
              <div className="mt-16">
                <FocusCards 
                  cards={careerData.milestones.items}
                  gridClassName="grid-cols-1 xl:grid-cols-2 gap-[30px]"
                />
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
  );
}