'use client'

import { motion } from 'framer-motion';

export default function ImageLeftContent({ 
  image,
  category,
  title,
  description
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-32 last:mb-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/3] overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <span className="text-sm uppercase tracking-wider text-white/60 mb-4 block">
            {category}
          </span>
          <h3 className="text-3xl font-light mb-6">
            {title}
          </h3>
          <p className="text-lg text-white/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// 使用例：
/*
// 例：ヘッドフォン商品紹介
<ImageLeftContent
  image="/images/headphone-copper.jpg"
  category="Premium Headphones"
  title="BEOPLAY H100"
  description="Ultimate over-ear headphones with exceptional sound quality and comfort."
/>

<ImageRightContent
  image="/images/headphone-black.jpg"
  category="Wireless Headphones"
  title="BEOPLAY H95"
  description="Premium over-ear headphones with outstanding noise cancellation."
/>
*/