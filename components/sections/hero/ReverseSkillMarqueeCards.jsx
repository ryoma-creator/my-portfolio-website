// components/sections/skills/SkillMarqueeCards.jsx
'use client'

import Marquee from 'react-fast-marquee';
import { PinContainer } from '@/components/ui/3d-pin';
import { skillsData } from '@/components/SkillTabs/skillsData';

export default function ReverseSkillMarqueeCards() {
  const skills = skillsData.tabs[0].skills;

  return (
    <div className="flex flex-col gap-4">
      <div className="rotate-180"> {/* Marqueeを逆さまにする */}
        <Marquee
          speed={30}
          gradient={false}
          className="py-6"
        >
          {skills.map((skill, index) => (
            <div key={index} className="mx-4 w-[200px] h-[150px] -rotate-180"> {/* コンテンツを正しい向きに戻す */}
              <PinContainer title={skill.name} href="#">
                <div className="relative p-[4px] group rounded-xl">
                  <div className="relative rounded-lg p-4 w-full h-full bg-primary">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-4 group">
                      <div className="text-3xl group-hover:scale-110 transition-all duration-300">
                        {skill.icon}
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-white/90">
                          {skill.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}