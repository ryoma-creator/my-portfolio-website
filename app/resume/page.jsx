'use client';
import styles from '@/components/Card/style.module.scss'
import { projects } from '@/components/Card/data';
import Card from '@/components/Card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis'
import ScrollVideoPlayerFramer from '@/components/ScrollVideoPlayerFramer';

import GsapAnimatedElement from '@/components/scroll/GsapAnimatedElement';

import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';


import {
   FaHtml5,
   FaCss3,
   FaJs, 
   FaReact,
   FaNodeJs,
  } from 'react-icons/fa';

import { 
  SiTailwindcss, 
  SiNextdotjs, 
  SiFramer,
  SiTypescript, 
  SiPostman 
} from 'react-icons/si';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

// import AboutMe from '@/services/AboutMe';


// import styles from '@/app/resume/page.module.scss';


// import HorizontalScrollText from '@/components/scroll/HorizontalScrollText';
import { achievements } from '@/components/scroll/HorizontalScrollText/achievements';

// Lottie Award Icon
import Award from '@/components/LottieIcon/Award';

// Skill Tabs Component
import SkillTabs from '@/components/SkillTabs';
// 🔺

// import { SkillTabs } from '@/components/SkillTabs/index';
import { skillsData } from '@/components/SkillTabs/skillsData';

// FocusCards component
import { FocusCards } from "@/components/ui/focus-cards";

// Achivement cards component
// import AchievementList from '@/components/AchievementList';
// 🔺

// ----------testimonials
// 
// import { projects } from '@/components/Card/data'
// About Me section / Animated Testimonials

import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';


// Cardのdata.jsxデータをtestimonialsの形式に変換
const testimonials = projects.map(project => {
  // titleを'-'で分割
  const titleParts = project.title.split('-');
  
  return {
    quote: project.description,
    name: titleParts[0]?.trim() || project.title, // '-'がない場合はtitle全体を使用
    designation: titleParts[1]?.trim() || '', // '-'がない場合は空文字を使用
    src: project.src
  }
});
// ----------testimonials


// about data
const infomation = {
  title: 'Infomation',
  description:`I am a problem-solver transitioning into frontend development, combining analytical 
  skills honed through legal studies with international learningJourney across Europe and 
  Asia. Passionate about creating interactive web applications using React, Next.js, 
  and modern technologies while bringing a unique perspective from working at a global 
  tech consulting firm. Currently dedicated to building my portfolio while actively 
  learning and implementing new technologies.`,
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Ryoma Taguchi'
    },
    {
      fieldName: 'Self-learning Journey Started',
      fieldValue: 'March 2024 -'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Japanese'
    },
    {
      fieldName: 'Email',
      fieldValue: 'barcelona.fc.111326@gmail.com'
    },    
    {
      fieldName: 'Freelance',
      fieldValue: 'Available'
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Japanese'
    },  
  ]
}

const about = {
  title: 'About Me',
  description:`I am a problem-solver transitioning into frontend development, combining analytical 
  skills honed through legal studies with international learningJourney across Europe and 
  Asia. Passionate about creating interactive web applications using React, Next.js, 
  and modern technologies while bringing a unique perspective from working at a global 
  tech consulting firm. Currently dedicated to building my portfolio while actively 
  learning and implementing new technologies.`,
  info: [

  ]
}

