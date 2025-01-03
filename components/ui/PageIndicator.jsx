// components/ui/PageIndicator.jsx
'use client'

import { useEffect, useState } from 'react';

export default function PageIndicator({ sections = [] }) {
  const [activeSection, setActiveSection] = useState(0);

  // スクロール位置を監視し、アクティブセクションを更新
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - windowHeight / 2 &&
            scrollPosition < offsetTop + offsetHeight - windowHeight / 2
          ) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期位置を設定

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // スムーズスクロール関数
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // スムーズスクロールのオプションを追加
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(section.id)}
            className={`
              group relative 
              w-3 h-3 rounded-full 
              transition-all duration-300
              ${activeSection === index 
                ? 'bg-accent h-8' 
                : 'bg-gray-500 hover:bg-gray-400'}
            `}
            aria-label={`Scroll to ${section.name}`}
          >
            {/* ホバー時にセクション名を表示 */}
            <span className="
              absolute right-full mr-4 
              whitespace-nowrap 
              opacity-0 group-hover:opacity-100
              transition-opacity duration-200
              text-sm text-white
            ">
              {section.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}