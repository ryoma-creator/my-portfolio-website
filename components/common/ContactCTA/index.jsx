'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ContactModal from './Modal';
import ContactForm from './form';

const ContactCTA = ({ 
  title = "Let's Create Together",
  description,
  buttonText = "Contact Me"
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-2xl mx-auto py-16"
    >
      <div className="">
        {/* SVGは変更なし */}
        <h2 className="text-2xl font-light mb-4 text-text-dark-primary">{title}</h2>
        <p className="text-text-secondary mb-8">{description}</p>

        {/* ボタンのスタイリングを変更 */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="relative px-8 py-3 rounded-full group overflow-hidden border border-white
          hover:border-transparent transition-all duration-300
          "
        >
          {/* グラデーション背景（ホバー時に表示） */}
          <div className="absolute inset-0  animate-gradient-x bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          {/* ボタンテキスト */}
          <span className="relative z-10 text-text-dark-primary group-hover:text-white 
            transition-colors duration-300"
          >
            {buttonText}
          </span>
        </button>
      </div>

      {/* モーダル */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm />
      </ContactModal>
    </motion.div>
  );
};

export default ContactCTA;