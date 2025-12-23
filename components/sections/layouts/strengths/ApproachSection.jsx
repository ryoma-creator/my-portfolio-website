'use client'

import { motion } from 'framer-motion';

export default function ApproachSection({ sectionTitle, approaches }) {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-light mb-20 text-gray-900">{sectionTitle}</h2>
        
        {/* 上段2つ */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4">
          {approaches.slice(0, 2).map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group w-full max-w-[500px] mx-auto sm:mx-0"
            >
              <div className="aspect-[16/9] mb-8 overflow-hidden rounded-lg">
                <img 
                  src={approach.image} 
                  alt={approach.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-light mb-2 text-text-primary">
                  {approach.title}
                </h3>
                <p className="text-lg text-gray-500 mb-4">
                  {approach.subtitle}
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  {approach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 下段3つ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4 max-w-[1400px] mx-auto">
          {approaches.slice(2, 5).map((approach, index) => (
            <motion.div
              key={index + 2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
              className="group w-full max-w-[400px] mx-auto sm:mx-0"
            >
              <div className="aspect-[16/9] mb-8 overflow-hidden rounded-lg">
                <img 
                  src={approach.image} 
                  alt={approach.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-light mb-2 text-gray-900">
                  {approach.title}
                </h3>
                <p className="text-lg text-gray-500 mb-4">
                  {approach.subtitle}
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  {approach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}