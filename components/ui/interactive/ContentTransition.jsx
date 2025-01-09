// components/ui/interactive/ContentTransition.jsx
'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ContentTransition({ 
  image, 
  title, 
  description,
  subImage, // 追加：右から出てくる小さな画像
  isDark = false // 追加：ダークモード判定
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative aspect-video rounded-xl overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* メイン画像 */}
      <motion.div
        animate={{
          scale: isHovered ? 0.8 : 1,
          x: isHovered ? '10%' : 0,
          y: isHovered ? '20%' : 0,
        }}
        transition={{ duration: 0.5 }}
        className="w-full h-full"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* テキストとサブ画像のコンテナ */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="absolute inset-0 flex items-start p-10"
          >
            {/* テキストエリア */}
            <div className="flex-1">
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}
              >
                {title}
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className={`text-lg leading-relaxed ${isDark ? 'text-white/80' : 'text-black/80'}`}
              >
                {description}
              </motion.p>
            </div>

            {/* サブ画像 */}
            {subImage && (
              <motion.img
                src={subImage}
                alt="Additional info"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-32 h-32 object-contain"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}