// learningJourney data
const learningJourney = {
  icon: '',
  title: 'Technical Evolution Path',
  description: 
    `This comprehensive timeline captures my development journey since March 2024,
     documenting both technical achievements and valuable insights gained along the way.
     As one of the most significant sections, it offers a detailed look into my evolution
     as a developer and the meaningful lessons learned throughout this path.
     
     Scroll horizontally to discover my journey
     
     For a complete detailed record of my daily progress and learnings, 
     you can find my comprehensive documentation `,
    items: [
      {
        institution: 'Meiji Gakuin Universitiy',
        degree: 'Faculty of Law',
        duration: '2012 Mar - 2018 Mar',
        url: 'https://www.meijigakuin.ac.jp/en/academics/faculty/law/law.html',
        backgroundImage: '/assets/about/law.jpg',
      },
      {
        institution: 'International People’s College',
        degree: 'Study Abroad - Denmark',
        duration: '2017 Mar - 2017 Sep',
        backgroundImage: '/assets/about/ipc.jpg',
        url: 'https://ipc.dk/',
      },
      {
        institution: 'GITC',
        degree: 'Study Abroad - Philippines',
        duration: '2018 Mar - 2018 Sep',
        backgroundImage: '/assets/about/gitc.jpg',
        url: 'http://gitc.edu.ph/en/',
      },
      {
        institution: 'Japan Internet Academy',
        degree: 'Web Design',
        duration: '2020 Mar - 2020 Sep',
        backgroundImage: '/assets/about/IA.jpg',
        url: 'https://www.internetacademy.jp/',
      },
      {
        institution: 'Accenture',
        degree: 'Analyst',
        duration: '2022 Feb - 2024 Mar',
        backgroundImage: '/assets/about/company.jpg',
        url: 'https://www.accenture.com/ph-en',
      },
      {
        institution: 'self-taught (FULL TIME Commitment!⇦)',
        degree: 'Front End Development',
        duration: '2024 Mar - PRESENT',
        backgroundImage: '/assets/about/dev.jpg',
        url: '',
      },
      {
        institution: 'DMM English',
        degree: 'Others - Study Online English School',
        duration: '2012 Mar - PRESENT',
        backgroundImage: '/assets/about/online.jpg',
        url: 'https://eikaiwa.dmm.com/',
      },

  ]
}

// education data
const education = {
  icon: '',
  title: 'My Career',
  description: 
  `My journey spans from legal studies to technology, combining analytical 
  skills from law school with my passion for web development. Since March 2024, 
  `,
  items: [
    {
      institution: 'Meiji Gakuin Universitiy',
      degree: 'Faculty of Law, Department of Legal Studies.',
      duration: '2012 - 2018 Mar',
      url: '',
    },
    {
      institution: 'international ',
      degree: 'Web Design (html/css/photoshop/illustolator)',
      duration: '2020 Mar - Sep',
      url: '',
    },
    {
      institution: 'Internet Academy (IN Japan)',
      degree: 'Web Design (html/css/photoshop/illustolator)',
      duration: '2020 Mar - Sep',
      url: '',
    },
    {
      institution: 'Accenture',
      degree: 'Analyst',
      duration: '2022 Feb - 2024 Mar',
      url: '',
    },
    {
      institution: 'self-taught (FULL TIME Commitment!⇦)',
      degree: 'Front End Development',
      duration: '2024 Mar - Present',
      url: '',
    },
    {
      institution: 'DMM English',
      degree: 'Study English',
      duration: '2012 Mar - Present',
      url: '',
    },
  ]
}

// skills data
const skills = {
  title: 'My skills',
  description: 
  `Through six months of intensive self-study 
  `,
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'HTML 5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS 3',
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
    },
    {
      icon: <FaReact />,
      name: 'React',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
    },
    {
      icon: <SiFramer />,
      name: 'Framer Motion',
    },
    {
      icon: <SiTypescript />,
      name: 'TypeScript',
    },
    {
      icon: <SiTypescript />,
      name: 'SVG Animation',
    },
  ]
}



