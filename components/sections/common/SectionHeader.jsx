'use client'

import GsapAnimatedElement from '@/components/scroll/GsapAnimatedElement';
import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';

export default function SectionHeader({ 
  backgroundText,  // 背景の大きなテキスト
  topText,        // 上部のテキスト
  bottomText,     // 下部のグラデーションテキスト
  className      // 追加のクラス名（オプション）
}) {
  return (
    <>
      {/* 巨大な背景テキスト */}
      <GsapAnimatedElement variant="blurIn" duration={2} delay={0.2}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <div 
            className="text-[20vw] font-extrabold text-white/10 text-outline opacity-10"
            style={{
              textStroke: '3px rgba(255, 255, 255, 0.2)',
              WebkitTextStroke: '3px rgba(255, 255, 255, 0.2)'
            }}
          >
            {backgroundText}
          </div>
        </div>
      </GsapAnimatedElement>

      <div className={`container mx-auto px-4 ${className || ''}`}>
        {/* タイトルセクション */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-6">
            <GsapAnimatedText 
              text={topText}
              variant="perspectiveTilt" 
              duration={1.5}
              scrollTrigger={true}
              className="text-5xl md:text-7xl font-bold text-white"
            />
            <GsapAnimatedText 
              text={bottomText}
              variant="perspectiveTilt" 
              duration={1.5}
              scrollTrigger={true}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-pink-500"
            />
          </div>
        </div>
      </div>
    </>
  );
}