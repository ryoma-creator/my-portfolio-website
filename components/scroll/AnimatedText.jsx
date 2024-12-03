'use client'

import { motion } from 'framer-motion'

const AnimatedText = ({ text }) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {text}
      </motion.div>
    </div>
  )
}

export default AnimatedText