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
            backgroundImage: '/assets/about/dev.jpg',
            skills: [
                { 
                  icon: <SiHtml5 />, 
                  name: 'HTML 5', 
                  color: '#E34F26',
                  background: '/assets/about/company.jpg'
                },
                { 
                  icon: <SiCss3 />, 
                  name: 'CSS 3', 
                  color: '#1572B6',
                  background: '/assets/about/gitc.jpg'
                },
                { 
                  icon: <SiJavascript />, 
                  name: 'JavaScript', 
                  color: '#F7DF1E',
                  background: '/assets/about/IA.jpg'
                },
                { 
                  icon: <SiReact />, 
                  name: 'React', 
                  color: '#61DAFB',
                  background: '/assets/about/IPC.jpg'
                },
                { 
                  icon: <SiNodedotjs />, 
                  name: 'Node.js', 
                  color: '#339933',
                  background: '/assets/about/law.jpg'
                },
                { 
                  icon: <SiTailwindcss />, 
                  name: 'Tailwind CSS', 
                  color: '#06B6D4',
                  background: '/assets/about/march.jpg'
                },
                { 
                  icon: <SiNextdotjs />, 
                  name: 'Next.js', 
                  color: '#000000',
                  background: '/assets/about/online.jpg'
                },
                { 
                  icon: <SiFramer />, 
                  name: 'Framer Motion', 
                  color: '#0055FF',
                  background: '/assets/about/ready.jpg'
                },
                { 
                  icon: <SiTypescript />, 
                  name: 'TypeScript', 
                  color: '#3178C6',
                  background: '/assets/about/september.jpg'
                },
                { 
                  icon: <SiFramer />, 
                  name: 'SVG Animation', 
                  color: '#FF61F6',
                  background: '/assets/about/start.jpg'
                }
            ]
        },
        {
            id: 'legal-mind',
            label: 'Legal Mind',
            icon: <Brain />,
            backgroundImage: '/assets/about/law.jpg',
            skills: [
                { 
                  icon: <Scale />, 
                  name: 'Legal Analysis', 
                  color: '#4A90E2',
                  background: '/assets/about/story.jpg'
                },
                { 
                  icon: <BookOpen />, 
                  name: 'Critical Thinking', 
                  color: '#9B59B6',
                  background: '/assets/about/childhood.jpg'
                },
                { 
                  icon: <Search />, 
                  name: 'Research Skills', 
                  color: '#3498DB',
                  background: '/assets/about/coming-soon.jpg'
                },
                { 
                  icon: <PenTool />, 
                  name: 'Legal Writing', 
                  color: '#2ECC71',
                  background: '/assets/about/company.jpg'
                },
                { 
                  icon: <MessageSquare />, 
                  name: 'Argumentation', 
                  color: '#E74C3C',
                  background: '/assets/about/dev.jpg'
                },
                { 
                  icon: <Handshake />, 
                  name: 'Negotiation', 
                  color: '#F1C40F',
                  background: '/assets/about/gitc.jpg'
                },
                { 
                  icon: <Users />, 
                  name: 'Client Relations', 
                  color: '#1ABC9C',
                  background: '/assets/about/IA.jpg'
                }
            ]
        },
        {
            id: 'global',
            label: 'Global',
            icon: <Globe />,
            backgroundImage: '/assets/about/IPC.jpg',
            skills: [
                { 
                  icon: <GraduationCap />, 
                  name: 'Danish Education', 
                  color: '#C0392B',
                  background: '/assets/about/IPC.jpg'
                },
                { 
                  icon: <Globe2 />, 
                  name: 'Cross-cultural Communication', 
                  color: '#27AE60',
                  background: '/assets/about/law.jpg'
                },
                { 
                  icon: <Languages />, 
                  name: 'Multilingual Skills', 
                  color: '#8E44AD',
                  background: '/assets/about/march.jpg'
                },
                { 
                  icon: <Lightbulb />, 
                  name: 'Global Perspective', 
                  color: '#F39C12',
                  background: '/assets/about/online.jpg'
                },
                { 
                  icon: <Heart />, 
                  name: 'Cultural Empathy', 
                  color: '#E91E63',
                  background: '/assets/about/ready.jpg'
                },
                { 
                  icon: <Handshake />, 
                  name: 'International Networking', 
                  color: '#00BCD4',
                  background: '/assets/about/september.jpg'
                },
                { 
                  icon: <Users />, 
                  name: 'Team Collaboration', 
                  color: '#009688',
                  background: '/assets/about/start.jpg'
                }
            ]
        }
    ]
  };