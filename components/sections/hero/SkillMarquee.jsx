// components/sections/hero/SkillMarquee.jsx
'use client'

import Marquee from 'react-fast-marquee';

export default function SkillMarquee({
  speed = 50,
  direction = 'left',
}) {
  const skillRows = [
    // 1行目: テクニカルスキル
    [
      { text: "React", color: "text-cyan-500" },
      { text: "TypeScript", color: "text-blue-500" },
      { text: "Next.js", color: "text-gray-500" },
      { text: "Tailwind CSS", color: "text-teal-500" },
      { text: "Node.js", color: "text-green-500" },
    ],
    // その他の行も同様
  ];

  return (
    <div className="flex flex-col gap-1">
      {skillRows.map((skills, rowIndex) => (
        <Marquee
          key={rowIndex}
          speed={speed}
          direction={rowIndex % 2 === 0 ? direction : (direction === 'left' ? 'right' : 'left')}
          gradient={false}
          className="py-4 bg-primary"
        >
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`
                mx-8 px-6 py-2 
                text-responsive-md font-extrabold
                transition-all duration-300 hover:scale-110
              `}
              style={{
                color: 'rgba(255, 255, 255, 0.03)',  // テキストを半透明に
                textStroke: '1px rgba(255, 255, 255, 0.2)',
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)',
                textShadow: '0 0 30px rgba(255, 255, 255, 0.1)'
              }}
            >
              {skill.text}
            </div>
          ))}
        </Marquee>
      ))}
    </div>
  );
}