'use client'

import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import { ReactTyped } from 'react-typed';

// components
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';


export default function HomePage() {
  return (
    <>
      <section className='h-full'>
        {/* no need mx-auto since you use container */}
        <div className='container h-full text-shadow-neumorphism'>
          <div className='flex flex-col xl:flex-row items-center justify-between
          xl:pt-8 xl:pb-24'>
            {/* text */}
            <div className='text-center xl:text-left'>
              <span className='text-xl'>Front End Developer</span>
              <h1 className='h1 mb-6'>
                Hello I'm <br /> <span className='text-accent'>Ryoma Taguchi</span>
              </h1>
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
                <Button
                  variant='outline'
                  size='lg'
                  className=''
                >
                  <span>Donwload CV</span>
                  <FiDownload className='text-xl'/>
                </Button>
                <div className='mb-8 xl:mb-0'>
                  <Social 
                    containerStyles='flex gap-6' 
                    iconStyles='w-9 h-9 border border-accent rounded-full
                    flex items-center justify-center 
                    hover:bg-accent hover:transition-all duration-500 hover:translate-y-[-5px]'
                  />
                </div>
              </div>
            </div>
            {/* photo */}
            <div className='order-1 xl:order-none'>
                <Photo />
            </div>
          </div>
        </div>
        <Stats/>
      </section>
    </>
  );
}