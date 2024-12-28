// components/sections/problems/Problems.tsx
'use client'

import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';
import { useEffect, useState } from 'react';

const challenges = [
    {
        title: "Communication",
        description: "Cultural differences create barriers in development teams"
      },
      {
        title: "Integration",
        description: "Inconsistent practices across global teams"
      },
      {
        title: "Collaboration",
        description: "Time zones and work culture differences"
      }
];

export default function Problems() {
    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(() => {
      // 一度表示されたら維持されるように修正
      const handleScroll = () => {
        const section = document.getElementById('problems-section');
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            challenges.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => 
                  prev.includes(index) ? prev : [...prev, index]
                );
              }, index * 800);
            });
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        // containerクラスを追加して中央揃え
        <section className='min-h-[80vh] py-12'>
          <div className="container mx-auto px-4 max-w-[1400px]"> {/* コンテナ追加 */}
            {/* Main Challenge - 中央揃えの修正 */}
            <section className='min-h-[300px] grid place-items-center bg-transparent py-24'>
        <GsapAnimatedText 
          text="Facing Global Development Barriers?"
          variant="blurIn" 
          duration={1.5} 
          scrollTrigger={true}
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
        />
        <GsapAnimatedText 
          text="Technical excellence alone isn't enough when teams span cultures and continents"
          variant="blurIn" 
          duration={1.5}
          delay={0.2}
          scrollTrigger={true}
          className="text-xl md:text-2xl text-white/80 max-w-3xl text-center px-4"
        />
      </section>
    
            {/* Challenge Cards - サイズ最適化 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12 w-[90%] max-w-[1200px] mx-auto">
              {challenges.map((challenge, index) => (
                <div key={index} className="...">
                  <div className="bg-gray-800/50 p-8 xl:p-12 rounded-xl 
                                min-h-[300px] xl:min-h-[350px] flex flex-col">
                    <GsapAnimatedText 
                      text={challenge.title}
                      variant="blurIn"
                      duration={1.5}
                      delay={index * 0.3}
                      scrollTrigger={true}
                      className="text-2xl xl:text-3xl font-bold mb-4"
                    />
                    <GsapAnimatedText 
                      text={challenge.description}
                      variant="blurIn"
                      duration={1.5}
                      delay={index * 0.3 + 0.2}
                      scrollTrigger={true}
                      className="text-lg xl:text-xl text-gray-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }
    