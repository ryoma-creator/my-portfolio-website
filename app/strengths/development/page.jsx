// app/strengths/development/page.jsx
'use client'

import SectionWrapper from '@/components/sections/common/SectionWrapper';
import IntroSection from '@/components/sections/layouts/strengths/IntroSection';
import BackgroundSection from '@/components/sections/layouts/strengths/BackgroundSection';
import ApproachSection from '@/components/sections/layouts/strengths/ApproachSection';
import ResultsSection from '@/components/sections/layouts/strengths/ResultsSection';
import { developmentData } from '@/components/sections/data/strengths/development';

export default function DevelopmentPage() {
  return (
    <main>
      <SectionWrapper variant="gradient">
        <IntroSection {...developmentData.intro} />
      </SectionWrapper>

      <SectionWrapper variant="gradient2">
        <BackgroundSection {...developmentData.background} />
      </SectionWrapper>

      <SectionWrapper variant="gradient">
        <ApproachSection {...developmentData.approach} />
      </SectionWrapper>

      <SectionWrapper variant="gradient2">
        <ResultsSection {...developmentData.results} />
      </SectionWrapper>
    </main>
  );
}