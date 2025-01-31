'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';


const SkillSplitView = ({ title, description, categories, imageSrc, imageAlt }) => {
  const [openSkill, setOpenSkill] = useState(null);

  return (
    <div className="min-h-[80vh] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="text-4xl font-light mb-8 text-text-primary">
            {title}
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
          {/* 左側：画像 */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/3] rounded-lg overflow-hidden"
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* 右側：スキルリスト */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              {categories.map((category, index) => (
                <div key={index} className="border-b border-text-secondary/20">
                  <button
                    onClick={() => setOpenSkill(openSkill === index ? null : index)}
                    className="w-full py-6 flex items-center justify-between text-text-primary hover:text-brand-pink transition-colors"
                  >
                    <span className="text-xl font-light">{category.name}</span>
                    <Plus
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        openSkill === index ? 'rotate-45' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openSkill === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 space-y-4">
                          {category.items.map((item, i) => (
                            <div key={i} className="text-text-secondary">
                              • {item}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSplitView;