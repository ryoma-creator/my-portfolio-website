"use client";

import { useState } from 'react';
import { motion } from "framer-motion";

const AnimatedAbout = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // プログレスステップの定義
  const steps = [
    { id: 'start', label: 'Start' },
    ...Array.from({ length: 6 }, (_, i) => ({
      id: `chapter-${i + 1}`,
      label: `Chapter ${i + 1}`
    })),
    { id: 'goal', label: 'Goal' }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex items-center justify-between relative">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center relative z-10">
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white
                  ${index <= activeIndex ? 'bg-emerald-500' : 'bg-gray-300/20'}`}
              >
                {index === 0 ? (
                  '▶'
                ) : index === steps.length - 1 ? (
                  '★'
                ) : (
                  index
                )}
              </div>
              <span className="text-sm mt-2 text-center text-white/80">
                {step.label}
              </span>
            </div>
          ))}
          
          {/* Background Line */}
          <div className="absolute top-6 left-0 h-[2px] bg-gray-300/20 w-full -z-10" />
          
          {/* Progress Line */}
          <motion.div 
            className="absolute top-6 left-0 h-[2px] bg-emerald-500 -z-10"
            initial={{ width: '0%' }}
            animate={{ width: `${(activeIndex / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Navigation Buttons - テスト用 */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => activeIndex > 0 && setActiveIndex(activeIndex - 1)}
          className="px-4 py-2 bg-emerald-500 rounded"
          disabled={activeIndex === 0}　xx
        >
          Previous
        </button>
        <button
          onClick={() => activeIndex < steps.length - 1 && setActiveIndex(activeIndex + 1)}
          className="px-4 py-2 bg-emerald-500 rounded"
          disabled={activeIndex === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AnimatedAbout;