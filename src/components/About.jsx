import React from 'react'

const About = () => {
  return (
    <div className='about common-screen-size'>
        <div className='common-layout'>

            <div className='grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                     <p className='responsive-title-size inline border-b-4 border-green'>
                        About
                    </p>                    
                </div>                   
             </div>
            <div className='grid sm:grid-cols-2 gap-8 px-4'>
                <div className='responsive-title-size sm:text-right'>
                    <p>Hi.I'm Ryoma,nice to meet you.Please take a look around.</p>
                </div>
                <div>
                    <p>I'm currently building this portfolio site to become a junior developer. 
                        I enjoy creating user-friendly interfaces and am passionate 
                        about learning new technologies.
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About