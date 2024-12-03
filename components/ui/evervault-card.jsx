'use client'

import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import { ReactTyped } from 'react-typed';

// components
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';
import GsapAnimatedElement from '@/components/scroll/GsapAnimatedElement';

import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/lib/utils";


export const EvervaultCard = ({
  text,
  className
}) => 
  {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);
  
    const [randomString, setRandomString] = useState("");
  
    useEffect(() => {
      let str = generateRandomString(1500);
      setRandomString(str);
    }, []);
  
    function onMouseMove({
      currentTarget,
      clientX,
      clientY
    }) {
      let { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
  
    //   🔻ここで背景のrandomstringの文字数を増やして、全面に文字がいくようにする。
      const str = generateRandomString(10000);
      setRandomString(str);
    }
  
  return (
    (<div
      className={cn(
        "p-0.5  bg-transparent aspect-square  flex items-center justify-center w-full h-full relative",
        className
      )}>
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full">
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />

      <section className='h-full'>
        {/* no need mx-auto since you use container */}
        <div className='container h-full text-shadow-neumorphism'>
          <div className='flex flex-col xl:flex-row items-center justify-between
          xl:pt-8 xl:pb-24'>
            {/* text */}
            <div className='text-center xl:text-left'>
              <GsapAnimatedText 
                text="Front End Developer" 
                variant="perspectiveTilt" 
                duration={1.5} 
                stagger={0.05}
                scrollTrigger={true}
                className="text-xl"
              />
              <div className='h1 mb-6'>
              <GsapAnimatedText 
                text="Hello I'm" 
                variant="blurIn" 
                duration={1.5} 
                stagger={0.05}
                scrollTrigger={true}
                className=""
              />
              <br />
              <GsapAnimatedText 
                text="Ryoma Taguchi" 
                variant="letterShuffle" 
                duration={2} 
                stagger={0.05}
                scrollTrigger={true}
                className="text-accent"
              />
              </div>
              <div className='max-w-[500px] mb-9 text-white/80'>
              <ReactTyped 
                strings={[
                    'THANK YOU FOR COMING!',
                    'Welcome to my Portfolio Website!',
                    'Please take a look!', 
                    'Lets work together!', 
                    'Ill do my best for you and my career!',
                    'Feel free to contact me!',
                ]}
                typeSpeed={75} 
                backSpeed={30} 
                loop
                className='pb-4'
            />
              </div>
              {/* btn and socials */}
              <div className='flex flex-col xl:flex-row items-center gap-8'>
                <GsapAnimatedElement
                  variant="scaleUp"
                  duration={0.5}
                  delay={1.5}
                >
                  <Button
                    variant='outline'
                    size='lg'
                    className=''
                  >
                    <span>Download CV</span>
                    <FiDownload className='text-xl'/>
                  </Button>
                </GsapAnimatedElement>
                <GsapAnimatedElement
                  variant="stagger"
                  duration={0.5}
                  delay={1.7}
                  className='mb-8 xl:mb-0'
                >
                  <Social 
                    containerStyles='flex gap-6' 
                    iconStyles='w-9 h-9 border border-accent rounded-full
                    flex items-center justify-center 
                    hover:bg-accent hover:transition-all duration-500 hover:translate-y-[-5px]'
                  />
                </GsapAnimatedElement>
              </div>
            </div>
            {/* photo */}
            <GsapAnimatedElement
              variant="fadeIn"
              duration={1}
              delay={0.5}
              className='order-1 xl:order-none'
            >
              <Photo />
            </GsapAnimatedElement>
          </div>
        </div>
        <GsapAnimatedElement
          variant="blurIn"
          duration={1}
          delay={2}
        >
          <Stats/>
        </GsapAnimatedElement>
      </section>

      </div>
    </div>)
  );
};

export function CardPattern({
  mouseX,
  mouseY,
  randomString
}) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    (<div className="pointer-events-none">
      <div
        className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style} />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}>
        <p
          className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>)
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({
  className,
  ...rest
}) => {
  return (
    (<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>)
  );
};
