// app/page.jsx
'use client'

import { useEffect, useState } from 'react';
import Hero from "@/components/sections/hero/Hero";
import Problems from "@/components/sections/problems/Problems";
import Solutions from "@/components/sections/solutions/Solutions";
import Proof from "@/components/sections/proof/Proof";
import Contact from "@/components/sections/contact/Contact";
import Footer from "@/components/sections/Footer";
import Spacing from '@/components/layout/Spacing';

import PageIndicator from "@/components/ui/PageIndicator";
import BackgroundGradient from '@/components/ui/BackgroundGradient';

export default function HomePage() {
  const sections = [
    { id: 'hero', name: 'Hero' },
    { id: 'problems', name: 'Problems' },
    { id: 'solutions', name: 'Solutions' },
    { id: 'proof', name: 'Proof' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <>
      <PageIndicator sections={sections} />
      
      <section id="hero">
        <Hero />
      </section>
      
      <BackgroundGradient
        startColor="transparent"
        endColor="var(--accent-color)"
      >
        <Spacing />
        <section id="problems">
          <Problems />
        </section>
        <Spacing />
      </BackgroundGradient>

      <section id="solutions">
        <Solutions />
      </section>
      <Spacing />

      <section id="proof">
        <Proof />
      </section>
      <Spacing />

      <section id="contact">
        <Contact />
      </section>
      <Spacing />

      <Footer />
    </>
  );
}