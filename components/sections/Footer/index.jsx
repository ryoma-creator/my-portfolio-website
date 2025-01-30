'use client'
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black backdrop-blur-sm border-text-secondary h-[25vh] relative flex flex-col justify-end ">
      {/* Back to Top ボタン */}
      {/* <button
        onClick={scrollToTop}
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2
                w-12 h-12 flex items-center justify-center group
                bg-transparent transition-all duration-300"
      > */}
        {/* グラデーション背景 - ホバー時のみ表示 */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue 
          animate-gradient-x opacity-0 group-hover:opacity-100 rounded-full
          transition-all duration-300" 
        /> */}
        
        {/* アイコンとテキスト */}
        {/* <div className="relative z-10 flex flex-col items-center">
          <ArrowUp className="w-6 h-6 text-gray-400 group-hover:text-white transition-all duration-300" />
          <span className="absolute -bottom-8 text-white opacity-0 group-hover:opacity-100 
            transition-opacity duration-300 whitespace-nowrap">
            Back to Top
          </span>
        </div>
      </button> */}

      <div className="text-center">
        <p className="text-white/60 text-sm">
          © 2024-2025 Ryoma Taguchi | Frontend Engineer
        </p>
      </div>
    </footer>
  );
};

export default Footer;