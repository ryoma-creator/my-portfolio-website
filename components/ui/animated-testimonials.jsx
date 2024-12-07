"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";




export const AnimatedTestimonialsBase = ({
  testimonials,
  autoplay = false
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    if (active < testimonials.length - 1) {
      setActive((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (active > 0) {
      setActive((prev) => prev - 1);
    }
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        if (active < testimonials.length - 1) {
          handleNext();
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, active]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    // 以下で、高さや横幅のスペースを入れるものが入っていたので調整
    <div className="mx-auto md:mx-0  max-w-sm md:max-w-4xl  px-0 md:px-2 lg:px-2s">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
      <div className="flex justify-between flex-col ">
        <ScrollArea className="h-[300px] md:h-[400px]"> {/* overflow-y-autoの代わり */}
          <motion.div
            key={active}
            className="h-[380px] " // 固定高さを追加
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}>
            <h3 className="text-xl font-bold dark:text-white text-white/90">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-white/80 my-6 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block">
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            
          </motion.div>
          </ScrollArea>
          <div className="flex gap-4 pt-12 md:pt-0 mx-auto lg:mx-0">
            <button
              onClick={handlePrev}
              disabled={active === 0}
              className={`h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button ${
                active === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent dark:hover:bg-neutral-700'
              }`}>
              <IconArrowLeft
                className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              disabled={active === testimonials.length - 1}
              className={`h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button ${
                active === testimonials.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent dark:hover:bg-neutral-700'
              }`}>
              <IconArrowRight
                className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>

        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom">
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        {/* 以下で文章の高さの幅を調節して */}
       
      </div>
    </div>
  );
};