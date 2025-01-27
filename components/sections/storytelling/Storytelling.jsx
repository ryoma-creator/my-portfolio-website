'use client'
import ScrollSection from '@/components/scroll/ScrollSection'
import AnimatedText from '@/components/scroll/AnimatedText'
import PageTurnAnimation from '@/components/scroll/PageTurnAnimation';
import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';
import PageTurn from '@/components/scroll/PageTurn';
import ParallaxScroll from '@/components/scroll/ParallaxScroll';
import GSAP from '@/components/GSAP';
import FramerMotion from '@/components/FramerMotion';
import Lenis from '@studio-freight/lenis'
import { useEffect, useRef } from 'react';

import styles from './storytelling.module.scss'

import MaskScrollAnimation from '@/components/MaskScrollAnimation';
import MaskedEntryAnimation from '@/components/AboutMe/MaskedEntryAnimation';
import ZoomParallax from '@/components/ZoomParallax';
import HorizontalScroll from '@/components/scroll/HorizontalScroll';
import { projects } from '@/components/Card/data';
import Card from '@/components/Card';
import { useScroll } from 'framer-motion';
import FloatingScrollArrow from '@/components/FloatingScrollArrow';
import ScrollVideoPlayerFramer from '@/components/ScrollVideoPlayerFramer';
import ResumeContent from '@/app/resume/ResumeContent';
import Contact from '@/app/contact/page';
import Footer from '@/components/sections/Footer';

import GsapAnimatedElement from '@/components/scroll/GsapAnimatedElement';
import Stats from '@/components/Stats';

export default function Storytelling() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])
  
  return (
 
<>
      <div className="bg-black">
        <Contact />
      </div>

      {/* <div className="bg-transparent">
        <Footer />
      </div> */}
      </>

  );
}