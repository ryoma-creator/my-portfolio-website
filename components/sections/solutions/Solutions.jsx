'use client'

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';
import GsapAnimatedElement from '@/components/scroll/GsapAnimatedElement';

import { ArrowRight } from 'lucide-react';

import InteractiveImage from '@/components/ui/interactive/InteractiveImage'

// components/sections/solutions/Solutions.jsx
import HoverImage from '@/components/ui/interactive/HoverImage';


import ContentTransition from '@/components/ui/interactive/ContentTransition';

import { motion, useScroll, useTransform } from 'framer-motion';



const solutionItems = [
  {
    title: "Global Experience",
    description: "International project management and cross-cultural communication",
    image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368943/law_wputac.jpg"
  },
  {
    title: "Problem Solving",
    description: "Analytical thinking through legal education",
    image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416132/accenture_yvo1ec.jpg"
  },
  {
    title: "Fast Learning",
    description: "10-month journey to frontend mastery",
    image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368948/IPC_gtotjt.webp"
  },
  // 必要に応じて追加
];

const items = [
  {
    title: "Global Experience",
    description: "外資系企業でのプロジェクトリーダー経験と多国籍チームでのプロセス統合。デンマークでの留学経験を活かし、異文化間のコミュニケーションを円滑に進めることができます。",
    image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416132/accenture_yvo1ec.jpg",
    subImage: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368943/law_wputac.jpg", // 小さく表示される補足画像
    isDark: true
  },
  {
    title: "Logical Thinking",
    description: "法学部での論理的思考力とデータ分析による問題解決能力。教育現場での学習データ分析と困難なプロジェクトでの解決実績があります。",
    image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368943/law_wputac.jpg",
    subImage: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416132/accenture_yvo1ec.jpg",
    isDark: true
  },
  {
    title: "Fast Learning",
    description: "10ヶ月間での集中的な技術習得を達成。ReactとNext.jsによる5つのポートフォリオ開発を完遂し、継続的な学習と実践を重ねています。",
    image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368948/IPC_gtotjt.webp",
    subImage: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416651/2150061957_bg4e9i.jpg",
    isDark: true
  }
];



const strengths = [
  {
    title: "Global Experience",
    image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416132/accenture_yvo1ec.jpg",
    description: "外資系企業でのプロジェクトリーダー経験と異文化コミュニケーション",
    details: "多国籍チームでの業務プロセス統合を成功に導いた実績があります",
  },
  {
    title: "Logical Thinking",
    image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368943/law_wputac.jpg",
    description: "法学部での論理的思考力とデータ分析による問題解決",
    details: "教育現場での学習データ分析と困難なプロジェクトの解決実績",
  },
  {
    title: "Fast Learning",
    image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368948/IPC_gtotjt.webp",
    description: "10ヶ月間での集中的な技術習得",
    details: "ReactとNext.jsによる5つのポートフォリオ開発を完遂",
  }
];

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

const sections = [
  {
    title: "Analytical Thinking",
    description: "法学での論理的思考とデータ分析経験",
    video: "https://example.com/video1.mp4",
    points: [
      "データ駆動の意思決定",
      "構造化された問題解決",
      "複雑な課題の分析"
    ]
  },
  {
    title: "Global Perspective",
    description: "多文化環境での実務経験",
    video: "https://example.com/video2.mp4",
    points: [
      "異文化コミュニケーション",
      "チーム最適化の実績",
      "プロジェクト効率化"
    ]
  },
  {
    title: "Technical Journey",
    description: "10ヶ月での技術習得",
    video: "https://example.com/video3.mp4",
    points: [
      "5つのプロジェクト完遂",
      "モダンな開発スキル",
      "継続的な学習"
    ]
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


// 2. 蛍光ペン効果
<span className="relative">
  重要なテキスト
  <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-300 opacity-50 -z-10"></span>
</span>


<div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 左側: インタラクティブ画像 */}
          <div>
            <InteractiveImage />
          </div>
          
          {/* 右側: テキストコンテンツ */}
          <div>
            <h2 className="text-4xl font-bold">
              I'm an 
              <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                expert
              </span>
            </h2>
            {/* その他のコンテンツ */}
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4">
        {/* タイトルセクション */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text inline-block">
            Core Strengths
          </h2>
          <p className="text-xl text-gray-400 mt-4">
            Technical expertise backed by global experience
          </p>
        </div>

        {/* 強みのグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <ContentTransition
              key={index}
              {...strength}
            />
          ))}
        </div>
      </div>


      <div className="grid grid-cols-1 gap-8">
    {items.map((item, index) => (
      <ContentTransition key={index} {...item} />
    ))}
  </div>


<section className="py-24">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24"
        >
          {/* 左側：動画/ビジュアル */}
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={section.video} type="video/mp4" />
            </video>
            
            {/* オーバーレイ */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </div>

          {/* 右側：コンテンツ */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">{section.title}</h2>
            <p className="text-xl text-gray-400">{section.description}</p>
            
            <ul className="space-y-4">
              {section.points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-center gap-4 text-lg"
                >
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      ))}
    </section>




<section className="relative py-24">
  <div className="container">
    {solutions.map((solution, index) => (
      <div 
        key={index} 
        className="flex flex-col md:flex-row items-center gap-12 min-h-[80vh] snap-center"
      >
        {/* 左側：画像/動画エリア */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <img 
              src={solution.bgImage} 
              alt={solution.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* 右側：テキストエリア */}
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-4xl font-bold">{solution.title}</h3>
          <p className="text-xl text-gray-400 leading-relaxed">
            {solution.description}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-accent">Learn more</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


<div className="container mx-auto px-4">
        {/* タイトルセクション */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text inline-block">
            Core Strengths
          </h2>
          <p className="text-xl text-gray-400 mt-4">
            Technical expertise backed by global experience
          </p>
        </div>

        {/* コンテンツエリア */}
        <div className="space-y-12">
          {items.map((item, index) => (
            <ContentTransition
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>



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