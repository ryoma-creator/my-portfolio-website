import React from 'react'
import WorkImg from '../assets/projects/workImg.jpg'
import realEstate from '../assets/projects/realestate.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen'>
        <div className='common-screen-size common-layout'>
            <div className='pb-8'>
                <p className='common-border-b responsive-title-size '>
                    Portfolio
                </p>
                <p className='py-4'>Check out some of my recent Portfolio</p>
            </div>

        <div style={{backgroundImage: `url(${WorkImg})`}}
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center'>
            <div className='common-shadow group container rounded-md content-div flex justify-center items-center mx-auto'>
            {/* flex justify-center items-center mx-auto */}
                
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React.JS Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Work