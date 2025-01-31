'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion';
import Link from 'next/link';

const Concept = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          {/* ブランド名 */}
          <m.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-2"
          >
            <span className="text-sm uppercase tracking-wider text-text-secondary">
              RYOMA TAGUCHI
            </span>
          </m.div>

          {/* メインタイトル */}
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-light text-center mb-8"
          >
            Creating Digital Solutions Since 2024
          </m.h2>

          {/* CTAボタン */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <Link 
            href="/concept"  // "/my-story" から "/concept" に変更
            className="inline-flex items-center justify-center px-8 py-3 border border-text-primary rounded-full hover:bg-text-primary hover:text-white transition-colors duration-300"
            >
            My Story
            </Link>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Concept;