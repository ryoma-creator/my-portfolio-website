// components/sections/common/PageHeader/index.jsx
'use client'

import { motion } from 'framer-motion';

const PageHeader = ({ topText, title, subtitle, backgroundImage }) => {  // backgroundImageを追加
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* 背景画像 */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,  // ここで使用
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* テキストコンテンツ */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4 container mx-auto">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-wider text-white/80 mb-6"
        >
          {topText}
        </motion.p>

        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-7xl font-light mb-8 text-center"
        >
          {title}
        </motion.h1>

        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-white/80 text-center max-w-3xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
};

export default PageHeader;