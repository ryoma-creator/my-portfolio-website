'use client'

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Parallax } from 'react-parallax';
import Link from 'next/link'; 

export default function DetailedStrengths() {
  const experiences = [
    {
      category: "FROM ANALYTICS",
      title: "Analytics",
      points: [
        "Data-driven problem solving",
        "Structured analytical approach"
      ],
      action: "Learn more",
      path: "/strengths/analytics",
      image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368943/law_wputac.jpg"
    },
    {
      category: "FROM GLOBAL",
      title: "Bilingual", 
      points: [
        "Native Japanese + Business English",
        "Cross-cultural communication"
      ],
      action: "Learn more",
            path: "/strengths/bilingual",
      image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416132/accenture_yvo1ec.jpg"
    },
    {
      category: "FROM DEVELOPMENT",
      title: "Development",
      points: [
        "Modern frontend technologies",
        "Responsive web applications"
      ],
      action: "Learn more",
      path: "/strengths/development",
      image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416651/2150061957_bg4e9i.jpg"
    },
    {
      category: "FROM GROWTH",
      title: "Growth",
      points: [
        "Rapid skill acquisition",
        "Continuous improvement mindset"
      ],
      action: "Learn more",
      path: "/strengths/growth",
      image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734419563/uparrow_s4upbg.jpg"
    }
  ];

  return (
    <section className="w-full py-24">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <div className="container mx-auto px-16 mb-32">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              {/* テキストセクション */}
              <div className="w-full lg:w-1/2 flex flex-col items-center text-center space-y-6">
                <span className="text-sm uppercase tracking-wider text-gray-400">
                  {exp.category}
                </span>
                <h2 className="text-4xl font-normal">
                  {exp.title}
                </h2>
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-lg text-gray-600">
                      {point}
                    </li>
                  ))}
                </ul>
                <Link href={exp.path}>
  <motion.button
    className="group px-6 py-3 bg-accent rounded-full text-sm hover:bg-accent/80 transition-all duration-300 flex items-center gap-2"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span>{exp.action}</span>
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

              {/* イメージ（パララックス効果付き） */}
              <div className="w-full lg:w-1/2">
                <Parallax
                  bgImage={exp.image}
                  strength={200}
                  className="aspect-[16/9] overflow-hidden rounded-lg"
                >
                  <div style={{ height: '400px' }}>
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