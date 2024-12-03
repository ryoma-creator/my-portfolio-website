import React, { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './ZoomParallax.module.scss';

const ZoomParallax = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    // 🔻 first one is center !
    const pictures = [
        { src: '/medias/hirameki.jpg', scale: scale4 },  
        { src: '/medias/react_hatena.jpg', scale: scale5 },
        { src: '/medias/hatena.jpg', scale: scale6 },
        { src: '/medias/hatena.jpg', scale: scale5 },
        { src: '/medias/react_hatena.jpg', scale: scale6 },
        { src: '/medias/hatena.jpg', scale: scale8 },
        { src: '/medias/hatena.jpg', scale: scale9 }
    ];

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {pictures.map(({ src, scale }, index) => (
                    <motion.div key={index} style={{ scale }} className={styles.el}>
                        <div className={styles.imageContainer}>
                            <Image
                                loading="lazy"
                                src={src}
                                fill
                                alt={`Parallax image ${index + 1}`}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ZoomParallax;