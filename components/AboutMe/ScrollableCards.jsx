import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "Matthias Leidinger",
    description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "1113764_Earth_Handicraft_3840x2160.mp4",
    url: "https://example.com",
    color: "#BBACAF"
  },
  {
    title: "Clément Chapillon",
    description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes.",
    src: "1114643_Plan_Architecture_3840x2160.mov",
    url: "https://example.com",
    color: "#977F6D"
  },

];

const Card = ({ i, title, description, src, url, color, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const isVideo = src.endsWith('.mp4') || src.endsWith('.mov');

  return (
    <motion.div 
      style={{
        backgroundColor: color,
        scale,
        top: `calc(-5vh + ${i * 25}px)`
      }}
      className="flex flex-col relative w-[1000px] h-[500px] rounded-3xl p-12 mb-8"
    >
      <h2 className="text-center text-2xl font-bold">{title}</h2>
      <div className="flex h-full mt-12 gap-12">
        <div className="w-2/5 relative top-[10%]">
          <p className="text-base first-letter:text-2xl first-letter:font-bold">
            {description}
          </p>
          <span className="flex items-center gap-1 mt-4">
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm underline cursor-pointer">
              See more
            </a>
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black"/>
            </svg>
          </span>
        </div>
        <div className="relative w-3/5 h-full rounded-3xl overflow-hidden">
          {isVideo ? (
            <video
              src={`/videos/${src}`}
              className="object-cover w-full h-full"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <Image
              src={`/medias/${src}`}
              alt={title}
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ScrollableCards = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ScrollableCards;