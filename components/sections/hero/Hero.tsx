'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FiMail} from 'react-icons/fi';
import { ReactTyped } from 'react-typed';
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';
import GsapAnimatedElement from '@/components/scroll/GsapAnimatedElement';

import ContactModal from '@/components/common/ContactCTA/Modal';
import ContactForm from '@/components/common/ContactCTA/Form';

import { FiDownload } from 'react-icons/fi';  // ダウンロードアイコン用
import ResumeModal from '../layouts/common/resume/ResumeModal';

import { jsPDF } from 'jspdf';

export default function Hero() {
  
  // contact用🔻
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);


  return (
    <>
    <section className='relative overflow-hidden' style={{ 
      overflowX: 'hidden',
      minHeight: 'clamp(600px, 90vh, 100vh)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'transparent'
    }}>
      <div className='container relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[88px]' style={{ 
        overflowX: 'hidden',
        paddingBlock: 'clamp(2rem, 8vh, 4rem)'
      }}>
        <div className='flex flex-col xl:flex-row items-center justify-center
          gap-6 sm:gap-8'>
          
          {/* text */}
          <div className='text-center xl:text-left flex-1 w-full max-w-full' style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
            <div className="gradient-text-wrapper mb-4 sm:mb-6">
              <GsapAnimatedText 
                text="Logic × Tech × Global Experience"
                variant="perspectiveTilt" 
                duration={1.5} 
                stagger={0.05}
                scrollTrigger={true}
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl relative z-10 text-gray-700 whitespace-nowrap"
                style={{ wordBreak: 'keep-all' }}
              />
            </div>
            
            <div className='font-semibold mb-6 sm:mb-8' style={{ 
              fontSize: 'clamp(1.75rem, 5vw, 4.5rem)',
              lineHeight: '1.1',
              wordBreak: 'keep-all',
              overflowWrap: 'break-word'
            }}>
              <div className="gradient-text-wrapper">
                <GsapAnimatedText 
                  text="Bridging" 
                  variant="blurIn" 
                  duration={1.5} 
                  stagger={0.05}
                  scrollTrigger={true}
                  className="text-gray-900 font-semibold whitespace-nowrap" 
                  style={{ wordBreak: 'keep-all' }}
                />
              </div>
              <br className="hidden sm:block" />
              <div className="gradient-text-wrapper">
                <GsapAnimatedText 
                  text="Tech & Culture" 
                  variant="letterShuffle" 
                  duration={2} 
                  stagger={0.05}
                  scrollTrigger={true}
                  className="text-gray-900 font-semibold whitespace-nowrap" 
                  style={{ wordBreak: 'keep-all' }}
                />
              </div>
            </div>

            {/* btn and socials */}
            <div className='flex flex-col xl:flex-row items-center gap-6 sm:gap-8'>
              <GsapAnimatedElement
                variant="scaleUp"
                duration={0.5}
                delay={1.5}
              >
                {/* CVダウンロードボタン */}
                <Button
                  variant='outline'
                  size='lg'
                  className='relative group overflow-hidden rounded-full min-h-[44px] flex items-center gap-2'
                  onClick={() => setIsResumeModalOpen(true)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue
                    animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 text-gray-800 group-hover:text-white">Download CV</span>
                  <FiDownload className='text-xl relative z-10 text-gray-800 group-hover:text-white flex-shrink-0'/>
                </Button>
              </GsapAnimatedElement>
              <GsapAnimatedElement
                variant="stagger"
                duration={0.5}
                delay={1.7}
                className='mb-8 xl:mb-0'
              >
                <Social 
                  containerStyles='flex gap-4 sm:gap-6' 
                  iconStyles='w-9 h-9 sm:w-10 sm:h-10 border border-gray-200 rounded-full
                  flex items-center justify-center text-gray-600
                  hover:border-violet-400 hover:text-violet-500 
                  hover:transition-all duration-500 hover:translate-y-[-5px]'
                />
              </GsapAnimatedElement>
            </div>
          </div>

          {/* photo area with animated gradient circle */}
          <GsapAnimatedElement
            variant="fadeIn"
            duration={1}
            delay={0.5}
            className='order-1 xl:order-none flex-1 flex justify-center items-center'
          >
            <div className="relative">
              {/* <Photo /> */}
            </div>
          </GsapAnimatedElement>
        </div>
      </div>


      <style jsx global>{`
        .gradient-text-wrapper {
          display: inline-block;
        }

        .animated-gradient-text {
          background: linear-gradient(
            to right,
            #3B82F6,
            #8B5CF6,
            #6366F1,
            #3B82F6
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }

        .animated-gradient-text-alt {
          background: linear-gradient(
            to right,
            #8B5CF6,
            #EC4899,
            #8B5CF6,
            #3B82F6
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }

        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 15s ease infinite;
        }
          @keyframes glow-rotate {
    0% {
      transform: rotate(0deg);
      border-color: #CCF8FF;
      box-shadow: 0 0 10px #CCF8FF;
    }
    50% {
      border-color: #EF96C5;
      box-shadow: 0 0 20px #EF96C5;
    }
    100% {
      transform: rotate(360deg);
      border-color: #CCF8FF;
      box-shadow: 0 0 10px #CCF8FF;
    }
  }

  .animate-glow-rotate {
    animation: glow-rotate 3s linear infinite;
  }
      `}</style>
    </section>

      {/* モーダル */}
      {/* <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      >
        <ContactForm />
      </ContactModal> */}
            {/* モーダル */}
            <ResumeModal 
              isOpen={isResumeModalOpen} 
              onClose={() => setIsResumeModalOpen(false)}
            />
    </>
  );
}