'use client'

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Parallax } from 'react-parallax';
import Link from 'next/link'; 
import { Button } from '@/components/ui/button';
import { SectionContainer, SectionGroup,SectionTitle, SectionSubtitle, SectionSentence, SectionButton}  from '../layouts/common/section';
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
    <SectionContainer className="px-16"> {/* コンテナにパディングを追加 */}
    {sections.map((section, index) => (
      <div key={index} className="mb-32">
        <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center`}>
          <div className="w-full lg:w-1/2"> {/* 幅の制御を追加 */}
            <SectionGroup
              subtitle={section.category}
              title={section.title}
              align="center"
              className="px-16" 
            >
            <div className="space-y-2 text-center w-full"> {/* gap-8ではなく、space-y-2で適度な間隔に */}
              {section.points.map((point, i) => (
                <SectionSentence 
                  key={i}
                  className="block" 
                >
                  {point}
                </SectionSentence>
              ))}
            </div>
               <SectionButton
                href={section.path}
                variant="outline"
              >
                {section.action}
              </SectionButton>
            </SectionGroup>
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