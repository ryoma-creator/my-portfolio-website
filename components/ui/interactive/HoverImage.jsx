// components/ui/interactive/HoverImage.jsx
'use client'
import { motion } from 'framer-motion';

export default function HoverImage({ 
  image, 
  title, 
  description,
  index // アニメーションの方向を決めるために使用
}) {
  const directions = [
    { x: 20, y: 0 },   // 右
    { x: -20, y: 0 },  // 左
    { x: 0, y: 20 },   // 下
    { x: 0, y: -20 }   // 上
  ];

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* メイン画像 */}
      <motion.img
        src={image}
        alt={title}
        className="w-full aspect-video object-cover"
        whileHover={{ 
          scale: 1.1,
          ...directions[index % 4] // 方向に基づいて移動
        }}
        transition={{ duration: 0.5 }}
      />

      {/* ホバー時に表示されるオーバーレイ */}
      <motion.div
        className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
      >
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80">{description}</p>
      </motion.div>
    </motion.div>
  );
}