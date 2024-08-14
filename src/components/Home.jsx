import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div class='home' className=''>

        {/* container */}
        <div className='common-container-layout mx-auto px-8'>
            <p>Junior Front End Developer</p>
            <h1 className= 'responsive-title-size'>Hello I'm</h1>
            <h2 className='text-green responsive-title-size'>Ryoma Taguchi</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                I love crafting user-friendly interfaces and am currently honing my React skills. 
                Let's create something great together!
            </p>
            <div>
                <button className='group text-green border-green border-2 px-6 py-2 my-2 flex items-center hover:bg-[#80E080] hover:border-[#80E080] hover:text-white duration-300 rounded-full'>
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