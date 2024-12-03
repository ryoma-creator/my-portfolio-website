import React from 'react'
import WorkImg from '../assets/projects/workImg.jpg'
import realEstate from '../assets/projects/realestate.jpg'

const Portfolio = [
    {
      image: WorkImg,
      title: 'React.JS Application',
      demoLink: 'https://example.com/demo1',
      codeLink: 'https://example.com/code1',
      demoText: 'View Demo',
      codeText: 'View Code'
    },
    {
      image: realEstate,
      title: 'Real Estate Application',
      demoLink: 'https://example.com/demo2',  
      codeLink: 'https://example.com/code2',
      demoText: 'View Demo',
      codeText: 'View Code'   
    },
    {
        image: WorkImg,
        title: 'React.JS Application',
        demoLink: 'https://example.com/demo1',
        codeLink: 'https://example.com/code1',
        demoText: 'View Demo',
        codeText: 'View Code'
      },
  ];


const Work = () => {
  return (
    <div className='work w-full md:h-screen'>
        <div className='common-screen-size common-layout'>
            <div className='pb-8'>
                <p className='common-border-b responsive-title-size '>
                    Portfolio
                </p>
                <p className='py-4'>Check out some of my recent Portfolio</p>
            </div>
{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center'>
             {/* Grid Item */}
          {Portfolio.map((work, index) => (
            <div 
                key={index}
                style={{backgroundImage: `url(${work.image})`}}  
                className='common-shadow group container rounded-md 
                            flex justify-center items-center mx-auto content-div'
                >
                    
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100 '>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        {work.title}
                    </span>
                    <div className='pt-8 text-center'>
                        <a href={work.demoLink}>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                {work.demoText}
                            </button>
                        </a>
                        <a href={work.codeLink}>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                {work.codeText}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            ))}

        </div>
    </div>
    </div>
  )
}

export default Work