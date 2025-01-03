// app/page.jsx
'use client'

import { useEffect, useState } from 'react';
import Hero from "@/components/sections/hero/Hero";
import Problems from "@/components/sections/problems/Problems";
import Solutions from "@/components/sections/solutions/Solutions";
import Proof from "@/components/sections/proof/Proof";
import Contact from "@/components/sections/contact/Contact";
import Footer from "@/components/sections/Footer";

import PageIndicator from "@/components/ui/PageIndicator";
import BackgroundGradient from '@/components/ui/BackgroundGradient';

export default function HomePage() {
  const sections = [
    { id: 'hero', name: 'Hero' },
    { id: 'problems', name: 'Problems' },
    { id: 'solutions', name: 'Solutions' },
    { id: 'proof', name: 'Proof' },
    { id: 'contact', name: 'Contact' }
  ];

  return (
    <main className="relative">
      {/* ページインジケーター */}
      <PageIndicator sections={sections} />

      {/* Hero セクション */}
      <section id="hero" className="min-h-screen">
        <Hero />
      </section>

      {/* Problems セクション - 背景グラデーション */}
      <section id="problems" className="min-h-screen py-20">
        <BackgroundGradient
          startColor="transparent"
          endColor="var(--accent-color)"
        >
          <Problems />
        </BackgroundGradient>
      </section>

      {/* Solutions セクション */}
      <section id="solutions" className="min-h-screen py-20">
        <BackgroundGradient
          startColor="var(--accent-color)"
          endColor="white"
        >
          <Solutions />
        </BackgroundGradient>
      </section>

      {/* Proof セクション */}
      <section id="proof" className="min-h-screen py-20">
        <Proof />
      </section>

      {/* Contact セクション */}
      <section id="contact" className="min-h-screen py-20">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}