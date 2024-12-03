'use client';

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

import TechStackIcons from '@/components/TechStackIcons';

import WorkSliderBtns from '@/components/WorkSliderBtns';

import GsapAnimatedElement from '@/components/scroll/GsapAnimatedElement';

import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';

// compare
import { Compare } from "@/components/ui/compare";

// Achivement cards component
import AchievementList from '@/components/AchievementList';

// import HorizontalScrollText from '@/components/scroll/HorizontalScrollText';
import { achievements } from '@/components/scroll/HorizontalScrollText/achievements';

// custom compare component
import { CustomCompare } from '@/components/CustomCompare/index'

const projects = [
  {num: '01',
  category: 'frontend',
  title: 'my Todo-list app',
  description:
    `dddddddddddddddddd`,
  stack: ['React', 'CSS', 'JavaScript'],
  image: '/assets/work/Todo-List-App.png',
  live: '',
  github:'',
  },
  {num: '02',
  category: 'frontend',
  title: 'my weather app',
  description:
    `aaaaaaaaaaaaaaaaaaa`,
  stack: ['React', 'Tailwind', 'JavaScript', 'API'],
  image: '/assets/work/wetherapp.png',
  live: '',
  github:'',
  },
  {num: '03',
  category: 'frontend',
  title: 'e-commerce website',
  description:
    `cccccccccccccc`,
  stack: ['React', 'Tailwind', 'JavaScript', 'API', 'Framer Motion'],
  image: '/assets/work/E-commerce-png.png',
  live: '',
  github:'',
  }, 
  {num: '04',
  category: 'frontend',
  title: 'portfolio website',
  description:
    `bbbbbbbbbbbbbbbbb`,
  stack: ['React', 'Tailwind', 'JavaScript', 'API', 'Framer Motion', 'Next.js'],
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
    <section
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
              <GsapAnimatedElement variant="blurIn" duration={2} delay={0.2}>
                <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                  {project.num}
                </div>
              </GsapAnimatedElement>
              {/* project category */}
              <GsapAnimatedText 
                key={project.title}  // category が変わるたびにリレンダリング
                variant="blurIn" 
                duration={0.4} 
                scrollTrigger={true}
                delay={0.4}
                className='text-[42px] font-bold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize'
                text={`${project.title} `}
                />

              <GsapAnimatedElement variant="blurIn" duration={1} delay={0.4}>
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                  {project.category} Project 
                </h2>
              </GsapAnimatedElement>
              {/* project description */}
              <GsapAnimatedText 
                key={project.description}  // descriptionが変わると再マウント
                variant="blurIn" 
                duration={0.5} 
                scrollTrigger={false}
                delay={0.6}
                className='text-white/60'
                text={project.description}
                />
              {/* Tech Stack Icons */}
              <GsapAnimatedElement 
              key={project.stack.join(',')}  // stackが変わるたびにリレンダリング
              variant="blurIn" 
              duration={1.5} 
              delay={0.2}>
              <div className='flex flex-col px-10 bg-[#27272c] bg-opacity-50 rounded-xl
                     justify-center py-2'>
                <TechStackIcons stack={project.stack} />
              </div>
              </GsapAnimatedElement>
              {/* border */}
              <GsapAnimatedElement variant="blurIn" duration={1} delay={1}>
              <div className='border border-white/20'></div>
              </GsapAnimatedElement>
              {/* button */}
              
              {/* tool tip */}
              <GsapAnimatedElement variant="fadeIn" duration={1} delay={1.2}>
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
              </GsapAnimatedElement>

            </div>
          </div>

          {/* slider */}


          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl: h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >{projects.map((project, index) => {
              return (
                <SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] relative group flex justify-center items-center'>
                  <CustomCompare
  firstContent={
    <div className="w-full h-full bg-[#1a1a1a] p-4 overflow-auto">
      <h3 className="text-white text-xl mb-4">未完了のタスク</h3>
      <ul className="text-white/60">
        <li>✖️ 洗濯物を干す</li>
        <li>✖️ 掃除機をかける</li>
        <li>✖️ 買い物に行く</li>
      </ul>
    </div>
  }
  secondContent={
    <div className="w-full h-full bg-[#2a2a2a] p-4 overflow-auto">
               <img src={project.image} alt={project.title} />
    </div>
  }
  className="w-full h-full"
  slideMode="hover"
/>
                  </div>
                </SwiperSlide>
              )
            })}

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
    </section>
    
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