import React, { useState } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const projects = [
  {
    "title": "Determination to Become an IT Engineer",
    "description": [
      "Resolute decision to pursue IT career",
      "Full-time dedication to growth", 
      "Continuous learning and improvement"
    ],
    "details": "In February 2024, I made a firm resolution to become an IT engineer and resigned from my company. Since then, I have been dedicating myself full-time to continuously evolving and improving my skills, learning from failures along the way.",
    "skills": ["Determination", "Dedication", "Continuous Learning"],
    "src": "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368947/IA_xcpdqf.jpg",
    "link": "#roots",
    "color": "rgba(28, 28, 34, 0.8)"
  },
  {
    "title": "The Origin of Creativity - Childhood",
    "description": [
      "Immersed in anime culture",
      "Enjoyed drawing and crafting", 
      "Learned joy of collaboration"
    ],
    "details": "Growing up immersed in anime, I loved drawing and crafting toys based on my favorite characters. Sharing creations with friends taught me the joy of collaborating and creating together, laying the foundation for my passion in design.",
    "skills": ["Creativity", "Craftsmanship", "Collaboration"],
    "src": "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368946/august.idea_mm0s0v.jpg",
    "link": "#roots",
    "color": "rgba(28, 28, 34, 0.8)"
  },
  {
    "title": "Challenges and Growth as a Student",
    "description": [
      "Transferred to top university",
      "Intensive preparation in 6 months",
      "Mastered research and learning methods" 
    ],
    "details": "Seeking greater challenges, I decided to transfer to a university with Japan's top legal philosophy professor. Through 6 months of intensive study, using research techniques and learning methodologies of top performers, I successfully transferred.",
    "skills": ["Research", "Learning Methodology", "Perseverance"],  
    "src": "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368943/law_wputac.jpg",
    "link": "#education",
    "color": "rgba(28, 28, 34, 0.8)" 
  },
  {
    "title": "Global Perspectives from Denmark",
    "description": [
      "Studied in diverse environment",
      "Learned importance of collaboration", 
      "Developed cross-cultural flexibility"
    ],
    "details": "Inspired by my research, I studied abroad in Denmark's diverse 'mini-world.' There, I learned the importance of diversity and collaboration, developing the ability to work flexibly with people from various cultures, broadening my global perspective.",
    "skills": ["Global Perspective", "Cultural Adaptability", "Collaboration"],
    "src": "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416651/2150061957_bg4e9i.jpg",
    "link": "#international", 
    "color": "rgba(28, 28, 34, 0.8)"
  },
  {
    "title": "Career Challenge in Global Business",
    "description": [
      "Worked in foreign company", 
      "Overcame challenges living abroad",
      "Developed resilience and adaptability"  
    ],
    "details": "After graduating, I chose to work at a foreign company to leverage my global experiences. Living and working abroad presented unexpected challenges, but taught me resilience and how to thrive in unfamiliar environments.",
    "skills": ["Resilience", "Adaptability", "Global Business"],
    "src": "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416132/accenture_yvo1ec.jpg", 
    "link": "#professional",
    "color": "rgba(28, 28, 34, 0.8)"
  },
  {  
    "title": "Pursuit of Engineering Excellence",
    "description": [
      "Career shift to engineering",
      "Intensive self-study in web development", 
      "Built strong portfolio of projects"
    ],
    "details": "Currently, I am pursuing a transition into engineering, dedicating myself to mastering modern web development technologies through intensive self-study. I have completed several portfolio projects, honing my frontend development skills.",
    "skills": ["Web Development", "Self-Study", "Portfolio Building"], 
    "src": "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368948/gitc_ex573k.jpg",
    "link": "#technology",  
    "color": "rgba(28, 28, 34, 0.8)"
  }
];

const AboutMe = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (  
    <div className="w-full max-w-[1200px] mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>

      <ScrollArea className="w-full border-none">
        <div className="flex space-x-8 px-4">
          {projects.map((project, index) => (
            <div 
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'group w-[450px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg cursor-pointer relative',
                activeIndex === index ? 'ring-4 ring-blue-500' : 'ring-transparent',
              )}
            >
              <Image 
                src={project.src}
                alt={project.title}
                width={450}
                height={600}
                className="object-cover w-full h-[600px] transition duration-500 group-hover:scale-105"
              />
              <div 
                className={cn(
                  'absolute inset-0 flex flex-col p-8 transition duration-500',
                  activeIndex === index ? 'bg-transparent' : 'bg-[rgba(28,28,34,0.8)]'
                )}
              >
                <div className="flex-grow">  
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <ul className="list-disc list-inside text-white/80 mb-4">
                    {project.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setActiveIndex(index)}
                  className="flex items-center space-x-1 text-blue-400 hover:text-blue-500 transition"
                >
                  {activeIndex === index ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      <span>Hide details</span>  
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />   
                      <span>View details</span>
                    </>  
                  )}
                </button>

                {activeIndex === index && (  
                  <div className="mt-4 text-white/80">
                    <p>{project.details}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 text-sm bg-white/20 rounded-full">
                          {skill}
                        </span>
                      ))}  
                    </div>
                  </div>
                )}
                
              </div>
            </div>  
          ))}
        </div>

        <ScrollBar orientation="horizontal" className="rounded-full bg-gray-200 h-2 mt-4" />
      </ScrollArea>
      
    </div>
  );
};

export default AboutMe;