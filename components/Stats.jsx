'use client'

import CountUp from 'react-countup';


const stats = [
    {
        num: 900,
        text: 'Hours of learning',
    },
    {
        num: 300,
        text: 'Claude sessions',
    },
    {
        num: 200,
        text: 'Gym visits',
    },
    {
        num: 1000,
        text: 'Cups of coffee consumed',
    },
]

const Stats = () => {
  return (
    <section>
        <div className='container'>
            <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
                {stats.map((stat, index)=>{
                    return (
                        <div
                          className='flex-1 flex gap-4 items-center justify-center
                          xl:justify-start' 
                          key={index}>
                            <CountUp
                                end={stat.num}
                                duration={5}
                                delay={2}
                                className='text-4xl xl:text-6xl font-extrabold'
                            />
                            <p
                                className={`${
                                    stat.text.length < 15 ? 'max-w-[100px]':'max-w-[150px]'
                                } leading-snug text-white/80`}
                            >{stat.text}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
  );
};

export default Stats;