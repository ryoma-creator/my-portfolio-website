'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight } from 'react-icons/bs';

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
  const [projects, setProject] = useState(projects[0]);
  return (
    <div>work page</div>
    
  );
};

export default Work;