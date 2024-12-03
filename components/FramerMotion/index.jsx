'use client';
import { useRef } from "react";
import styles from '@/app/services/page.module.scss';
import Picture1 from '@/public/medias/pexels-lisettkruusimae-13076223.jpg';
import Picture2 from '@/public/medias/pexels-nati-87264186-12531220.jpg';
import Picture3 from '@/public/medias/pexels-ron-lach-10536285.jpg';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';

const word = "continuous growth";

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, -950]);

    const images = [
        {
            src: Picture1,
            y: 0
        },
        {
            src: Picture2,
            y: lg
        },
        {
            src: Picture3,
            y: md
        }
    ];

    return (
        <div ref={container} className={`${styles.container} !bg-primary`}>
            <div className={`${styles.body} text-white`}>
                <motion.h1 style={{y: sm}}>Journey</motion.h1>
                <h1>Through Challenges</h1>
                <div className={styles.word}>
                    <p>
                        {
                            word.split("").map((letter, i) => {
                                const y = useTransform
                                (scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -75) - 25])
                                return <motion.span 
                                    style={{top: y}} 
                                    key={`Ryoma_${i}`}
                                    className="text-white/80"
                                >{letter}</motion.span>
                            })
                        }
                    </p>
                </div>
            </div>
            <div className={styles.images}>
                {
                    images.map(({ src, y: imageY }, i) => {
                        return (
                            <motion.div 
                                style={{ y: imageY }} 
                                key={`Image_${i}`} 
                                className={styles.imageContainer}
                            >
                                <Image 
                                    src={src}
                                    placeholder="blur"
                                    alt="image"
                                    fill
                                />
                                <div className="absolute inset-0 bg-primary/30" />
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}