'use client'

import GsapAnimatedElement from '@/components/scroll/GsapAnimatedElement';
import { SectionContainer, SectionTitle, SectionSubtitle } from '../section';
import Link from 'next/link';

const Concept = () => {
  return (
    <SectionContainer>
      {/* ブランド名 */}
      <SectionSubtitle>RYOMA TAGUCHI</SectionSubtitle>

      {/* メインタイトル */}
      <SectionTitle>Creating Digital Solutions Since 2024</SectionTitle>

      {/* CTAボタン - これはElementのままでOK */}
      <GsapAnimatedElement 
        variant="blurIn"
        duration={1.2}
        delay={0.2}
        scrollTrigger={{
          once: true,
          start: "top 80%"
        }}
      >
        <div className="flex justify-center">
          <Link 
            href="/concept"
            className="inline-flex items-center justify-center px-8 py-3 border border-text-primary rounded-full hover:bg-text-primary hover:text-white transition-colors duration-300"
          >
            My Story
          </Link>
        </div>
      </GsapAnimatedElement>
    </SectionContainer>
  );
};

export default Concept;