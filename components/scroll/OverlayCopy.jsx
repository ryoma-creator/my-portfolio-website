'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import GsapAnimatedText from '@/components/scroll/GsapAnimatedText'
import GsapAnimatedElement from '@/components/scroll/GsapAnimatedElement'

const OverlayCopy = ({ heading, subheading }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [250, -250])
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

  return (
    <motion.div
      ref={targetRef}
      className="absolute inset-0 flex flex-col items-center justify-center bg-primary/50"
      style={{ y, opacity }}
    >
      <GsapAnimatedElement
        variant="slideIn"
        duration={1}
        className="space-y-6"
      >
        <GsapAnimatedText
          text={subheading}
          variant="blurIn"
          duration={1.5}
          className="text-xl md:text-3xl text-white/80 text-center"
        />
        <GsapAnimatedText
          text={heading}
          variant="blurIn"
          duration={1.5}
          delay={0.2}
          className="text-4xl md:text-7xl font-bold text-white text-center"
        />
      </GsapAnimatedElement>
    </motion.div>
  )
}

export default OverlayCopy