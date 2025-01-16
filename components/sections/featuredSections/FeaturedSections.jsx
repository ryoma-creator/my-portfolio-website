'use client'

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Parallax } from 'react-parallax';
import Link from 'next/link'; 

export default function FeaturedSections() {
  const sections = [
    {
      category: "TECHNICAL EVOLUTION",
      title: "Portfolio Journey",
      points: [
        "5-phase development process",
        "Modern UI/UX implementation"
      ],
      action: "View Evolution",
      path: "/features/evolution",  // パスを/features/evolutionに修正
      image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416651/2150061957_bg4e9i.jpg"
    },
    {
      category: "DEVELOPMENT IMPACT",
      title: "Core Projects", 
      points: [
        "From CRUD to E-commerce",
        "Real-world problem solving"
      ],
      action: "View Projects",
      path: "/features/projects",  // こちらも/features/projectsに修正
      image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368943/law_wputac.jpg"
    }
  ];

 return (
   <section className="w-full py-24">
     {sections.map((section, index) => (
       <motion.div
         key={index}
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8, delay: index * 0.2 }}
       >
         <div className="container mx-auto px-16 mb-32">
           <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center`}>
             {/* テキストセクション */}
             <div className="w-full lg:w-1/2 flex flex-col items-center text-center space-y-8 px-16">
               <span className="text-sm uppercase tracking-wider text-gray-400">
                 {section.category}
               </span>
               <h2 className="text-4xl font-normal">
                 {section.title}
               </h2>
               <ul className="space-y-4 max-w-sm">
                 {section.points.map((point, i) => (
                   <li key={i} className="text-lg text-gray-600">
                     {point}
                   </li>
                 ))}
               </ul>
               <Link href={section.path}>
                 <motion.button
                   className="mt-4 group px-6 py-3 bg-accent rounded-full text-sm hover:bg-accent/80 transition-all duration-300 flex items-center gap-2"
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                 >
                   <span>{section.action}</span>
                   <svg 
                     className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="currentColor"
                   >
                     <path 
                       strokeLinecap="round" 
                       strokeLinejoin="round" 
                       strokeWidth={2} 
                       d="M14 5l7 7m0 0l-7 7m7-7H3" 
                     />
                   </svg>
                 </motion.button>
               </Link>
             </div>

             {/* イメージセクション */}
             <div className="w-full lg:w-1/2">
               <Parallax
                 bgImage={section.image}
                 strength={200}
                 className="aspect-square overflow-hidden rounded-lg max-w-[500px] mx-auto"
               >
                 <div style={{ height: '500px' }}>
                   <div className="w-full h-full transition-transform duration-700 hover:scale-105" />
                 </div>
               </Parallax>
             </div>
           </div>
         </div>
       </motion.div>
     ))}
   </section>
 );
}