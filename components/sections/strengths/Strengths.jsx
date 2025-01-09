// components/sections/Strengths.jsx
'use client'

import GsapAnimatedElement from '@/components/scroll/GsapAnimatedElement';
import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';

export default function Strengths() {
  const strengths = [
    {
      title: "Development",
      description: "Modern web development expertise",
      image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368948/IPC_gtotjt.webp",
    },
    {
      title: "Analytics",
      description: "Logical thinking & data-driven solutions",
      image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368943/law_wputac.jpg",
    },
    {
      title: "Bilingual",
      description: "Native Japanese + Business English",
      image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416132/accenture_yvo1ec.jpg",
    },
    {
      title: "Growth",
      description: "Continuous learning & adaptation",
      image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368948/IPC_gtotjt.webp",
    }
  ];

  return (
    <section className='min-h-[80vh] py-12 relative'>
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
            STRENGTHS
          </div>
        </div>
      </GsapAnimatedElement>

      <div className="container mx-auto px-4">
        {/* タイトルセクション */}
  {/* タイトルセクション */}
  <div className="text-center mb-16">
    <div className="flex flex-col items-center gap-6">
      <GsapAnimatedText 
        text="Core"
        variant="perspectiveTilt" 
        duration={1.5}
        scrollTrigger={true}
        className="text-5xl md:text-7xl font-bold text-white"
      />
      <GsapAnimatedText 
        text="Strengths"
        variant="perspectiveTilt" 
        duration={1.5}
        scrollTrigger={true}
        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-pink-500"
      />
    </div>
  </div>
      {/* メインコンテンツ */}
  {/* メインコンテンツ - サイドの余白を増やし、最大幅を調整 */}
  <div className="container mx-auto px-16 max-w-[1600px]"> {/* px-4から px-16 に変更 */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-24"> {/* gap-4から gap-8 に変更 */}
      {strengths.map((strength, index) => (
        <div 
          key={index}
          className="group relative aspect-square overflow-hidden rounded-lg hover:z-10"
        >
          <img 
            src={strength.image} 
            alt={strength.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
{/* オーバーレイとテキストコンテナ */}
<div className="absolute inset-0 bg-black/50 flex flex-col justify-end">
  {/* テキストコンテナ - 下部に配置 */}
  <div className="absolute bottom-0 left-0 right-0 pb-6"> {/* 下部固定 */}
    {/* タイトル */}
    <h3 className="text-2xl font-bold text-white text-center mb-2">
      {strength.title}
    </h3>
    
    {/* 説明文 - 下から現れる */}
    <div className="overflow-hidden">
      <p className="text-white/80 text-base px-6 text-center
        transform translate-y-full
        transition-all duration-300 ease-in-out
        group-hover:translate-y-0">
        {strength.description}
      </p>
    </div>
  </div>
</div>
        </div>
      ))}
    </div>
  </div>

  </div>
    </section>
  );
}