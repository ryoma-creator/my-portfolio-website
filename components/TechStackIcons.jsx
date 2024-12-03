import React from 'react';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { FaReact, FaCss3Alt, FaJs, FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiFramer, SiTypescript, SiPostman } from 'react-icons/si';

const techIcons = {
  'React': { icon: FaReact, color: '#61DAFB' },
  'CSS': { icon: FaCss3Alt, color: '#1572B6' },
  'JavaScript': { icon: FaJs, color: '#F7DF1E' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'Tailwind': { icon: SiTailwindcss, color: '#06B6D4' },
  'Next.js': { icon: SiNextdotjs, color: '#000000' },
  'Framer Motion': { icon: SiFramer, color: '#0055FF' },
  'Node.js': { icon: FaNode, color: '#339933' },
  'API': { icon: SiPostman, color: '#339933' },
  
};

const TechStackIcons = ({ stack }) => {
  return (
    <div className="flex gap-2">
      {stack.map((tech, index) => {
        const IconComponent = techIcons[tech]?.icon;
        return (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger>
                <div className="w-20 h-20 flex items-center justify-center 
                rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  {IconComponent && 
                  <IconComponent 
                    className="text-6xl" 
                    style={{ color: techIcons[tech].color }} 
                  />}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{tech}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

export default TechStackIcons;