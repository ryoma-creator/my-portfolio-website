'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const IMAGE_PADDING = 12 // px

const StickyImage = ({ imageUrl, videoUrl }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <motion.div
      ref={targetRef}
      className="w-full h-full rounded-3xl overflow-hidden"
      style={{
        scale,
        height: `calc(100vh - ${IMAGE_PADDING * 2}px)`,
      }}
    >
      {videoUrl ? (
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
      )}
      <motion.div
        className="absolute inset-0 bg-primary"
        style={{ opacity }}
      />
    </motion.div>
  )
}

export default StickyImage