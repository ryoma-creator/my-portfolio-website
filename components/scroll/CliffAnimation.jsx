import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CliffAnimation = () => {
  const containerRef = useRef(null)
  
  useEffect(() => {
    const container = containerRef.current
    
    gsap.to('.cliff', {
      x: '-100%',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom center',
        scrub: true
      }
    })
    
    gsap.to('.shoe', {
      y: '-50%',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom center',
        scrub: true
      }
    })
  }, [])
  
  return (
    <div ref={containerRef}>
      <div className="cliff left">...</div>
      <div className="cliff right">...</div>
      <div className="shoe">...</div>
      <video src="..." autoPlay loop muted playsInline />
    </div>
  )
}

export default CliffAnimation;