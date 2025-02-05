import Link from 'next/link';

import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGlobe } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si';

const skills = [
    { icon: <FaReact />, path: '', name: 'React' },
    { icon: <FaHtml5 />, path: '', name: 'HTML' },
    { icon: <FaCss3Alt />, path: '', name: 'CSS' },
    { icon: <FaJs />, path: '', name: 'JavaScript' },
    { icon: <FaNodeJs />, path: '', name: 'Node.js' },
    { icon: <SiNextdotjs />, path: '', name: 'Next.js' },
    { icon: <SiTailwindcss />, path: '', name: 'Tailwind CSS' },
    { icon: <SiTypescript />, path: '', name: 'TypeScript' },
    // { icon: <FaGlobe />, path: '', name: 'Logical Thinking' }, // For global or logical thinking
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
        {skills.map((skill, index) => (
            <Link 
                key={index} 
                href={skill.path} 
                className={iconStyles}
                title={skill.name} // Adds tooltip with the skill name
                target={skill.path ? "_blank" : undefined} 
                rel={skill.path ? "noopener noreferrer" : undefined}
            >
                {skill.icon}
            </Link>
        ))}
    </div>
  );
};

export default Social;
