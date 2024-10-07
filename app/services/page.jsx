'use client'
import ScrollSection from '@/components/scroll/ScrollSection'
import AnimatedText from '@/components/scroll/AnimatedText'
import PageTurnAnimation from '@/components/scroll/PageTurnAnimation';
import Storytelling from '@/components/scroll/Storytelling';
import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';

export default function ServicesPage() {
  return (
    
    <div className="bg-black">
     <div className='w-full h-[800px]'>
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
  )
}