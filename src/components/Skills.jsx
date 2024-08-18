import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
// import Node from '../assets/node.png';
// import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
// import Mongo from '../assets/mongo.png';

const skills = [
  { src: HTML, alt: 'HTML icon', name: 'HTML' },
  { src: CSS, alt: 'CSS icon', name: 'CSS' },
  { src: JavaScript, alt: 'JavaScript icon', name: 'JavaScript' },
  { src: ReactImg, alt: 'React icon', name: 'React' },
  { src: GitHub, alt: 'GitHub icon', name: 'GitHub' },
  { src: Tailwind, alt: 'Tailwind CSS icon', name: 'Tailwind CSS' },
];

const Skills = () => {
  return (
    <div className='skills common-screen-size'>
        {/* Container */}
        <div className='common-layout'>
            <div>
                <p className='responsive-title-size common-border-b'>Skills</p>
                <p className='py-4'>I've learned HTML, CSS, JavaScript, and React. I’m also skilled in Git, Tailwind CSS, and various front-end libraries with Ai.</p>
            </div>
        <div className='grid grid-cols-3 sm:grid-cols-3 gap-4 text-center py-8'>
          {skills.map((skill, index) => (

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

export default Skills