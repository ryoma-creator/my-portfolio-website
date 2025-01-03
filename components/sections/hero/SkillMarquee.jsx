// components/sections/hero/SkillMarquee.jsx
'use client'

import Marquee from 'react-fast-marquee';

export default function SkillMarquee({
  speed = 50,
  direction = 'left',
}) {
  // コンポーネント内でスキルデータを管理
  const skillRows = [
    // 1行目: テクニカルスキル
    [
      { text: "React", color: "text-cyan-500" },
      { text: "TypeScript", color: "text-blue-500" },
      { text: "Next.js", color: "text-gray-500" },
      { text: "Tailwind CSS", color: "text-teal-500" },
      { text: "Node.js", color: "text-green-500" },
    ],
    // 2行目: ソフトスキル＆ビジネススキル
    [
      { text: "Global Communication", color: "text-purple-500" },
      { text: "Problem Solving", color: "text-red-500" },
      { text: "Team Leadership", color: "text-amber-500" },
      { text: "Project Management", color: "text-indigo-500" },
    ],
    // 3行目: 専門分野
    [
      { text: "Performance Optimization", color: "text-rose-500" },
      { text: "Cross-Cultural Collaboration", color: "text-blue-500" },
      { text: "Technical Architecture", color: "text-emerald-500" },
      { text: "Code Quality", color: "text-orange-500" },
    ]
  ];

  return (
    <div className="flex flex-col gap-1">
      {skillRows.map((skills, rowIndex) => (
        <Marquee
          key={rowIndex}
          speed={speed}
          direction={rowIndex % 2 === 0 ? direction : (direction === 'left' ? 'right' : 'left')}
          gradient={false}
          className="py-4 bg-gray-900/20"
        >
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`
                mx-8 px-6 py-2 
                text-responsive-md font-bold 
                ${skill.color}
                transition-all duration-300 hover:scale-110
              `}
            >
              {skill.text}
            </div>
          ))}
        </Marquee>
      ))}
    </div>
  );
}