import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { ReactTyped } from 'react-typed';



const Home = () => {
  return (
    <div className='home common-screen-size'>

        {/* container */}
        <div className='common-layout'>
            <p>Junior Front End Developer</p>
            <h1 className= 'responsive-title-size'>Hello I'm</h1>
            <h2 className='text-green responsive-title-size'>Ryoma Taguchi</h2>
            <p className='text-[#8892b0] pt-4 max-w-[500px]'>
                Let's create something great together!
            </p>
            <ReactTyped 
                strings={[
                    'THANK YOU FOR COMING!',
                    'PLEASE TAKE A LOOK AT!', 
                    'LETS WORK TOGETHER!', 
                    'ILL DO MY BEST FOR YOU AND ME CAREER!',
                    'FEEL FREE TO CONTACT TO ME!',
                ]}
                typeSpeed={90} 
                backSpeed={50} 
                loop
                className='pb-4'
            />
            <div>
                <button className='group common-button-layout text-green px-6 py-2 my-2 rounded-full'>
                    View Work
                    <span className='group-hover:rotate-90 duration-300'>
                       <HiArrowNarrowRight className='ml-2'/>
                    </span>
                </button>
            </div>
        </div>

    </div>
  );
};

export default Home;