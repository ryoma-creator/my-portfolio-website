'use client';

import { useRef } from "react";
// import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';

// Import your images here
// import Picture1 from '@/public/medias/pexels-lisettkruusimae-13076223.jpg';
// import Picture2 from '@/public/medias/pexels-nati-87264186-12531220.jpg';
// import Picture3 from '@/public/medias/pexels-ron-lach-10536285.jpg';

const word = "with framer-motion";

export default function ParallaxScroll() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const images = [
        // { src: Picture1, y: 0 },
        // { src: Picture2, y: lg },
        // { src: Picture3, y: md }
    ];

    return (
        <div ref={container} className="mt-[10vh] min-h-screen">
            <div className="ml-[10vw]">
                <motion.h1 style={{y: sm}} className="m-0 mt-[10px] text-[5vw] leading-[5vw] uppercase">
                    Parallax
                </motion.h1>
                <h1 className="m-0 mt-[10px] text-[5vw] leading-[5vw] uppercase">
                    Scroll
                </h1>
                <div className="mt-[10px] text-[3vw] uppercase text-white">
                    <p className="m-0">
                        {word.split("").map((letter, i) => {
                            const y = useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -75) - 25]);
                            return (
                                <motion.span key={`l_${i}`} style={{top: y}} className="relative inline-block">
                                    {letter}
                                </motion.span>
                            );
                        })}
                    </p>
                </div>
            </div>
            <div className="flex w-full justify-center relative mt-[5vh]">
                {images.map(({src, y}, i) => (
                    <motion.div 
                        key={`i_${i}`} 
                        style={{y}} 
                        className={`absolute ${
                            i === 0 ? 'h-[60vh] w-[50vh] z-10' :
                            i === 1 ? 'left-[55vw] top-[15vh] h-[40vh] w-[30vh] z-20' :
                            'left-[27.5vw] top-[40vh] h-[25vh] w-[20vh] z-30'
                        }`}
                    >
                        {/* <Image 
                            src={src}
                            alt={`image ${i + 1}`}
                            fill
                            style={{objectFit: 'cover'}}
                            placeholder="blur"
                        /> */}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}