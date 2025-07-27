'use client'

import Hero from "@/components/sections/hero/Hero";
import Strengths from '@/components/sections/strengths/Strengths';
import FeaturedSections from '@/components/sections/featuredSections/FeaturedSections';
import Contact from "@/components/sections/contact/Contact";
import Footer from "@/components/sections/Footer";
import Storytelling from '@/components/sections/storytelling/Storytelling';
import SectionWrapper from '@/components/sections/common/SectionWrapper';
import { achievements } from '@/components/features/achievements/data/achievements';
import AutoCarousel from '@/components/features/achievements/carousel/AutoCarousel';
import Portfolio from '@/components/sections/portfolio/Portfolio';
import Concept from '@/components/sections/layouts/common/concept/Concept';
import ContactCTA from "@/components/common/ContactCTA";
import { homeData } from "@/components/sections/data/home/contactDiscover";
import IntroSection from "@/components/sections/layouts/strengths/IntroSection";
import SkillShowcase from "@/components/sections/layouts/strengths/SkillLayouts/SkillShowcase";
import ResultsSection from "@/components/sections/layouts/strengths/ResultsSection";
import { developmentData } from "@/components/sections/data/strengths/development";

interface HomeData {
  discover: any;
  contactMessage: string;
}

interface DevelopmentData {
  skills: any;
  results: any;
}

export default function HomePage(): JSX.Element {
  const { discover, contactMessage }: HomeData = homeData;
  const { skills } = developmentData;

  return (
    <main>
      <SectionWrapper variant="gradient" >
        <Hero />
      </SectionWrapper>
      
      <SectionWrapper variant="light" >
        <Strengths />
      </SectionWrapper>

      <SectionWrapper variant="light" >
        <Concept />
      </SectionWrapper>
      
      <SectionWrapper variant="light" >
        <FeaturedSections />
      </SectionWrapper>
      
      <SectionWrapper variant="light" id="portfolio-section">
        <Portfolio />
      </SectionWrapper>
      
      <SectionWrapper variant="light" >
        <AutoCarousel achievements={achievements} />
      </SectionWrapper>

      <SectionWrapper variant="gradient2">
        <ResultsSection {...developmentData.results} />
      </SectionWrapper> 
    </main>
  );
}