'use client';

import { ReactNode } from 'react';
import GsapAnimatedElement from '@/components/scroll/GsapAnimatedElement';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import { achievements } from '@/components/scroll/HorizontalScrollText/achievements';
import SkillTabs from '@/components/SkillTabs';
import { skillsData } from '@/components/SkillTabs/skillsData';
import { FocusCards } from '@/components/ui/focus-cards';
import AchievementList from '@/components/AchievementList';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
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
} from 'react-icons/si';
import { useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { projects } from '@/components/Card/data';

// Interface definitions
interface InfoItem {
  fieldName: string;
  fieldValue: string;
}

interface Information {
  title: string;
  description: string;
  info: InfoItem[];
}

interface About {
  title: string;
  description: string;
  info: any[];
}

interface LearningJourneyItem {
  institution: string;
  degree: string;
  duration: string;
  backgroundImage: string;
  url: string;
}

interface LearningJourney {
  icon: string;
  title: string;
  description: string;
  items: LearningJourneyItem[];
}

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  url: string;
}

interface Education {
  icon: string;
  title: string;
  description: string;
  items: EducationItem[];
}

interface Skill {
  icon: ReactNode;
  name: string;
}

interface Skills {
  title: string;
  description: string;
  skillList: Skill[];
}

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

// Transform project data to testimonials format
const testimonials: Testimonial[] = projects.map(project => ({
  quote: project.description,
  name: project.title.split('-')[0]?.trim() || project.title,
  designation: project.title.split('-')[1]?.trim() || '',
  src: project.src
}));
// Data configurations
const infomation: Information = {
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
      fieldValue: 'ryoma.t.engineer@gmail.com'
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

const about: About = {
  title: 'About Me',
  description:`I am a problem-solver transitioning into frontend development, combining analytical 
  skills honed through legal studies with international learningJourney across Europe and 
  Asia. Passionate about creating interactive web applications using React, Next.js, 
  and modern technologies while bringing a unique perspective from working at a global 
  tech consulting firm. Currently dedicated to building my portfolio while actively 
  learning and implementing new technologies.`,
  info: []
}

// Learning journey data
const learningJourney: LearningJourney = {
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
        backgroundImage: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368943/law_wputac.jpg',
        url: 'https://www.meijigakuin.ac.jp/en/academics/faculty/law/law.html',
      },
      {
        institution: 'International People's College',
        degree: 'Study Abroad - Denmark',
        duration: '2017 Mar - 2017 Sep',
        backgroundImage: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368948/IPC_gtotjt.webp',
        url: 'https://ipc.dk/',
      },
      {
        institution: 'GITC',
        degree: 'Study Abroad - Philippines',
        duration: '2018 Mar - 2018 Sep',
        backgroundImage: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368948/gitc_ex573k.jpg',
        url: 'http://gitc.edu.ph/en/',
      },
      {
        institution: 'Japan Internet Academy',
        degree: 'Web Design',
        duration: '2020 Mar - 2020 Sep',
        backgroundImage: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368947/IA_xcpdqf.jpg',
        url: 'https://www.internetacademy.jp/',
      },
      {
        institution: 'Accenture',
        degree: 'Analyst',
        duration: '2022 Feb - 2024 Mar',
        backgroundImage: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416132/accenture_yvo1ec.jpg',
        url: 'https://www.accenture.com/ph-en',
      },
      {
        institution: 'self-taught (FULL TIME Commitment!⇦)',
        degree: 'Front End Development',
        duration: '2024 Mar - PRESENT',
        backgroundImage: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416651/2150061957_bg4e9i.jpg',
        url: '',
      },
      {
        institution: 'DMM English',
        degree: 'Others - Study Online English School',
        duration: '2012 Mar - PRESENT',
        backgroundImage: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368948/online_hdi0zk.jpg',
        url: 'https://eikaiwa.dmm.com/',
      },
    ]
}

// Education/Career data
const education: Education = {
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

// Skills configuration
const skills: Skills = {
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

export default function Resume(): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>('learningJourney');
  const [mounted, setMounted] = useState<boolean>(false);

  const container = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollAreaRef,
    offset: ['end end', 'end end']
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMounted(true);
      const savedTab = localStorage.getItem('activeResumeTab');
      if (savedTab) {
        setActiveTab(savedTab);
      }
    }
  }, []);

  const handleTabChange = (value: string): void => {
    setActiveTab(value);
    localStorage.setItem('activeResumeTab', value);
  };

  if (!mounted) {
    return <div></div>;
  }

  return (
  <>
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
      {/* Navigation tabs */}
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

    {/* Main content area */}
    <div className='min-h-[70vh] w-full'>

      {/* Technical Evolution Path tab */}
      <TabsContent value='learningJourney' className='w-full'>
        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
          <AchievementList achievements={achievements} />

          <ScrollArea 
            className='w-[400px]'
            ref={container}
          >
            <div className='flex space-x-4'>
            </div>
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

      {/* Career tab */}
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

      {/* Skills tab */}
      <TabsContent value='skills' className='h-full w-full'>
        <div className='flex flex-col gap-[30px]'>
          <div className='flex flex-col gap-[30px] text-center xl:text-left'>
            <div className="relative">
              <div className="fixed inset-0 -z-10" />
              <SkillTabs data={skillsData} />
            </div>
          </div>
        </div>
      </TabsContent>

      {/* About Me tab */}
      <TabsContent 
        value='about' 
        className='w-full text-center xl:text-left h-[130vh]'
      >
        <div className='flex flex-col gap-[16px]'>
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
      </TabsContent>

      {/* Information tab */}
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
            {infomation.info.map((item: InfoItem, index: number) => (
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
</>
)
}