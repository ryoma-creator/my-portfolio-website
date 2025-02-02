'use client'

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Parallax } from 'react-parallax';
import Link from 'next/link'; 
import { Button } from '@/components/ui/button';
import { SectionContainer, SectionTitle, SectionSubtitle }  from '../layouts/common/section';
import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';

export default function FeaturedSections() {
  const sections = [
    {
      category: "1 YEAR OF DEDICATION",  // 1年間の取り組みを強調
      title: "Portfolio Journey",
      points: [
        "From zero to 5 major iterations",  // 進化の過程を明確に
        "Growth through continuous improvement"
      ],
      action: "See Evolution",
      path: "/features/evolution",
      image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416651/2150061957_bg4e9i.jpg"
    },
    {
      category: "SELF-TAUGHT DEVELOPER 2024",  // 独学の期間を明示
      title: "Learning & Growth Journey", 
      points: [
        "Systematic learning from scratch",  // ゼロからの学習を強調
        "Optimized learning methods"
      ],
      action: "Explore Journey",
      path: "/features/learning-journey",
      image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368943/law_wputac.jpg"
    }
  ];

 
  // index % 2 === 0は偶数番目のセクションかどうかをチェックします
  // 偶数の場合: テキストが左、画像が右
  return (
    <SectionContainer>
      {sections.map((section, index) => (
        <div key={index} className="mb-32">
          <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center`}>
            {/* テキストセクション */}
            <div className="w-full lg:w-1/2 flex flex-col items-center text-center space-y-4">
              {/* セクションのヘッダー部分 */}
              <div className="space-y-4">
                <SectionSubtitle>{section.category}</SectionSubtitle>
                <SectionTitle>{section.title}</SectionTitle>
              </div>
              
              {/* ポイントリスト */}
              <ul className=" max-w-sm">
                {section.points.map((point, i) => (
                  <li key={i}>
                    <GsapAnimatedText 
                      text={point}
                      variant="blurIn"
                      duration={0.8}
                      delay={0.2 * i}
                      scrollTrigger={{
                        once: true,
                        start: "top 80%"
                      }}
                      className="text-h3 text-text-tertiary"
                    />
                  </li>
                ))}
              </ul>

              {/* アクションボタン */}
              <Link href={section.path}>
                <Button
                  variant='outline'
                  className='relative group overflow-hidden rounded-full'
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue  
                    animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative text-text-primary group-hover:text-white flex items-center gap-2">
                    {section.action}
                    <svg 
                      className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </span>
                </Button>
              </Link>
            </div>

            {/* イメージセクション */}
            <div className="w-full lg:w-1/2">
              <Parallax
                bgImage={section.image}
                strength={200}
                className="aspect-square overflow-hidden rounded-lg max-w-[500px] mx-auto"
              >
                <div style={{ height: '500px' }}>
                  <div className="w-full h-full transition-transform duration-700 hover:scale-105" />
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      ))}
    </SectionContainer>
  );
}