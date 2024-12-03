import React from 'react';
import { motion } from 'framer-motion';

const MaskEntryAnimation = () => {
  return (
    <motion.div
      initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
      animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: 'url("/path/to/your/image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
};

export default MaskEntryAnimation;