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

// import DiscoverSection from "@/components/sections/common/DiscoverSection";
import ContactCTA from "@/components/common/ContactCTA";

import { homeData } from "@/components/sections/data/home/contactDiscover";


// test
import SkillMatrix from "@/components/sections/layouts/strengths/SkillMatrix";
import { developmentData } from "@/components/sections/data/strengths/development";


export default function HomePage() {
  // homeDataから必要なデータを取り出す(contactと、discover用に。)
  const { discover, contactMessage } = homeData;


  const { skills } = developmentData;

  return (
    <main>
      <SectionWrapper variant="gradient" >
        <Hero />
      </SectionWrapper>
      
      <SectionWrapper variant="light" >
        <Strengths />
      </SectionWrapper>

      {/* <SectionWrapper variant="light" >
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
      
      <SectionWrapper variant="dark" >
        <Contact />
      </SectionWrapper> */}
      
      {/* <SectionWrapper variant="dark" >
        <Storytelling />
      </SectionWrapper> */}
      
      <SectionWrapper variant="gradient" >
        <SkillMatrix 
          categories={skills.categories}
          title={skills.title}
          description={skills.description}
        />
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <ContactCTA description={contactMessage} />
      </SectionWrapper>
      
      <SectionWrapper variant="dark" >
        <Footer />
      </SectionWrapper>
    </main>
  );
}