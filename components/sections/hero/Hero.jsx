'use client'

import { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import GsapAnimatedElement from '@/components/scroll/GsapAnimatedElement';
import { SectionContainer, SectionGroup } from '@/components/layout/Section';
import ContactModal from '@/components/common/ContactCTA/Modal';
import ContactForm from '@/components/common/ContactCTA/form';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className='relative h-[90vh] bg-white overflow-hidden'>
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[70%] rounded-full 
            bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue
            blur-3xl transform rotate-12 animate-gradient-xy" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full 
            bg-gradient-to-r from-teal-400/40 via-blue-400/40 to-indigo-400/40 
            blur-3xl transform -rotate-12 animate-gradient-xy" />
        </div>

        <div className='container h-full relative z-10'>
          <div className='flex flex-col xl:flex-row items-center justify-center h-full
            gap-8 py-12 md:py-16 xl:py-0'>
            
            {/* text section */}
            <div className='text-center xl:text-left flex-1'>
              <SectionGroup 
                subtitle="Logic × Tech × Global Experience"
                title="Bridging Tech & Culture"
                align="xl:text-left"  // モバイルでは中央揃え、xl以上で左揃え
                textColor="text-gray-900"
                button={{
                  text: "Contact Me",
                  icon: <FiDownload className='text-xl'/>,
                  onClick: () => setIsModalOpen(true),
                  variant: 'outline',
                  size: 'lg',
                  animation: {
                    variant: "scaleUp",
                    duration: 0.5,
                    delay: 1.5
                  }
                }}
              >
                <GsapAnimatedElement
                  variant="stagger"
                  duration={0.5}
                  delay={1.7}
                  className='mb-8 xl:mb-0'
                >
                  <Social 
                    containerStyles='flex gap-6' 
                    iconStyles='w-9 h-9 border border-gray-200 rounded-full
                    flex items-center justify-center text-gray-600
                    hover:border-violet-400 hover:text-violet-500 
                    hover:transition-all duration-500 hover:translate-y-[-5px]'
                  />
                </GsapAnimatedElement>
              </SectionGroup>
            </div>

            {/* photo area */}
            <GsapAnimatedElement
              variant="fadeIn"
              duration={1}
              delay={0.5}
              className='order-1 xl:order-none flex-1 flex justify-center items-center'
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-violet-400/30 to-purple-400/30 
                  blur-2xl rounded-full transform scale-150 animate-gradient-xy" />
                <Photo />
              </div>
            </GsapAnimatedElement>
          </div>
        </div>

        {/* スタイル定義は省略（元のコードと同じ） */}
      </section>

      {/* モーダル */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      >
        <ContactForm />
      </ContactModal>
    </>
  );
}