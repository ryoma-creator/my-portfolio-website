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
// import { Compare } from "@/components/ui/compare";

// Achivement cards component
// import AchievementList from '@/components/AchievementList';

// import HorizontalScrollText from '@/components/scroll/HorizontalScrollText';
// import { achievements } from '@/components/scroll/HorizontalScrollText/achievements';

// custom compare component
import { CustomCompare } from '@/components/CustomCompare/index'

// import Award from '@/components/LottieIcon/Award';

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'my Todo-list app',
    period: 'March 2024',
    developmentTime: '10 days (10+ hours/day)',
    description: 'CRUD application with drag & drop functionality',
    stack: ['React', 'CSS', 'JavaScript'],
    achievements: [
      'Implemented drag and drop functionality for task reordering',
      'Created responsive layout using Flexbox and Grid',
      'Built custom hooks for state management',
      'Integrated local storage for data persistence',
    ],
    learningObjectives: [
      'State Management with React Hooks',
      'DOM Manipulation',
      'Event Handling',
      'Local Storage Integration'
    ],
    highlight: 'Focus on building reusable components and implementing modern React patterns',
    image: '/assets/work/Todo-List-App.png',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'frontend',
    title: 'my weather app',
    period: 'April 2024',
    developmentTime: '7 days (10+ hours/day)',
    description: 'Real-time weather application with API integration',
    stack: ['React', 'Tailwind', 'JavaScript', 'API'],
    achievements: [
      'Integrated OpenWeather API for real-time data',
      'Implemented geolocation features',
      'Created responsive weather cards with Tailwind',
      'Built error handling for API requests'
    ],
    learningObjectives: [
      'API Integration',
      'Async/Await',
      'Error Handling',
      'Tailwind CSS'
    ],
    highlight: 'Mastered API integration and error handling in React applications',
    image: '/assets/work/wetherapp.png',
    live: '',
    github: '',
  },
  // E-commerce website
  {
    num: '03',
    category: 'frontend',
    title: 'e-commerce website',
    period: 'May 2024',
    developmentTime: '14 days (10+ hours/day)',
    description: 'Full-featured e-commerce platform with cart functionality',
    stack: ['React', 'Tailwind', 'JavaScript', 'API', 'Framer Motion'],
    achievements: [
      'Built shopping cart with complex state management',
      'Implemented smooth animations with Framer Motion',
      'Created responsive product grid layout',
      'Integrated mock API for product data'
    ],
    learningObjectives: [
      'Complex State Management',
      'Animation Libraries',
      'E-commerce Flow',
      'Performance Optimization'
    ],
    highlight: 'Created a complete e-commerce solution with modern UI/UX principles',
    image: '/assets/work/E-commerce-png.png',
    live: '',
    github: '',
  },
  // Portfolio website
  {
    num: '04',
    category: 'frontend',
    title: 'portfolio website',
    period: 'June 2024',
    developmentTime: '21 days (10+ hours/day)',
    description: 'Professional portfolio with advanced animations',
    stack: ['React', 'Tailwind', 'JavaScript', 'API', 'Framer Motion', 'Next.js'],
    achievements: [
      'Implemented complex scroll animations',
      'Built custom React components',
      'Created responsive layouts with Tailwind',
      'Optimized performance with Next.js'
    ],
    learningObjectives: [
      'Next.js Framework',
      'Advanced Animations',
      'SEO Optimization',
      'Performance Tuning'
    ],
    highlight: 'Showcased advanced frontend skills with modern web technologies',
    image: '/assets/work/portfoliowebsite.png',
    live: '',
    github: '',
  },
  {
    num: '05',
    category: 'frontend',
    title: 'Interactive Storytelling Portfolio',
    period: 'July-August 2024',
    developmentTime: '2 months (10+ hours/day)',
    description: 'Advanced scroll-based storytelling experience with complex animations',
    stack: [
      'Next.js',
      'Framer Motion',
      'GSAP',
      'Tailwind CSS',
      'React',
      'JavaScript'
    ],
    achievements: [
      'Implemented complex scroll-triggered animations',
      'Created custom mask animations for video content',
      'Built responsive layouts with dynamic content',
      'Developed smooth transitions between sections'
    ],
    learningObjectives: [
      'Advanced Animation Techniques',
      'Scroll-based Interactions',
      'Performance Optimization',
      'Creative UI/UX Design'
    ],
    highlight: 'Pushed boundaries in web animation and storytelling, creating an immersive user experience that showcases technical growth',
    image: '/assets/work/storytelling-portfolio.png',
    live: '',
    github: '',
    challenges: [
      'Complex animation synchronization',
      'Performance optimization with multiple animations',
      'Cross-browser compatibility'
    ],
    libraries: [
      'Framer Motion',
      'GSAP',
      'Lottie Files',
      'Scroll Magic'
    ]
  }
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
                  <div className='h-[600px] relative group flex justify-center items-center'>
                  <CustomCompare

firstContent={
  <div className="w-full h-full bg-[#27272c] p-6 overflow-y-auto">
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
    <div className="w-full h-[600px] bg-[#2a2a2a] overflow-auto">
                   <img 
      src={project.image} 
      alt={project.title} 
      className="w-full h-full object-cover" // object-coverを追加して画像がコンテナに合うように
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