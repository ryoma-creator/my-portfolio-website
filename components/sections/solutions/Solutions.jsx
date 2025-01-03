'use client'

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';
import GsapAnimatedElement from '@/components/scroll/GsapAnimatedElement';

const solutions = [
  {
    title: "Systematic Thinking",
    description: "Transform complex challenges into structured solutions through data-driven analysis.",
    bgImage: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368943/law_wputac.jpg",
    bgColor: "bg-green-50",
    textColor: "text-[#2B4A32]"
  },
  {
    title: "Problem Solver",
    description: "Optimize processes and resolve technical challenges efficiently.",
    bgImage: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416132/accenture_yvo1ec.jpg",
    bgColor: "bg-purple-50",
    textColor: "text-[#450E3A]"
  },
  {
    title: "Global Bridge",
    description: "Connect diverse teams and enhance cross-cultural collaboration.",
    bgImage: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368948/IPC_gtotjt.webp",
    bgColor: "bg-blue-50",
    textColor: "text-[#1B214B]"
  },
  {
    title: "Technical Expert",
    description: "Build modern web applications with focus on user experience.",
    bgImage: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416651/2150061957_bg4e9i.jpg",
    bgColor: "bg-indigo-50",
    textColor: "text-[#2B1C4F]"
  }
];

export default function Solutions() {
  const cardsRef = useRef([]);

  useEffect(() => {
    // カードのアニメーション
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: -50,
          scale: 0.8
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          delay: 0.2 + index * 0.3,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div className="min-h-[80vh] py-12">

      {/* 巨大な背景テキスト */}
      <GsapAnimatedElement variant="blurIn" duration={2} delay={0.2}>
        <div className="aabsolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <div 
            className="text-[20vw] font-extrabold text-white/10 text-outline opacity-10"
            style={{
              textStroke: '3px rgba(255, 255, 255, 0.2)',
              WebkitTextStroke: '3px rgba(255, 255, 255, 0.2)'
            }}
          >
            SOLUTION
          </div>
        </div>
      </GsapAnimatedElement>

      <div className="px-4 container  mx-auto max-w-[1400px]">
        {/* タイトルセクション */}
        <div className="min-h-[300px] grid place-items-center bg-transparent py-24">
          <GsapAnimatedText
            text="Solutions for global tech challenges"
            variant="elastic"
            duration={1}
            scrollTrigger={true}
            className="h1 font-bold mb-6"
          />
          <GsapAnimatedText
            text="4 key strengths to solve complex problems in modern development teams"
            variant="elastic"
            duration={1}
            delay={0.5}
            scrollTrigger={true}
            className="text-responsive-md text-gray-600"
          />
        </div>

        {/* カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`rounded-3xl overflow-hidden ${solution.bgColor} flex flex-col transform transition-transform hover:scale-105`}
            >
              <div className="relative">
                <img
                  src={solution.bgImage}
                  alt={solution.title}
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="p-8 text-center">
                <GsapAnimatedText
                  text={solution.title}
                  variant="elastic"
                  duration={0.8}
                  delay={0.3 * index}
                  scrollTrigger={true}
                  className={`text-responsive-md font-bold mb-3 ${solution.textColor}`}
                />
                <GsapAnimatedText
                  text={solution.description}
                  variant="fadeIn"
                  duration={0.8}
                  delay={0.4 + 0.3 * index}
                  scrollTrigger={true}
                  className={`${solution.textColor}/80 text-responsive-sm`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}