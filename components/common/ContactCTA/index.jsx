import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ContactCTA = ({ 
  title = "Let's Create Together",
  description,  // 必須パラメータに変更
  buttonText = "Contact Me"
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-2xl mx-auto pt-24"
    >
      <div className="mb-8">
        <svg className="w-12 h-12 mx-auto mb-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h2 className="text-2xl font-light mb-4">{title}</h2>
        <p className="text-white/80 mb-8">
          {description}
        </p>
        <Link href="/contact">
          <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
            {buttonText}
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ContactCTA;