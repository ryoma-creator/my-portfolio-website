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
import styles from '@/components/storytelling/storytelling.module.scss';
import MaskScrollAnimation from '@/components/MaskScrollAnimation';
import MaskedEntryAnimation from '@/components/AboutMe/MaskedEntryAnimation';
import ZoomParallax from '@/components/ZoomParallax';
import HorizontalScroll from '@/components/scroll/HorizontalScroll';
import { projects } from '@/components/Card/data';
import Card from '@/components/Card';
import { useScroll } from 'framer-motion';
import FloatingScrollArrow from '@/components/FloatingScrollArrow';
import ScrollVideoPlayerFramer from '@/components/ScrollVideoPlayerFramer';
import ResumeContent from '../resume/ResumeContent';
import Contact from '../contact/page';
import Footer from '@/components/sections/Footer';

export default function ServicesPage() {
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
    <main className="bg-primary min-h-screen">
      <div className="min-h-[200vh]"> 
        <div className="h-screen bg-primary relative">
          <FloatingScrollArrow />
        </div>
      </div>

      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <MaskedEntryAnimation/>
      </div>

      {/* ScrollSection を GsapAnimatedText に置き換え */}
      <section className='min-h-[300px] grid place-items-center bg-primary py-24'>
        <GsapAnimatedText 
          text="March 2024"
          variant="blurIn" 
          duration={1.5} 
          scrollTrigger={true}
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
        />
        <GsapAnimatedText 
          text="In March 2024, I made the decision to leave my company and pursue a path as an engineer."
          variant="blurIn" 
          duration={1.5}
          delay={0.2}
          scrollTrigger={true}
          className="text-xl md:text-2xl text-white/80 max-w-3xl text-center px-4"
        />
      </section>

      <main ref={container} className={`${styles.main} bg-primary w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center`}>
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })}
      </main>

      {/* 2つ目のセクション */}
      <section className='min-h-[300px] grid place-items-center bg-primary py-24'>
        <GsapAnimatedText 
          text="Breaking Through"
          variant="blurIn" 
          duration={1.5} 
          scrollTrigger={true}
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
        />
        <GsapAnimatedText 
          text="Each day brought new challenges that tested not just my mind, but my determination."
          variant="blurIn" 
          duration={1.5}
          delay={0.2}
          scrollTrigger={true}
          className="text-xl md:text-2xl text-white/80 max-w-3xl text-center px-4"
        />
      </section>

      <main className="min-h-screen bg-primary">
        <HorizontalScroll />
      </main>

      {/* 3つ目のセクション */}
      <section className='min-h-[300px] grid place-items-center bg-primary py-24'>
        <GsapAnimatedText 
          text="March 2024"
          variant="blurIn" 
          duration={1.5} 
          scrollTrigger={true}
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
        />
        <GsapAnimatedText 
          text="This period was also a time for trial and error to establish good habits for maintaining consistency."
          variant="blurIn" 
          duration={1.5}
          delay={0.2}
          scrollTrigger={true}
          className="text-xl md:text-2xl text-white/80 max-w-3xl text-center px-4"
        />
      </section>

      <div className="bg-primary">
        <FramerMotion />
      </div>

      {/* 4つ目のセクション */}
      <section className='min-h-[300px] grid place-items-center bg-primary py-24'>
        <GsapAnimatedText 
          text="It's been seven months since then."
          variant="blurIn" 
          duration={1.5} 
          scrollTrigger={true}
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
        />
        <GsapAnimatedText 
          text="Even though I still don't know what the future holds, I've chosen to keep following this path without giving up."
          variant="blurIn" 
          duration={1.5}
          delay={0.2}
          scrollTrigger={true}
          className="text-xl md:text-2xl text-white/80 max-w-3xl text-center px-4"
        />
      </section>

      <section className="bg-primary">     
        <ZoomParallax />
      </section>

      {/* 5つ目のセクション */}
      <section className='min-h-[300px] grid place-items-center bg-primary py-24'>
        <GsapAnimatedText 
          text="After 6month"
          variant="blurIn" 
          duration={1.5} 
          scrollTrigger={true}
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
        />
        <GsapAnimatedText 
          text="Efforts gradually overlapped like pieces of an image, ultimately becoming a cohesive work."
          variant="blurIn" 
          duration={1.5}
          delay={0.2}
          scrollTrigger={true}
          className="text-xl md:text-2xl text-white/80 max-w-3xl text-center px-4"
        />
      </section>

      <section className="bg-primary">     
        <MaskScrollAnimation />
      </section>

      <section className='min-h-[300px] grid place-items-center bg-primary py-24'>
        <GsapAnimatedText 
          text="The journey is far from over, and it's up to you how it continues." 
          variant="blurIn" 
          duration={1.5} 
          scrollTrigger={true}
          className="text-4xl md:text-6xl font-bold text-white max-w-3xl text-center"
        />
      </section>

      <div className="bg-primary">
        <Contact />
      </div>

      <div className="bg-primary">
        <Footer />
      </div>

    </main>
  );
}