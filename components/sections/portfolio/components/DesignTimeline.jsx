'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 個別のタイムラインエントリーコンポーネント
const TimelineEntry = ({ date, title, content, isLatest = false }) => (
  <div className="mb-12">
    <span className={`text-sm ${isLatest ? 'text-brand-pink' : 'text-text-tertiary'} inline-block`}>
      {date}
    </span>
    <div className="mt-4 p-6
      bg-white/10 dark:bg-white/5    // 薄い白の背景
      backdrop-blur-sm                // ぼかし効果
      border border-white/10         // 薄い境界線
      rounded-[32px]
      rounded-tr-[8px]
      rounded-bl-[8px]
      transform hover:scale-[1.02] 
      transition-transform duration-300
      shadow-[0_4px_24px_-1px_rgba(0,0,0,0.1)]  // 微妙な影
    "
    >
      <h5 className="text-text-secondary font-medium mb-3 text-lg">
        {title}
      </h5>
      <p className="text-text-tertiary text-left leading-relaxed">
        {content}
      </p>
    </div>
  </div>
);

const DesignTimeline = ({ isVisible, onToggle }) => {
  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative pl-8 border-l border-text-tertiary space-y-8">
              {/* 現在：2025年1月 */}
              <TimelineEntry 
                date="Present - January 2025"
                isLatest={true}
                title="Emotional UX Focus"
                content="Implementing emotional storytelling with strategic linking. Research shows modern users engage better with related content links when combined with emotional narratives."
              />

              {/* 12月後半 */}
              <TimelineEntry 
                date="Late December 2024"
                title="Modern UX Adaptation"
                content="Shifted from traditional problem-solution narrative to impression-focused, familiar interfaces based on current UX trends."
              />

              {/* 12月前半 */}
              <TimelineEntry 
                date="Early December 2024"
                title="UX Research Integration"
                content="Applied Nielsen's UX principles to optimize user flow and reduce bounce rates. Restructured navigation based on UX research findings."
              />

              {/* 12月初め */}
              <TimelineEntry 
                date="December 2024"
                title="Performance Optimization"
                content="Optimized deployment by migrating all media assets to Cloudinary. Achieved 80% reduction in application size through external asset linking."
              />

              {/* 10-11月 */}
              <TimelineEntry 
                date="October - November 2024"
                title="Technical Challenges"
                content="Explored advanced animations and storytelling techniques. Resolved Git storage challenges through environment variable implementation."
              />

              {/* 9月 */}
              <TimelineEntry 
                date="September 2024"
                title="Framework Migration"
                content="Manually migrated entire project from React.js to Next.js. Complete reconstruction of layouts and components."
              />

              {/* 8月 */}
              <TimelineEntry 
                date="August 2024"
                title="Initial Development"
                content="Initial portfolio development using React.js, establishing foundation for future iterations."
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DesignTimeline;