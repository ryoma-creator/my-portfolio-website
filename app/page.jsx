// app/page.jsx
'use client'

import { useEffect, useState } from 'react';
import Hero from "@/components/sections/hero/Hero";
import Strengths from '@/components/sections/strengths/Strengths';
import DetailedStrengths from '@/components/sections/detailedStrengths/DetailedStrengths';
import Contact from "@/components/sections/contact/Contact";
import Footer from "@/components/sections/Footer";
import Storytelling from '@/components/sections/storytelling/Storytelling';
import SectionWrapper from '@/components/sections/common/SectionWrapper';
import SectionHeader from '@/components/sections/common/SectionHeader';
import { achievements } from '@/components/features/achievements/data/achievements';
import AutoCarousel from '@/components/features/achievements/carousel/AutoCarousel';
import Portfolio from '@/components/sections/portfolio/Portfolio';

export default function HomePage() {
  return (
    <main>
      <SectionWrapper variant="gradient" className="py-24">
        <Hero />
      </SectionWrapper>
      
      <SectionWrapper variant="gradient2" className="py-24">
        <SectionHeader 
          backgroundText="STRENGTHS"
          topText="Core"
          bottomText="Strengths"
        />
        <Strengths />
      </SectionWrapper>
      
      <SectionWrapper variant="gradient" className="py-24">
        <SectionHeader 
          backgroundText="EXPERTISE"
          topText="In-Depth"
          bottomText="Experience"
        />
        <DetailedStrengths />
      </SectionWrapper>
      
      <SectionWrapper variant="gradient2" className="py-24">
        <SectionHeader 
          backgroundText="PORTFOLIO"
          topText="Selected"
          bottomText="Works"
        />
        <Portfolio />
      </SectionWrapper>
      
      <SectionWrapper variant="gradient" className="py-24">
        <SectionHeader 
          backgroundText="JOURNEY"
          topText="Growth"
          bottomText="Timeline"
        />
        <AutoCarousel achievements={achievements} />
      </SectionWrapper>
      
      <SectionWrapper variant="gradient2" className="py-24">
        <SectionHeader 
          backgroundText="CONNECT"
          topText="Let's"
          bottomText="Connect"
        />
        <Contact />
      </SectionWrapper>
      
      <SectionWrapper variant="gradient" className="py-24">
        <Storytelling />
      </SectionWrapper>
      
      <SectionWrapper variant="gradient2" className="py-24">
        <Footer />
      </SectionWrapper>
    </main>
  );
}