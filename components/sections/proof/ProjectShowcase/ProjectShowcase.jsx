'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import TechStackIcons from '@/components/TechStackIcons';
import WorkSliderBtns from '@/components/WorkSliderBtns';
import GsapAnimatedElement from '@/components/scroll/GsapAnimatedElement';
import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';
import { CustomCompare } from '@/components/CustomCompare/index';
import { projects } from '@/components/sections/proof/ProjectShowcase/projectData'

const ProjectShowcase = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <div className='flex flex-col justify-center py-6'>
      <div className='w-full'>
        <div className='flex flex-col xl:flex-row xl:gap-4'>
          {/* テキスト部分 */}
          <div className='w-full xl:w-[45%] flex flex-col xl:justify-between'>
            <div className='flex flex-col gap-4 h-full'>
              {/* outline num */}
              <GsapAnimatedElement variant="blurIn" duration={2} delay={0.2}>
                <div className='text-6xl leading-none font-extrabold text-transparent text-outline'>
                  {project.num}
                </div>
              </GsapAnimatedElement>
              
              {/* project category */}
              <GsapAnimatedText 
                key={project.title}
                variant="blurIn" 
                duration={0.4} 
                scrollTrigger={true}
                delay={0.4}
                className='text-3xl font-bold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize'
                text={`${project.title} `}
              />

              <GsapAnimatedElement variant="blurIn" duration={1} delay={0.4}>
                <h2 className='text-3xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                  {project.category} Project 
                </h2>
              </GsapAnimatedElement>

              {/* project description */}
              <GsapAnimatedText 
                key={project.description}
                variant="blurIn" 
                duration={0.5} 
                scrollTrigger={false}
                delay={0.6}
                className='text-white/60 text-sm'
                text={project.description}
              />


              {/* Tech Stack Icons */}
                <GsapAnimatedElement 
                key={project.stack.join(',')}
                variant="blurIn" 
                duration={1.5} 
                delay={0.2}
                >
                <div className='flex flex-col px-4 bg-[#27272c] bg-opacity-50 rounded-xl justify-center py-2 w-full overflow-hidden'>
                    <div className='flex flex-wrap gap-2 justify-center'>  {/* flex-wrapを追加 */}
                    <TechStackIcons 
                        stack={project.stack} 
                        iconSize="small"  
                        className="flex-shrink-0"  
                    />
                    </div>
                </div>
                </GsapAnimatedElement>

              {/* border */}
              <GsapAnimatedElement variant="blurIn" duration={1} delay={1}>
                <div className='border border-white/20'></div>
              </GsapAnimatedElement>

              {/* buttons */}
              <GsapAnimatedElement variant="fadeIn" duration={1} delay={1.2}>
                <div className='flex items-center gap-3'>
                  {/* Live project button */}
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>                   
                      <Tooltip>
                        <TooltipTrigger className='w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsArrowUpRight className='text-white text-2xl group-hover:text-accent'/>
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
                        <TooltipTrigger className='w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsGithub className='text-white text-2xl group-hover:text-accent'/>
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
          <div className='w-full xl:w-[55%]'>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              className='h-[400px]'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='h-[400px] relative group flex justify-center items-center'>
                      <CustomCompare
                        firstContent={
                          <div className="w-full h-full bg-[#27272c] p-4 overflow-y-auto">
                            {/* Development Period & Time */}
                            <div className="mb-4">
                              <span className="text-emerald-500 text-sm">{project.period}</span>
                              <p className="text-white/60 text-sm">{project.developmentTime}</p>
                            </div>
                            
                            {/* Learning Objectives */}
                            <div className="mb-6">
                              <h4 className="text-white text-lg mb-2">Learning Focus</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.learningObjectives.map((objective, index) => (
                                  <span
                                    key={index}
                                    className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full"
                                  >
                                    {objective}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Achievements */}
                            <div className="space-y-4">
                              {project.achievements.map((achievement, i) => (
                                <div key={i} className="flex items-start gap-3">
                                  <div className="mt-1.5">
                                    <svg
                                      className="w-4 h-4 text-emerald-500"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                  </div>
                                  <p className="text-white/60 text-sm">{achievement}</p>
                                </div>
                              ))}
                            </div>

                            {/* Key Highlight */}
                            <div className="mt-6 pt-4 border-t border-white/10">
                              <div className="text-center">
                                <span className="text-emerald-400 text-sm flex items-center justify-center gap-2">
                                  Project Focus
                                </span>
                              </div>
                              <p className="mt-2 text-center text-white/70 text-sm italic">
                                {project.highlight}
                              </p>
                            </div>
                          </div>
                        }
                        secondContent={
                          <div className="w-full h-[400px] bg-[#2a2a2a] overflow-auto">
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover"
                            />
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
                containerStyles='z-20 flex gap-2 absolute xl:right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent hover:bg-accent-hover w-[44px] h-[44px] flex justify-center items-center text-[22px] text-primary'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;