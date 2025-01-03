// components/ui/PageIndicator.jsx
'use client'

import { useEffect, useState } from 'react';

export default function PageIndicator({ sections = [] }) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // 各セクションの位置を確認
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => {
              document.getElementById(section.id)?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300
              ${activeSection === index 
                ? 'bg-accent h-8' 
                : 'bg-gray-500 hover:bg-gray-400'}`}
          >
            <span className="sr-only">{section.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}