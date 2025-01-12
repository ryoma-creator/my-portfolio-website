'use client'

import { motion } from 'framer-motion';

export default function BackgroundSection({
  mainTitle,
  mainDescription,
  columnTitle,
  columnDescription,
  imageSrc,
  imageAlt,
  impactText
}) {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        {/* 上部の大きなタイトルと説明文 */}
        <div className="max-w-4xl mx-auto mb-32 text-center">
          <h2 className="text-4xl font-light mb-8">
            {mainTitle}
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            {mainDescription}
          </p>
        </div>

        {/* 2カラムレイアウト */}
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* 左側テキストエリア */}
          <div className="w-full lg:w-1/3 lg:self-center">
            <div className="max-w-[400px]">
              <h3 className="text-2xl font-light mb-4">
                {columnTitle}
              </h3>
              <p className="text-base text-white/80 leading-relaxed mb-6">
                {columnDescription}
              </p>
              <button className="px-4 py-2 border border-white/20 rounded-full text-sm hover:bg-white/10 transition-colors">
                Read more
              </button>
            </div>
          </div>

          {/* 右側画像エリア */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="aspect-[16/9] relative rounded-lg overflow-hidden"
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Impact Areas への導入 */}
        <div className="max-w-2xl mx-auto mt-32 text-center">
          <p className="text-xl text-white/60 italic">
            {impactText}
          </p>
        </div>
      </div>
    </div>
  );
}