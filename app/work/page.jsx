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

const projects = [
  {num: '01',
  category: 'frontend',
  title: 'my Todo-list app',
  description:
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nisi corrupti aspernatur ipsa illo minima totam, 
    vitae rerum libero esse expedita consequuntur incidunt veritatis nostrum doloremque hic fuga molestias quasi.`,
  stack: [{ name: 'React (JSX)' }, { name: 'Css 3' }, { name: 'JavaScript (ES6+)' }],
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
  stack: [{ name: 'React (JSX)' }, { name: 'Tailwind CSS' }, { name: 'JavaScript (ES6+)' }],
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
  stack: [{ name: 'React (JSX)' }, { name: 'Tailwind CSS' }, { name: 'JavaScript (ES6+)'}, { name: 'Framer Motion' }],
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
  stack: [{ name: 'React (JSX)' }, { name: 'Tailwind CSS' }, { name: 'JavaScript (ES6+)'}, { name: 'Framer Motion'},{ name: 'Next.js' }],
  image: '/assets/work/portfoliowebsite.png',
  live: '',
  github:'',
  }, 
];


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
      initial={{ opacity:0 }}
      animate={{ opacity:100 }}
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
                {project.category} project
              </h2>
              {/* project description */}
              <p className='text-white/60'>{project.description}</p>
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return <li key={index} className='text-xl text-accent'>
                            {item.name}
                            {/* remove the last comma */}
                            {index !== project.stack.length - 1 && ','}
                         </li>;
                })}
              </ul>
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
              slidePerView={1}
              className='xl: h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return <SwiperSlide key={index}>slide</SwiperSlide>
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
    
  );
};

export default Work;