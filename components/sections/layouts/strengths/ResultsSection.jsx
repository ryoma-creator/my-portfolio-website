'use client'

import React from 'react';
import { motion } from 'framer-motion';
import ContactCTA from '../common/ContactCTA';

export default function ResultsSection() {
  const results = [
    {
      category: "ANALYTICAL FOUNDATION",
      title: "From Legal Philosophy to Code",
      description: "2年間の法哲学研修で培った分析力は、複雑なUIの設計やユーザビリティの向上に直接活かせます。データに基づく意思決定と論理的な問題解決は、モダンな開発に不可欠なスキルです。",
      image: "https://res.cloudinary.com/da3abynbu/image/upload/v1736499137/samples/coffee.jpg"
    },
    {
      category: "PROVEN TRACK RECORD",
      title: "Educational Success Stories",
      description: "教育現場での具体的な成果（3ヶ月の標準トレーニング期間を1ヶ月に短縮、生徒の成績を1ヶ月で2倍に向上）は、効率的な学習方法と体系的なアプローチの証です。この経験は、開発プロジェクトの効率化やチーム教育に応用できます。",
      image: "https://res.cloudinary.com/da3abynbu/image/upload/v1736499137/samples/cup-on-a-table.jpg"
    },
    {
      category: "FUTURE VISION",
      title: "Development Philosophy",
      description: "法哲学で培った「なぜ？」を追求する姿勢と、教育での実践経験を組み合わせることで、ユーザー中心の開発を実現します。トレンドの分析と論理的な実装により、持続可能な価値を生み出すことを目指します。",
      image: "https://res.cloudinary.com/da3abynbu/image/upload/v1736499138/cld-sample-4.jpg"
    }
  ];

  const featuredItems = [
    {
      title: "Systematic Development",
      subtitle: "論理的アプローチによる開発手法",
      image: "https://res.cloudinary.com/da3abynbu/image/upload/v1736499137/samples/coffee.jpg"
    },
    {
      title: "Problem Solving",
      subtitle: "データ駆動型の問題解決",
      image: "https://res.cloudinary.com/da3abynbu/image/upload/v1736499137/samples/cup-on-a-table.jpg"
    },
    {
      title: "Growth Enhancement",
      subtitle: "チーム全体の成長促進",
      image: "https://res.cloudinary.com/da3abynbu/image/upload/v1736499138/cld-sample-4.jpg"
    },
    {
      title: "Process Optimization",
      subtitle: "効率的な開発プロセス",
      image: "https://res.cloudinary.com/da3abynbu/image/upload/v1736499137/cld-sample.jpg"
    },
    {
      title: "Innovation Focus",
      subtitle: "革新的なソリューション",
      image: "https://res.cloudinary.com/da3abynbu/image/upload/v1736499135/samples/smile.jpg"
    }
  ];

  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-24">
          <h2 className="text-sm uppercase tracking-wider text-white/60 mb-4">
            ANALYTICAL STRENGTH
          </h2>
          <p className="text-2xl font-light">
            Where Legal Philosophy Meets Modern Development
          </p>
        </div>

        {/* Main Results */}
        <div className="max-w-6xl mx-auto">
          {results.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-32 last:mb-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={`aspect-[4/3] overflow-hidden rounded-lg ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <span className="text-sm uppercase tracking-wider text-white/60 mb-4 block">
                    {item.category}
                  </span>
                  <h3 className="text-3xl font-light mb-6">
                    {item.title}
                  </h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Items (Trapezoid Layout) */}
        <div className="my-32">
          {/* Top Row - 2 items */}
          <div className="flex justify-center gap-8 mb-16">
            {featuredItems.slice(0, 2).map((item, index) => (
              <motion.div
                key={`top-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group w-full max-w-[500px]"
              >
                <div className="aspect-[3/4] mb-8 overflow-hidden rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-2">{item.title}</h3>
                  <p className="text-lg text-white/60">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row - 3 items */}
          <div className="flex justify-center gap-8">
            {featuredItems.slice(2).map((item, index) => (
              <motion.div
                key={`bottom-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                className="group w-full max-w-[400px]"
              >
                <div className="aspect-[3/4] mb-8 overflow-hidden rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-2">{item.title}</h3>
                  <p className="text-lg text-white/60">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <ContactCTA 
          description="論理的思考と分析力を活かし、より良いユーザー体験を一緒に作り上げましょう。"
        />
      </div>
    </div>
  );
}