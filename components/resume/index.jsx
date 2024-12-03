'use client';
import styles from '@/Card/style.module.scss'
import { projects } from '@/components/Card/data';
import Card from '@/components/Card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis'
import ScrollVideoPlayerFramer from '@/components/ScrollVideoPlayerFramer';

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



// about data
const about = {
  title: 'About me',
  description:`I am a web developer passionate about creating interactive, 
  user-friendly applications using modern technologies like React and Node.js, Framer Motion, Gsap...etc.`,
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Ryoma Taguchi'
    },
    {
      fieldName: 'Experiece',
      fieldValue: 'Since 2024 March'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Japanese'
    },
    {
      fieldName: 'Email',
      fieldValue: 'barucelona.fc.111326@gmail.com'
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

// experience data
const experience = {
  icon: '',
  title: 'My experience',
  description: 
    `I am a web developer passionate about creating interactive, 
    user-friendly applications using modern technologies like React and Node.js, Framer Motion, Gsap...etc.`,
  items: [
    {
      company: 'Accenture',
      position: 'Analyst',
      duration: '2022 - 2024 Mar',
      url: '',
    },
    {
      company: 'self-taught',
      position: 'Front End Development',
      duration: '2024 Mar - Present',
    },
    {
      company: 'Accenture',
      position: 'Analyst',
      duration: '2022 - 2024 Mar',
      url: '',
    },
    {
      company: 'self-taught',
      position: 'Front End Development',
      duration: '2024 Mar - Present',
    },
    {
      company: 'Accenture',
      position: 'Analyst',
      duration: '2022 - 2024 Mar',
      url: '',
    },
    {
      company: 'self-taught',
      position: 'Front End Development',
      duration: '2024 Mar - Present',
    },
    {
      company: 'Accenture',
      position: 'Analyst',
      duration: '2022 - 2024 Mar',
      url: '',
    },
    {
      company: 'self-taught',
      position: 'Front End Development',
      duration: '2024 Mar - Present',
    },
  ]
}

// education data
const education = {
  icon: '',
  title: 'My education',
  description: 
    `I am a web developer passionate about creating interactive, 
    user-friendly applications using modern technologies like React and Node.js, Framer Motion, Gsap...etc.`,
  items: [
    {
      institution: 'Meiji Gakuin Universitiy',
      degree: 'Law',
      duration: '2012 - 2018 Mar',
      url: '',
    },
    {
      institution: 'self-taught',
      de: 'Front End Development',
      duration: '2024 Mar - Present',
      url: '',
    },
    {
      institution: 'Odin Project',
      degree: 'Front End Development',
      duration: '2024 Mar - Present',
      url: '',
    },
    {
      institution: 'Progate',
      degree: 'Front End Development, Node js',
      duration: '2024 Mar - May',
      url: '',
    },
    {
      institution: 'dot.install',
      degree: 'Front End Development',
      duration: '2024 Mar - May',
      url: '',
    },
  ]
}

// skills data
const skills = {
  title: 'My skills',
  description: 
    `I am a web developer passionate about creating interactive, 
    user-friendly applications using modern technologies like React, Node.js, Framer Motion, Gsap...etc.`,
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

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';


export default function resume() {
  // ローカルストレージから保存された値を取得、なければ 'experience' をデフォルト値として使用
  const [activeTab, setActiveTab] = useState('experience');
  const [mounted, setMounted] = useState(false);

  // const container = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ['start start', 'end end']
  // })

  // マウント状態を管理
  useEffect(() => {
    setMounted(true);
    const savedTab = localStorage.getItem('activeResumeTab');
    if (savedTab) {
      setActiveTab(savedTab);
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
  // useEffect( () => {
  //   const lenis = new Lenis()

  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)
  // })

  return (
  <>
    <motion.div
      initial={{ opacity:0 }}
      animate={{ 
        opacity:1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn'},
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      
    </motion.div>

    <motion.div
      initial={{ opacity:0 }}
      animate={{ 
        opacity:1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn'},
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
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
          gap-6'>
            <TabsTrigger value='about'>About me</TabsTrigger>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[70vh] w-full'>

            {/* experience */}
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
              {/* Scroll → You need over 400px to scroll */}
              <ScrollArea className='h-[400px]'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {experience.items.map((item, index)=> {
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
                        <div className='flex items-center '>
                          {/* dot */}
                          <span className='w-[6px] h-[6px] rounded-full
                          bg-accent'></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>

              </div>
          
            </TabsContent>

            {/* education */}
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
              {/* Scroll → You need over 400px to scroll */}
              <ScrollArea className='h-[400px]'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {education.items.map((item, index)=> {
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
                          {item.degree}
                        </h3>
                        <div className='flex items-center '>
                          {/* dot */}
                          <span className='w-[6px] h-[6px] rounded-full
                          bg-accent'></span>
                          <p className='text-white/60'>{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>

              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {skills.description}
                  </p>
                </div>
                <ul className='grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]
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
                            </TooltipTrigger>
                            {/* tooltipとして表示したい文字🔻 */}
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                      </>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent 
              value='about' 
              className='w-full text-center xl:text-left'
            >
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li 
                        key={index}
                        className='flex items-center justify-center xl:justify-start
                        gap-4'
                      >
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
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