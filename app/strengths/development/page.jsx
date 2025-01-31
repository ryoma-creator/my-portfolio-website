// app/strengths/development/page.jsx
'use client'

import SectionWrapper from '@/components/sections/common/SectionWrapper';
import IntroSection from '@/components/sections/layouts/strengths/IntroSection';
import BackgroundSection from '@/components/sections/layouts/strengths/BackgroundSection';
import ApproachSection from '@/components/sections/layouts/strengths/ApproachSection';
import ResultsSection from '@/components/sections/layouts/strengths/ResultsSection';

import SkillShowcase from '@/components/sections/layouts/strengths/SkillLayouts/SkillShowcase';// 👈 追加
import SkillSplitView from '@/components/sections/layouts/strengths/SkillLayouts/SkillSplitView';// 👈 追加

import SkillOverview from '@/components/sections/layouts/strengths/SkillLayouts/SkillOverview';// 👈 追加
import SkillDetails from '@/components/sections/layouts/strengths/SkillLayouts/SkillDetails';// 👈 追加

import { developmentData } from '@/components/sections/data/strengths/development';


export default function DevelopmentPage() {
  return (
    <main>
      <SectionWrapper variant="gradient">
        <IntroSection {...developmentData.intro} />
      </SectionWrapper>

      {/* <SectionWrapper variant="gradient">
        <SkillOverview {...developmentData.skills} />
      </SectionWrapper> */}

      <SectionWrapper variant="gradient">
        <SkillDetails {...developmentData.skills} />
      </SectionWrapper>

      {/* SkillShowcaseを追加 */}
      {/* <SectionWrapper variant="gradient">
        <SkillShowcase {...developmentData.skills} />
      </SectionWrapper> */}
        {/*🔺  or 🔻 */}
      {/* <SectionWrapper variant="gradient">
        <SkillSplitView {...developmentData.skills} />
      </SectionWrapper> */}

      {/* <SectionWrapper variant="gradient">
        <BackgroundSection {...developmentData.background} />
      </SectionWrapper> */}
      

      <SectionWrapper variant="gradient">
        <ApproachSection {...developmentData.approach} />
      </SectionWrapper>

      <SectionWrapper variant="gradient2">
        <ResultsSection {...developmentData.results} />
      </SectionWrapper>
    </main>
  );
}