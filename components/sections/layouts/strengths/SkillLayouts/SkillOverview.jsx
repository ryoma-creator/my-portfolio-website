'use client'

import { motion } from 'framer-motion';

const SkillOverview = ({ title, description, categories, imageSrc, imageAlt }) => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* 左側：画像 */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="aspect-square rounded-sm overflow-hidden bg-[#f5f5f5]">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* 右側：スキル一覧 */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h3 className="text-sm font-normal tracking-wider text-text-secondary uppercase mb-8">
                TECHNICAL PROFICIENCY
              </h3>
              
              <div className="space-y-4">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-sm text-text-secondary">•</span>
                    <span className="text-sm text-text-secondary">{category.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillOverview;