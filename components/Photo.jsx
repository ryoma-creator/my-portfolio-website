'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className='w-full h-full relative'>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration:0.4, ease: 'easeIn' },

            }}
        >
            {/* image */}
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration:0.4, ease: 'easeInOut' },

            }}                       
            className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]
             mix-blend-lighten absolute'>
                <Image 
                    src=""
                    priority
                    quality={75}
                    fill
                    alt='Home Picture'
                    className='object-contain'
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </motion.div>
            {/* quality={75}〜quality={85}程度でも十分な品質が得られ、読み込み速度が改善される可能性があります。 */}
            {/* sizeを追加 */}

            {/* circle */}
            <motion.svg 
                className='w-[300px] h-[300px] xl:w-[506px] xl:h-[506px] '
                fill='transparent'
                viewBox='0 0 506 506'
            >

                <defs>
                    <filter id="shadow">
                        <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#00ff99" />
                    </filter>
                </defs>

                <motion.circle 
                    filter="url(#shadow)"
                    cx='253'
                    cy='253'
                    r='250'
                    stroke='url(#gradientStroke)'  // グラデーションを適用
                    strokeWidth='4'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    initial={{ strokeDasharray: '24 10 0 0' }}
                    animate={{
                        strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
                        rotate: [120, 360],
                    }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
                />
            </motion.svg>

        </motion.div>
    </div>
  );
};

export default Photo;

