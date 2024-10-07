'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger,
} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';

import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {num: '01',
  category: 'frontend',
  title: 'my Todo-list app',
  description:
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nisi corrupti aspernatur ipsa illo minima totam, 
    vitae rerum libero esse expedita consequuntur incidunt veritatis nostrum doloremque hic fuga molestias quasi.`,
  stack: ['React', 'CSS', 'JavaScript'],
  image: '/assets/work/Todo-List-App.png',
  live: '',
  github:'',
  },
  {num: '02',
  category: 'frontend',
  title: 'my weather app',
  description:
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nisi corrupti aspernatur ipsa illo minima totam, 
    vitae rerum libero esse expedita consequuntur incidunt veritatis nostrum doloremque hic fuga molestias quasi.`,
  stack: ['React', 'Tailwind', 'JavaScript', 'API'],
  image: '/assets/work/wetherapp.png',
  live: '',
  github:'',
  },
  {num: '03',
  category: 'frontend',
  title: 'e-commerce website',
  description:
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nisi corrupti aspernatur ipsa illo minima totam, 
    vitae rerum libero esse expedita consequuntur incidunt veritatis nostrum doloremque hic fuga molestias quasi.`,
  stack: ['React', 'Tailwind', 'JavaScript', 'API', 'Framer Motion'],
  image: '/assets/work/E-commerce-png.png',
  live: '',
  github:'',
  }, 
  {num: '04',
  category: 'frontend',
  title: 'portfolio website',
  description:
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nisi corrupti aspernatur ipsa illo minima totam, 
    vitae rerum libero esse expedita consequuntur incidunt veritatis nostrum doloremque hic fuga molestias quasi.`,
  stack: ['React', 'Tailwind', 'JavaScript', 'API', 'Framer Motion', 'Next.js'],
  image: '/assets/work/portfoliowebsite.png',
  live: '',
  github:'',
  }, 
];

import TechStackIcons from '@/components/TechStackIcons';


const Work = () => {
  const [project, setProject] = useState(projects[0]);

  // ※Swiper automatically calls the `handleSlideChange` function 
  // and passes the `swiper` object as an argument.
  // swiper.activeIndex = swiper object
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          
          {/* text */}
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col
          xl:justify-between order-2 xl:order-none'>
          {/* css for each elements */}
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* outline num */}
              <div className='text-8xl leading-none font-extrabold text-transparent
              text-outline'>
                {project.num}
              </div>
              {/* project category */}
              <h2 className='text-[42px] font-bold leading-none text-white
              group-hover:text-accent transition-all duration-500 capitalize'
              >
                {project.category} Project 
              </h2>
              {/* project description */}
              <p className='text-white/60 '>{project.description}</p>
              {/* Tech Stack Icons */}
              <div className='flex flex-col px-10 bg-[#27272c] bg-opacity-50 rounded-xl
                     xl:h-[600px] justify-center py-2'>
                <TechStackIcons stack={project.stack} />
              </div>
              {/* border */}
              <div className='border border-white/20'></div>
              {/* button */}
              
              {/* tool tip */}
              <div className='flex items-center gap-4'>
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>

                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full
                      bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl 
                        group-hover:text-accent'/>
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>

                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>

                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full
                      bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl 
                        group-hover:text-accent'/>
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>

                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>

            </div>
          </div>

          {/* slider */}
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl: h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                <SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] relative group flex justify-center
                  items-center bg-pink-50/20'>
                    {/* overlay */}
                    <div className='absolute top-0 right-0 left-0 w-full h-full bg-black/50 z-10'></div>
                    {/* image */}
                    <div className='relative w-full h-full'>
                      <Image 
                        src={project.image}
                        fill
                        className='object-cover'
                      />
                    </div>
                  </div>
                </SwiperSlide>
              )})}

              {/* slider buttons */}
              <WorkSliderBtns 
                containerStyles='z-20 flex gap-2 absolute xl:right-0 bottom-[calc(50%_-_22px)]
                xl:bottom-0 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent hover:bg-accent-hover w-[44px] h-[44px] flex justify-center
                items-center text-[22px] text-primary'
                 />

            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
    
  );
};

export default Work;

// bottom-[calc(50%_-_22px)
// - means go up to top in this case.
// parent's height
// |
// |
// | 50%
// |------------ （center）
// |  ↑
// |  22px
// |   
// |  [button]
// |
// |