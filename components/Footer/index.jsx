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
    <footer className="bg-primary h-[50vh] relative flex flex-col justify-end pb-8">
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2
                   w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm
                   flex items-center justify-center group
                   border border-white/20 hover:border-white/40
                   transition-all duration-300"
      >
        <div className="flex flex-col items-center">
          <ArrowUp className="w-6 h-6 text-white group-hover:text-accent" />
          <span className="absolute -bottom-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Back to Top
          </span>
        </div>
      </motion.button>

      <div className="text-center">
        <p className="text-white/60 text-sm">
          © 2024 Ryoma Taguchi | Frontend Engineer
        </p>
      </div>
    </footer>
  );
};

export default Footer;