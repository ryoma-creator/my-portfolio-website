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
import styles from '@/components/storytelling/storytelling.module.scss'

import MaskScrollAnimation from '@/components/MaskScrollAnimation';
import MaskedEntryAnimation from '@/components/AboutMe/MaskedEntryAnimation';



import ZoomParallax from '@/components/ZoomParallax';

import HorizontalScroll from '@/components/scroll/HorizontalScroll';

// import styles from '@/components/Card/style.module.scss'
import { projects } from '@/components/Card/data';
import Card from '@/components/Card';
import { useScroll } from 'framer-motion';

import FloatingScrollArrow from '@/components/FloatingScrollArrow';

import ScrollVideoPlayerFramer from '@/components/ScrollVideoPlayerFramer';

// app/services/page.jsx
import ResumeContent from '../resume/ResumeContent';


export default function AboutMe() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })


  useEffect( () => {
    const lenis = new Lenis()
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
}, [])
  
  return (
    
      <>
    <div>
      <ResumeContent />
    </div>

 {/*🔻 Arrow mark  */}
<div className="min-h-[200vh]"> {/* スクロール用に十分な高さを確保 */}
  <div className="h-screen bg-gray-900 relative">
    {/* <h1 className="text-white text-4xl">あなたのコンテンツ</h1> */}
    <FloatingScrollArrow />
  </div>
     {/* 以下にコンテンツを配置 */}
</div>


  <div style={{ height: '300vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <MaskedEntryAnimation/>
  </div>

{/* MESSAGE */}
  <div className='min-h-[300px]'>
    <ScrollSection
        imageUrl="/api/placeholder/1920/1080"
        heading="March 2024"
        subheading="In March 2024, I made the decision to leave my company and pursue a path as an engineer."
      >
        {/* <div className="p-8 bg-white">
          <AnimatedText text={<h2 className="text-3xl font-bold mb-4 text-center">It was not easy at all</h2>} />
          <AnimatedText text={
            <p className="text-3xl text-center">
              There is so many things that I needed to learn and break though...
            </p>
          } />
        </div> */}
      </ScrollSection>
    </div>


{/* CARD */}
  <main ref={container} className={styles.main}>
    {
      projects.map( (project, i) => {
        const targetScale = 1 - ( (projects.length - i) * 0.05);
        return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
      })
    }
  </main>

{/* MESSAGE */}
<div className='min-h-[300px]'>
    <ScrollSection
        imageUrl="/api/placeholder/1920/1080"
        heading="Breaking Through"
        subheading="Each day brought new challenges that tested not just my mind, but my determination."
      >
        {/* <div className="p-8 bg-white">
          <AnimatedText text={<h2 className="text-3xl font-bold mb-4 text-center">It was not easy at all</h2>} />
          <AnimatedText text={
            <p className="text-3xl text-center">
              There is so many things that I needed to learn and break though...
            </p>
          } />
        </div> */}
      </ScrollSection>
    </div>


    <main className="min-h-screen">
      <HorizontalScroll />
    </main>

{/* MESSAGE */}
<div className='min-h-[300px]'>
    <ScrollSection
        imageUrl="/api/placeholder/1920/1080"
        heading="March 2024"
        subheading="This period was also a time for trial and error to establish good habits for maintaining consistency."
      >
        {/* <div className="p-8 bg-white">
          <AnimatedText text={<h2 className="text-3xl font-bold mb-4 text-center">It was not easy at all</h2>} />
          <AnimatedText text={
            <p className="text-3xl text-center">
              There is so many things that I needed to learn and break though...
            </p>
          } />
        </div> */}
      </ScrollSection>
    </div>


  <div>
    <FramerMotion />
  </div>
    

  <div className='min-h-[300px]'>
    <ScrollSection
        imageUrl="/api/placeholder/1920/1080"
        heading="It’s been seven months since then."
        subheading="Even though I still don’t know what the future holds, I’ve chosen to keep following this path without giving up."
      >
        {/* <div className="p-8 bg-white">
          <AnimatedText text={<h2 className="text-3xl font-bold mb-4 text-center"></h2>} />
          <AnimatedText text={
            <p className="text-3xl text-center">
              There is so many things that I needed to learn and break though...
            </p>
          } />
        </div> */}
      </ScrollSection>
    </div>


<section>     
        <ZoomParallax />
</section>



<section>     
        <MaskScrollAnimation />
</section>


{/* <section> 
        <ImageSlider />
</section> */}


 <section>
        <main className={styles.main}>

            <GSAP />
            <FramerMotion />
        </main>
</section>

      <div className='h-[2000px]'>
       <ParallaxScroll />
       </div>





    <div className="bg-black h-[2000px]">    
        
            
       


     <div className='w-full h-[800px]'>
     <PageTurn>
      <div className="h-screen flex items-center justify-center">
      <AnimatedText 
          text="Welcome to my website" 
          variant="slideFromRight" 
          scrollTrigger={true}
        />
      </div>
    </PageTurn>

     <GsapAnimatedText 
        text="Hello, World!" 
        variant="fadeIn" 
        duration={1.5} 
        stagger={0.05}
        scrollTrigger={true}
        className="text-2xl font-bold text-blue-500"
      />


     <PageTurnAnimation />
      </div>
      <ScrollSection
        imageUrl="/api/placeholder/1920/1080"
        videoUrl="/path/to/your/video.mp4"  // 動画を使用する場合はこちらを指定
        heading="Our Services"
        subheading="Innovative solutions for your business"
      >
        <div className="p-8 bg-primary">
          <AnimatedText text={<h2 className="text-3xl font-bold mb-4 text-center">Web Development</h2>} />
          <AnimatedText text={
            <p className="text-xl text-center">
              We create cutting-edge web applications tailored to your needs.
            </p>
          } />
        </div>
      </ScrollSection>


      <ScrollSection
        imageUrl="/api/placeholder/1920/1080"
        heading="Mobile Apps"
        subheading="Reach your customers on any device"
      >
        <div className="p-8 bg-white">
          <AnimatedText text={<h2 className="text-3xl font-bold mb-4">iOS and Android Development</h2>} />
          <AnimatedText text={
            <p className="text-xl">
              Build powerful mobile experiences with our expert app development services.
            </p>
          } />
        </div>
      </ScrollSection>
      <ScrollSection
        imageUrl="/api/placeholder/1920/1080"
        heading="Mobile Apps"
        subheading="Reach your customers on any device"
      >
        <div className="p-8 bg-white">
          <AnimatedText text={<h2 className="text-3xl font-bold mb-4">iOS and Android Development</h2>} />
          <AnimatedText text={
            <p className="text-3xl ">
              Build powerful mobile experiences with our expert app development services.
            </p>
          } />
        </div>
      </ScrollSection>

      <ScrollSection
        imageUrl="/api/placeholder/1920/1080"
        heading="Mobile Apps"
        subheading="Reach your customers on any device"
      >
        <div className="p-8 bg-white">
          <AnimatedText text={<h2 className="text-3xl font-bold mb-4">iOS and Android Development</h2>} />
          <AnimatedText text={
            <p className="text-xl">
              Build powerful mobile experiences with our expert app development services.
            </p>
          } />
        </div>
      </ScrollSection>

      <ScrollSection
        imageUrl="/api/placeholder/1920/1080"
        heading="Mobile Apps"
        subheading="Reach your customers on any device"
      >
        <div className="p-8 bg-white">
          <AnimatedText text={<h2 className="text-3xl font-bold mb-4">iOS and Android Development</h2>} />
          <AnimatedText text={
            <p className="text-3xl text-center">
              Build powerful mobile experiences with our expert app development services.
            </p>
          } />
        </div>
      </ScrollSection>

      <ScrollSection
        imageUrl="/api/placeholder/1920/1080"
        heading="Mobile Apps"
        subheading="Reach your customers on any device"
      >
        <div className="p-8 bg-white">
          <AnimatedText text={<h2 className="text-3xl font-bold mb-4">iOS and Android Development</h2>} />
          <AnimatedText text={
            <p className="text-xl">
              Build powerful mobile experiences with our expert app development services.
            </p>
          } />
        </div>
      </ScrollSection>

      {/* 必要に応じて追加のScrollSectionを追加 */}
    </div>

    </>

  )
}