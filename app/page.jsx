'use client'

import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import { ReactTyped } from 'react-typed';

// components
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';
import GsapAnimatedElement from '@/components/scroll/GsapAnimatedElement';

import { EvervaultCard } from '@/components/ui/evervault-card';

export default function HomePage() {
  return (
    <>

    <EvervaultCard/>

      <section className='h-full'>
        {/* no need mx-auto since you use container */}
        <div className='container h-full text-shadow-neumorphism'>
          <div className='flex flex-col xl:flex-row items-center justify-between
          xl:pt-8 xl:pb-24'>
            
            {/* text */}
            <div className='text-center xl:text-left'>
              <GsapAnimatedText 
                text="Front End Developer" 
                variant="perspectiveTilt" 
                duration={1.5} 
                stagger={0.05}
                scrollTrigger={true}
                className="text-xl"
              />
              <div className='h1 mb-6'>
              <GsapAnimatedText 
                text="Hello I'm" 
                variant="blurIn" 
                duration={1.5} 
                stagger={0.05}
                scrollTrigger={true}
                className=""
              />
              <br />
              <GsapAnimatedText 
                text="Ryoma Taguchi" 
                variant="letterShuffle" 
                duration={2} 
                stagger={0.05}
                scrollTrigger={true}
                className="text-accent"
              />
              </div>
              <div className='max-w-[500px] mb-9 text-white/80'>
              <ReactTyped 
                strings={[
                    'THANK YOU FOR COMING!',
                    'Welcome to my Portfolio Website!',
                    'Please take a look!', 
                    'Lets work together!', 
                    'Ill do my best for you and my career!',
                    'Feel free to contact me!',
                ]}
                typeSpeed={75} 
                backSpeed={30} 
                loop
                className='pb-4'
            />
              </div>
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
                    className=''
                  >
                    <span>Download CV</span>
                    <FiDownload className='text-xl'/>
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
                    iconStyles='w-9 h-9 border border-accent rounded-full
                    flex items-center justify-center 
                    hover:bg-accent hover:transition-all duration-500 hover:translate-y-[-5px]'
                  />
                </GsapAnimatedElement>
              </div>
            </div>
            {/* photo */}
            <GsapAnimatedElement
              variant="fadeIn"
              duration={1}
              delay={0.5}
              className='order-1 xl:order-none'
            >
              <Photo />
            </GsapAnimatedElement>
          </div>
        </div>
        <GsapAnimatedElement
          variant="blurIn"
          duration={1}
          delay={2}
        >
          <Stats/>
        </GsapAnimatedElement>
      </section>
    </>
  );
}