'use client'

import { useTheme } from '@/components/contexts/ThemeContext';
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
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function HomePage() {
  const { theme } = useTheme();

  return (
    <main className={theme === 'modern' ? 'bg-black text-white' : 'bg-white text-black'}>
      <SectionWrapper variant="gradient" className="py-12">
        <Hero />
      </SectionWrapper>
      
      <SectionWrapper variant="gradient2" className="py-12">
        <Strengths />
      </SectionWrapper>
      
      <SectionWrapper variant="gradient" className="py-12">
        <FeaturedSections />
      </SectionWrapper>
      
      <SectionWrapper variant="gradient2" className="py-12">
        <Portfolio />
      </SectionWrapper>
      
      <SectionWrapper variant="gradient" className="py-12">
        <AutoCarousel achievements={achievements} />
      </SectionWrapper>
      
      <SectionWrapper variant="gradient2" className="py-12">
        <Contact />
      </SectionWrapper>
      
      <SectionWrapper variant="gradient" className="py-12">
        <Storytelling />
      </SectionWrapper>
      
      <SectionWrapper variant="gradient2" className="py-12">
        <Footer />
      </SectionWrapper>

      <ThemeToggle />
    </main>
  );
}