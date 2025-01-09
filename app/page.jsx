'use client'

import { useEffect, useState } from 'react';
import Hero from "@/components/sections/hero/Hero";
import Strengths from '@/components/sections/strengths/Strengths';
import ImpactVideo from '@/components/sections/impact/ImpactVideo';
import DetailedStrengths from '@/components/sections/detailedStrengths/DetailedStrengths';
import Contact from "@/components/sections/contact/Contact";
import Footer from "@/components/sections/Footer";
import Storytelling from '@/components/sections/storytelling/Storytelling';
import Spacing from '@/components/layout/Spacing';
import BackgroundGradient from '@/components/ui/BackgroundGradient';
import { achievements } from '@/components/features/achievements/data/achievements';
import AutoCarousel from '@/components/features/achievements/carousel/AutoCarousel';
import Portfolio from '@/components/sections/portfolio/Portfolio';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Spacing />
      <Strengths />
      {/* <Spacing />
      <ImpactVideo /> */}
      <Spacing />
      <DetailedStrengths />
      <Spacing />
      <Portfolio />
      <Spacing />
      <AutoCarousel achievements={achievements} />
      <Spacing />    
      <Contact />
      <Spacing />
      <Storytelling />
      <Spacing />
      <Footer />
    </>
  );
}