'use client'

import { motion } from 'framer-motion';

export default function BackgroundSection() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        {/* 上部の大きなタイトルと説明文 */}
        <div className="max-w-4xl mx-auto mb-32 text-center">
            {/* Upper main content */}
            <h2 className="text-4xl font-light mb-8">
            How Analytical Thinking Transforms Complex Challenges into Measurable Success
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
            Through intensive training in Japan's top-tier legal philosophy program, I developed a unique approach to problem-solving that combines rigorous data analysis with strategic thinking. This methodology has consistently produced remarkable results across various fields, from achieving "impossible" educational goals to optimizing business processes. My approach is founded on two years of intensive study, involving 10+ hours daily of analytical training, resulting in a systematic method that transforms complex challenges into measurable outcomes.
            </p>
        </div>

        {/* 2カラムレイアウト - より大きな画像と簡潔なテキスト */}
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* 左側テキストエリア */}
          <div className="w-full lg:w-1/3 lg:self-center">
            <div className="max-w-[400px]">
                {/* Left column text */}
                <h3 className="text-2xl font-light mb-4">
                Foundation in Legal Philosophy
                </h3>
                <p className="text-base text-white/80 leading-relaxed mb-6">
                This intensive legal philosophy training taught me to never accept assumptions without evidence. Every decision must be backed by data, every solution grounded in logical reasoning. This foundation now drives innovation across all my professional endeavors.
                </p>
              <button className="px-4 py-2 border border-white/20 rounded-full text-sm hover:bg-white/10 transition-colors">
                Read more
              </button>
            </div>
          </div>

          {/* 右側画像エリア - より大きなサイズに */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="aspect-[16/9] relative rounded-lg overflow-hidden"
            >
              <img
                src="https://res.cloudinary.com/da3abynbu/image/upload/v1736499137/samples/coffee.jpg"
                alt="Analytical Thinking Process"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Impact Areasへの自然な導入 */}
        <div className="max-w-2xl mx-auto mt-32 text-center">
          <p className="text-xl text-white/60 italic">
            See how this analytical foundation transforms into practical impact across different areas
          </p>
        </div>
      </div>
    </div>
  );
}