export default function Resume() {
  // ローカルストレージから保存された値を取得、なければ 'learningJourney' をデフォルト値として使用
  const [activeTab, setActiveTab] = useState('learningJourney');
  const [mounted, setMounted] = useState(false);

  const container = useRef(null);


  const scrollAreaRef = useRef(null);
    // Cart ComponentがScrollArea上で検知できるようにするため
  // これをScrollAreαにシールのように貼って、それをPropsとして渡す。

  const { scrollYProgress } = useScroll({
    target: scrollAreaRef,
    offset: ['end end', 'end end']
  })
// 🔺これはCardに使っている
 



  // マウント状態を管理
  // localStorage周りの処理をuseEffectの中に移動
  useEffect(() => {
    if (typeof window !== 'undefined') {  // クライアントサイドかどうかチェック
      setMounted(true);
      const savedTab = localStorage.getItem('activeResumeTab');
      if (savedTab) {
        setActiveTab(savedTab);
      }
    }
  }, []);

  // タブが変更されたときの処理
  const handleTabChange = (value) => {
    setActiveTab(value);
    localStorage.setItem('activeResumeTab', value);
  };

    // マウントされていない場合は何も表示しない
    if (!mounted) {
      return null;
    }

  // 🔻ScrollAreaが機能しなくなる。。。❌
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const lenis = new Lenis()
  
  //     function raf(time) {
  //       lenis.raf(time)
  //       requestAnimationFrame(raf)
  //     }
  
  //     requestAnimationFrame(raf)
  
  //     return () => {
  //       lenis.destroy()
  //     }
  //   }
  // }, [])

  return (
  <>
    {/* <motion.div
      initial={{ opacity:0 }}
      animate={{ 
        opacity:1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn'},
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >

    </motion.div> */}

    <motion.div
      initial={{ opacity:0 }}
      animate={{ 
        opacity:1,
        transition: { delay: 0, duration: 0.4, ease: 'easeIn'},
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >

      <div className='container'>
        <Tabs
          defaultValue={activeTab}  
          value={activeTab}
          onValueChange={handleTabChange}
          className='flex flex-col xl:flex-row gap-[60px]'
        >
  {/* 固定するナビゲーション部分 */}
  <div className='xl:sticky xl:top-[100px] xl:h-fit'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
          gap-6'>
            <TabsTrigger value='about'>About Me</TabsTrigger>
            <TabsTrigger value='education'>Career</TabsTrigger>
            <TabsTrigger value='learningJourney'>Technical Evolution Path</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='infomation'>Infomation</TabsTrigger>
          </TabsList>
    </div>

    {/* content */}
    <div className='min-h-[70vh] w-full'>

      {/* learningJourney */}
      <TabsContent value='learningJourney' className='w-full'>
        <div className='flex flex-col gap-[30px] text-center xl:text-left'>


                {/* コンテナに固定幅を設定 */}
                <AchievementList achievements={achievements} />


              {/* Scroll → You need over 400px to scroll */}
              <ScrollArea 
                className='w-[400px]'
                ref={container}
              >
                <div className='flex space-x-4'>


              {/* <HorizontalScrollText 
                scrollAreaRef={scrollAreaRef}
              /> */}
                </div>
               {/* previous design🔻 depends on your preference */}
                {/* <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {learningJourney.items.map((item, index)=> {
                    return (
                      <li 
                        key={index} 
                        className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start
                        gap-1'
                      >
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px]
                        text-center lg:text-left'>
                          {item.position}
                        </h3>
                        <div className='flex items-center '> */}
                          {/* dot */}
                          {/* <span className='w-[6px] h-[6px] rounded-full
                          bg-accent'></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul> */}
              </ScrollArea>
              <h3 className='text-4xl font-bold'>{learningJourney.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
  {learningJourney.description.split('here.')[0]}
  <a 
    href="https://github.com/ryoma-creator/weather-app-react/blob/main/Progress/02_Daily%20Record"
    className="text-[#00FF94] hover:underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    here
  </a>
  {'.'}
  {learningJourney.description.split('here.')[1]}
</p>

              </div>
          
            </TabsContent>


            {/* education */}
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] h-[104px] text-white/60 mx-auto xl:mx-0 line-clamp-6 overflow-y-auto'>
                  {education.description}
                </p>
                <ScrollArea className='h-[500px]'>
                <FocusCards 
                  cards={learningJourney.items}
                  gridClassName="grid-cols-1 xl:grid-cols-2 gap-[30px]"
                />
              </ScrollArea>
              </div>

            </TabsContent>
            

              {/* Scroll → You need over 400px to scroll */}
              

            {/* skills */}
            <TabsContent value='skills' className='h-full w-full'>

              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  {/* <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {skills.description}
                  </p> */}

<div className="relative">
  {/* グローバルな背景設定 */}
  <div 
    className="fixed inset-0 -z-10" 
  />
  
  {/* タブコンテンツ */}
  <SkillTabs data={skillsData} />
</div>
                </div>

                
                {/* <ul className='grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]
                  gap-4'>
                  {skills.skillList.map((skill, index) => {
                    return (
                      <>
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329]
                              rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-accent
                              transition-all duration-300'>
                                {skill.icon}
                              </div>
                            </TooltipTrigger> */}
                            {/* tooltipとして表示したい文字🔻 */}
                            {/* <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                      </>
                    )
                  })}
                </ul> */}
              </div>
      {/* SkillTabs Component */}
 

            </TabsContent>

            {/* infomation*/}
            <TabsContent 
              value='about' 
              className='w-full text-center xl:text-left h-[130vh]'
            >
              {/* 全体 */}
              <div className='flex flex-col gap-[16px]'>

                      {/* <h3 className='text-4xl font-bold'>{about.title}</h3>
                      <p className='max-w-[100px] text-white/60 mx-auto xl:mx-0'>
                      </p> */}
              
              {/* outline num */}
              <GsapAnimatedElement variant="blurIn" duration={1} delay={0.2}>
                <div className='text-7xl leading-none font-extrabold text-transparent text-outline'>
                  {about.title}
                </div>
              </GsapAnimatedElement>
                
                      <div className='w-full'>
                        <AnimatedTestimonials 
                          testimonials={testimonials} 
                        />
                      </div>
               </div>
                {/* <ScrollArea className='h-[100vh]'> */}

              {/* Scroll → You need over 400px to scroll */}
                 {/* CARD */}
                     {/* <main ref={scrollAreaRef} className={styles.main}>
                      {
                        projects.map( (project, i) => {
                          const targetScale = 1 - ( (projects.length - i) * 0.05);
                          return <Card 
                                    key={`p_${i}`} 
                                    i={i} {...project} 
                                    progress={scrollYProgress} 
                                    scrollContainer={scrollAreaRef} // ⇦ここでscrollAreaRefをpropsとして渡す 検知エリアはここの範囲内と指定するため framerMotionのuseScrollへ渡しにいく。
                                    range={[i * .25, 1]} 
                                    targetScale={targetScale}
                                  />
                        })
                      }
                  </main> */}
              {/* </ScrollArea> */}

            </TabsContent>      
            

            {/* infomation */}
            <TabsContent value='infomation' className='w-full text-center xl:text-left h-[130vh]'>
  <div className='flex flex-col gap-[30px] max-w-[900px] mx-auto'>
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className='text-center xl:text-left mb-8'
    >
      <h3 className='text-5xl font-bold relative inline-block'>
        <span className='relative z-10'>{infomation.title}</span>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-20'></div>
      </h3>
    </motion.div>
    
    <motion.ul 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='grid grid-cols-1 xl:grid-cols-2 gap-6 mx-auto xl:mx-0'
    >
      {infomation.info.map((item, index) => (
        <motion.li 
          key={index}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className='relative group'
        >
          <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300'></div>
          <div className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl relative overflow-hidden group-hover:border-gray-600 transition-all duration-300'>
            <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-2xl transform rotate-45'></div>
            <span className='text-white/60 block mb-3 text-sm uppercase tracking-wider'>{item.fieldName}</span>
            <span className='text-2xl font-medium tracking-tight'>{item.fieldValue}</span>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  </div>
</TabsContent>

          </div>



        </Tabs>
      </div>

      </motion.div>


    {/* <main ref={container} className={styles.main}>
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </main> */}



  </>
  )
}