'use client'

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { SectionContainer, SectionGroup } from '../layouts/common/section';
import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';

export default function Strengths() {
  const strengths = [
    {
      title: "Development",
      description: "Modern web development expertise",
      image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416651/2150061957_bg4e9i.jpg",
      link: "/strengths/development",
    },
    {
      title: "Analytics",
      description: "Logical thinking & data-driven solutions",
      image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1736659341/girl-with-long-hair-drinks-coffee-table-cafe-makes-some-notes_grzbom.jpg",
      link: "/strengths/analytics",
    },
    {
      title: "Bilingual",
      description: "Native Japanese + Business English",
      image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1736659483/young-people-using-african-american-sustainable-mobility_vsuvv4.jpg",
      link: "/strengths/bilingual",
    },
    {
      title: "Mindset",
      description: "Continuous learning & adaptation",
      image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1736659597/people-library-reading-learning-from-books-lg_bcpos3.jpg",
      link: "/strengths/growth",
      // https://res.cloudinary.com/dnm2fyhwt/video/upload/v1738646732/journey_map_wpiz2z.mp4
    }
  ];

  return (
    <SectionContainer>
      <SectionGroup
        subtitle="EXPLORE MY EXPERTISE"
        title="Choose your area of interest"
      >
        <div className="container mx-auto px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[45px]">
            {strengths.map((strength, index) => (
              <Link href={strength.link} key={index}>

          <div className="group relative w-[246.25px] h-[246.25px] aspect-square overflow-hidden rounded-lg">
            {/* 画像とフィルター効果 */}
            <div className="relative w-full h-full">
              <img
                src={strength.image}
                alt={strength.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out
                  group-hover:scale-130"
              />
              
              {/* サイトのカラースキームに合わせたフィルター */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#CCF8FF]/20 via-[#EF96C5]/20 to-[#CCF8FF]/20 
                mix-blend-overlay" />
              
              {/* ビネット効果 - 外周から中心へのグラデーション */}
              <div className="absolute inset-0" 
                style={{
                  background: `radial-gradient(
                    circle at center,
                    rgba(0, 0, 0, 0.2) 0%,            
                    rgba(0, 0, 0, 0.4) 40%,            
                    rgba(0, 0, 0, 0.8) 100%            
                  )`
                }}
              />
            </div>

            {/* タイトルのみのテキストコンテナ */}
            <div className="absolute inset-0"> 
              <div className="relative h-full">
                {/* タイトル - translate効果を削除 */}
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <h3 className="text-2xl font-light text-white">
                    {strength.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

              </Link>
            ))}
          </div>
        </div>
      </SectionGroup>
    </SectionContainer>
  );
}