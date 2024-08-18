import React from 'react'
import ProblemSolvingIcon from '../assets/problem-solving.png';
import LogicalThinkingIcon from '../assets/logical-thinking.png';
import AnalyticalReasoningIcon from '../assets/analytical-reasoning.png';
import AIIcon from '../assets/ai.png';

const coreSkills = [
    { src: ProblemSolvingIcon, alt: 'Problem-Solving icon', name: 'Problem-Solving' },
    { src: LogicalThinkingIcon, alt: 'Logical Thinking icon', name: 'Logical Thinking' },
    { src: AnalyticalReasoningIcon, alt: 'Analytical Reasoning icon', name: 'Analytical Reasoning' },
    { src: AIIcon, alt: 'AI Proficiency icon', name: 'AI Proficiency' }
  ];
  
  const CoreSkills = () => {
    return (
      <div className='skills common-screen-size'>
          {/* Container */}
          <div className='common-layout'>

              <div>
                  <p className='responsive-title-size common-border-b'>Skills</p>
                  <p className='py-4'>I've learned HTML, CSS, JavaScript, and React. I’m also skilled in Git, Tailwind CSS, and various front-end libraries with Ai.</p>
              </div>
          <div className='grid grid-cols-3 sm:grid-cols-3 gap-4 text-center py-8'>
            {coreSkills.map((skill, index) => (
  
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-16 mx-auto' src={skill.src} alt="skill.alt" />
                    <p className='my-4'>{skill.name}</p>
                  </div>
            ))}
              </div>
          </div>
      </div>
    );
  };

export default CoreSkills;