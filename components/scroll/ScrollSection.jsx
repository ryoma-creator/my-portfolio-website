'use client'
import React from 'react'
import StickyImage from './StickyImage'
import OverlayCopy from './OverlayCopy'
import GsapAnimatedText from '@/components/scroll/GsapAnimatedText'
import GsapAnimatedElement from '@/components/scroll/GsapAnimatedElement'

const IMAGE_PADDING = 12 // px

const ScrollSection = ({ imageUrl, videoUrl, heading, subheading, children, bg = 'bg-primary' }) => {
  return (
    <div className={`relative ${bg}`} style={{ height: '150vh' }}>
      <GsapAnimatedElement
        variant="fadeIn"
        duration={1}
        className="relative h-screen overflow-hidden rounded-3xl z-0 sticky top-0"
        style={{ 
          paddingTop: IMAGE_PADDING,
          paddingLeft: IMAGE_PADDING,
          paddingRight: IMAGE_PADDING
        }}
      >
        <StickyImage imageUrl={imageUrl} videoUrl={videoUrl} />
        <div className="absolute inset-0 bg-primary/50 backdrop-blur-sm">
          <GsapAnimatedElement
            variant="slideIn"
            duration={1}
            className="relative z-10 h-full flex flex-col items-center justify-center px-4"
          >
            <GsapAnimatedText
              text={heading}
              variant="blurIn"
              duration={1.5}
              className="text-4xl md:text-6xl font-bold text-white mb-6 text-center"
            />
            <GsapAnimatedText
              text={subheading}
              variant="blurIn"
              duration={1.5}
              delay={0.2}
              className="text-xl md:text-2xl text-white/80 text-center max-w-3xl"
            />
          </GsapAnimatedElement>
        </div>
      </GsapAnimatedElement>
      {children && (
        <GsapAnimatedElement
          variant="fadeIn"
          duration={1}
          delay={0.3}
          className="relative z-10"
        >
          {children}
        </GsapAnimatedElement>
      )}
    </div>
  )
}

export default ScrollSection