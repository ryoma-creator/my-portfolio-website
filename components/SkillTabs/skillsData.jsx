// components/SkillTabs/skillsData.js

import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiTailwindcss,
    SiNextdotjs,
    SiFramer,
    SiTypescript,
  } from 'react-icons/si';
  
  import { 
    CodeIcon,
    Brain, 
    Globe,
    Scale,
    BookOpen,
    Search,
    PenTool,
    MessageSquare,
    Handshake,
    Users,
    GraduationCap,
    Globe2,
    Languages,
    Lightbulb,
    Heart
  } from 'lucide-react';
  export const skillsData = {
    title: 'My Skills',
    description: 'Through six months of intensive self-study and practical projects',
    tabs: [
        {
            id: 'technical',
            label: 'Technical',
            icon: <CodeIcon />,
            backgroundImage: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416651/2150061957_bg4e9i.jpg',
            skills: [
                { 
                  icon: <SiHtml5 />, 
                  name: 'HTML 5', 
                  color: '#E34F26',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416132/accenture_yvo1ec.jpg'
                },
                { 
                  icon: <SiCss3 />, 
                  name: 'CSS 3', 
                  color: '#1572B6',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368948/gitc_ex573k.jpg'
                },
                { 
                  icon: <SiJavascript />, 
                  name: 'JavaScript', 
                  color: '#F7DF1E',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368947/IA_xcpdqf.jpg'
                },
                { 
                  icon: <SiReact />, 
                  name: 'React', 
                  color: '#61DAFB',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368948/IPC_gtotjt.webp'
                },
                { 
                  icon: <SiNodedotjs />, 
                  name: 'Node.js', 
                  color: '#339933',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368943/law_wputac.jpg'
                },
                { 
                  icon: <SiTailwindcss />, 
                  name: 'Tailwind CSS', 
                  color: '#06B6D4',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734419454/march_g0f1gh.jpg'
                },
                { 
                  icon: <SiNextdotjs />, 
                  name: 'Next.js', 
                  color: '#000000',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368948/online_hdi0zk.jpg'
                },
                { 
                  icon: <SiFramer />, 
                  name: 'Framer Motion', 
                  color: '#0055FF',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734419452/ready_xlobf3.jpg'
                },
                { 
                  icon: <SiTypescript />, 
                  name: 'TypeScript', 
                  color: '#3178C6',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734419337/storybook_mcygbx.jpg'
                },
                { 
                  icon: <SiFramer />, 
                  name: 'SVG Animation', 
                  color: '#FF61F6',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734419563/uparrow_s4upbg.jpg'
                }
            ]
        },
        {
            id: 'legal-mind',
            label: 'Legal Mind',
            icon: <Brain />,
            backgroundImage: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368943/law_wputac.jpg',
            skills: [
                { 
                  icon: <Scale />, 
                  name: 'Legal Analysis', 
                  color: '#4A90E2',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734419337/storybook_mcygbx.jpg'
                },
                { 
                  icon: <BookOpen />, 
                  name: 'Critical Thinking', 
                  color: '#9B59B6',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734419454/march_g0f1gh.jpg'
                },
                { 
                  icon: <Search />, 
                  name: 'Research Skills', 
                  color: '#3498DB',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734419456/coming-soon_uwc74q.jpg'
                },
                { 
                  icon: <PenTool />, 
                  name: 'Legal Writing', 
                  color: '#2ECC71',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416132/accenture_yvo1ec.jpg'
                },
                { 
                  icon: <MessageSquare />, 
                  name: 'Argumentation', 
                  color: '#E74C3C',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416651/2150061957_bg4e9i.jpg'
                },
                { 
                  icon: <Handshake />, 
                  name: 'Negotiation', 
                  color: '#F1C40F',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368948/gitc_ex573k.jpg'
                },
                { 
                  icon: <Users />, 
                  name: 'Client Relations', 
                  color: '#1ABC9C',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368947/IA_xcpdqf.jpg'
                }
            ]
        },
        {
            id: 'global',
            label: 'Global',
            icon: <Globe />,
            backgroundImage: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368948/IPC_gtotjt.webp',
            skills: [
                { 
                  icon: <GraduationCap />, 
                  name: 'Danish Education', 
                  color: '#C0392B',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368948/IPC_gtotjt.webp'
                },
                { 
                  icon: <Globe2 />, 
                  name: 'Cross-cultural Communication', 
                  color: '#27AE60',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368943/law_wputac.jpg'
                },
                { 
                  icon: <Languages />, 
                  name: 'Multilingual Skills', 
                  color: '#8E44AD',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734419454/march_g0f1gh.jpg'
                },
                { 
                  icon: <Lightbulb />, 
                  name: 'Global Perspective', 
                  color: '#F39C12',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368948/online_hdi0zk.jpg'
                },
                { 
                  icon: <Heart />, 
                  name: 'Cultural Empathy', 
                  color: '#E91E63',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734419452/ready_xlobf3.jpg'
                },
                { 
                  icon: <Handshake />, 
                  name: 'International Networking', 
                  color: '#00BCD4',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734419337/storybook_mcygbx.jpg'
                },
                { 
                  icon: <Users />, 
                  name: 'Team Collaboration', 
                  color: '#009688',
                  background: 'https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734419563/uparrow_s4upbg.jpg'
                }
            ]
        }
    ]
 };