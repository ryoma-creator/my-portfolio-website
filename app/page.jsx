'use client'

import Hero from "@/components/sections/hero/Hero";
import Storytelling from "@/components/sections/storytelling/Storytelling";
import Problems from "@/components/sections/problems/Problems";
import Solutions from "@/components/sections/solutions/Solutions";
import Proof from "@/components/sections/proof/Proof";
import Contact from "@/components/sections/contact/Contact";
import Footer from "@/components/sections/Footer";

import Spacing from "@/components/layout/Spacing";

import BackgroundGradient from "@/components/ui/BackgroundGradient";


export default function HomePage() {
  return (
    <>
      <Hero />
      <BackgroundGradient
      startColor="transparent"
      endColor="accent"   // または具体的なカラーコード
      >
          <Spacing />

        <Problems />
        <Spacing />
        </BackgroundGradient>
      <Solutions />
        <Spacing />
      <Proof />
        <Spacing />
      <Contact />
        <Spacing />
      <Storytelling />
        <Spacing />
      <Footer />
    </>
  );
}