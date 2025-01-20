'use client'

import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import { ReactTyped } from 'react-typed';
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';
import GsapAnimatedElement from '@/components/scroll/GsapAnimatedElement';

export default function Hero() {
  return (
    <section className='relative min-h-screen bg-white overflow-hidden'>
      {/* Animated Gradient Background */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[70%] rounded-full 
          bg-gradient-to-r from-blue-400/40 via-pink-300-400/40 to-red-400-400/40 
          blur-3xl transform rotate-12 animate-gradient-xy" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full 
          bg-gradient-to-r from-teal-400/40 via-blue-400/40 to-indigo-400/40 
          blur-3xl transform -rotate-12 animate-gradient-xy" />
      </div> */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[70%] rounded-full 
          bg-gradient-to-r from-[#CCF8FF] via-[#EF96C5] to-[#CCF8FF]  
          // 爽やかな水色からソフトなピンクへ
          blur-3xl transform rotate-12 animate-gradient-xy" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full 
             bg-gradient-to-r from-teal-400/40 via-blue-400/40 to-indigo-400/40 
          // 逆方向のグラデーション
          blur-3xl transform -rotate-12 animate-gradient-xy" />
      </div>

      <div className='container h-full relative z-10'>
        <div className='flex flex-col xl:flex-row items-center justify-between
        xl:pt-8 xl:pb-24'>
          
          {/* text */}
          <div className='text-center xl:text-left'>
            <div className="gradient-text-wrapper">
              <GsapAnimatedText 
                text="Logic × Tech × Global Experience"
                variant="perspectiveTilt" 
                duration={1.5} 
                stagger={0.05}
                scrollTrigger={true}
                className="text-xl relative z-10 text-gray-700"
              />
            </div>
            
            <div className='h1 mb-6'>
              <div className="gradient-text-wrapper">
                <GsapAnimatedText 
                  text="Bridging" 
                  variant="blurIn" 
                  duration={1.5} 
                  stagger={0.05}
                  scrollTrigger={true}
                  className="text-gray-900 font-semibold" 
                />
              </div>
              <br />
              <div className="gradient-text-wrapper">
                <GsapAnimatedText 
                  text="Tech & Culture" 
                  variant="letterShuffle" 
                  duration={2} 
                  stagger={0.05}
                  scrollTrigger={true}
                  className="text-gray-900 font-semibold" 
                />
              </div>
            </div>

            {/* <div className='max-w-[500px] mb-9 text-gray-600'>
              <ReactTyped 
                strings={[
                  'Cross-cultural understanding × Technical skills',
                  'Data analysis × Problem-solving',
                  'Learning ability × Adaptability',
                  'Fast-learning developer with global mindset',
                  'Bringing fresh perspective to development',
                  'Connecting East and West through code',
                  '900+ hours of focused learning',
                  '2000+ global interactions',
                  '5+ React/Next.js projects completed'
                ]}
                typeSpeed={75} 
                backSpeed={30} 
                loop
                className='pb-4'
              />
            </div> */}

            {/* btn and socials */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <GsapAnimatedElement
                variant="scaleUp"
                duration={0.5}
                delay={1.5}
              >
                <Button
                  variant='outline'
                  size='lg'
                  className='relative group overflow-hidden rounded-full'
                >
                  <div className="absolute inset-0 bg-gradient-to-r  from-[#CCF8FF] via-[#EF96C5] to-[#CCF8FF]  
                    animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative text-gray-800 group-hover:text-white">Contact Me</span>
                  <FiDownload className='text-xl relative text-gray-800 group-hover:text-white'/>
                </Button>
              </GsapAnimatedElement>
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
            </div>
          </div>

          {/* photo area with animated gradient circle */}
          <GsapAnimatedElement
            variant="fadeIn"
            duration={1}
            delay={0.5}
            className='order-1 xl:order-none'
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-violet-400/30 to-purple-400/30 
                blur-2xl rounded-full transform scale-150 animate-gradient-xy" />
              <Photo />
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
  );
}