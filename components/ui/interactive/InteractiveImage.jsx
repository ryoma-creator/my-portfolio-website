// components/ui/interactive/InteractiveImage.jsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function InteractiveImage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368943/law_wputac.jpg',
    'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416132/accenture_yvo1ec.jpg',
    'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368948/IPC_gtotjt.webp'
  ];

  return (
    <div className="relative w-full aspect-video">
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full object-cover rounded-lg cursor-pointer"
        onClick={() => setCurrentIndex((prev) => 
          prev === images.length - 1 ? 0 : prev + 1
        )}
      />
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all
              ${currentIndex === index ? 'bg-white w-4' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}