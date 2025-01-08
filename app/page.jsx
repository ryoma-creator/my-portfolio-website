// app/page.jsx
'use client'

import { useEffect, useState } from 'react';
import Hero from "@/components/sections/hero/Hero";
import Strengths from '@/components/sections/strengths/Strengths';
import ImpactVideo from '@/components/sections/impact/ImpactVideo';
import DetailedStrengths from '@/components/sections/detailedStrengths/DetailedStrengths';

import Solutions from "@/components/sections/solutions/Solutions";
import Proof from "@/components/sections/proof/Proof";
import Contact from "@/components/sections/contact/Contact";
import Footer from "@/components/sections/Footer";
import Storytelling from '@/components/sections/storytelling/Storytelling';
import Spacing from '@/components/layout/Spacing';

import PageIndicator from "@/components/ui/PageIndicator";
import BackgroundGradient from '@/components/ui/BackgroundGradient';

import { achievements } from '@/components/features/achievements/data/achievements';
import AutoCarousel from '@/components/features/achievements/carousel/AutoCarousel';

export default function HomePage() {
  const sections = [
    { id: 'hero', name: 'Hero' },
    { id: 'problems', name: 'Problems' },
    { id: 'solutions', name: 'Solutions' },
    { id: 'proof', name: 'Proof' },
    { id: 'contact', name: 'Contact' },
    { id: 'storytelling', name: 'Story' }
  ];

  return (
    <>
      <PageIndicator sections={sections} />
      
      <section id="hero">
        <Hero />
      </section>

        <Spacing />

        <section id="strength">
          <Strengths />
        </section>

        <Spacing />

      <section id="video">
        {/* <Solutions /> */}
      </section>
      <ImpactVideo />

      <Spacing />

      <section id="detail">
        <DetailedStrengths />
      </section>
      <Spacing />

      {/* <section id="solutions">
        <Solutions />
      </section>
      <Spacing /> */}

      <section id="timeline">
      <AutoCarousel achievements={achievements} />
      </section>
      <Spacing />    

      <section id="contact">
        <Contact />
      </section>
      <Spacing />

      <section id="storytelling">
        <Storytelling />
      </section>
      <Spacing />

      <Footer />

      <section id="proof">
        <Proof />
      </section>
      <Spacing />

    </>
  );
}