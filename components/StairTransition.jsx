'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

// components
import Stairs from '@/components/Stairs';

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode='wait'>
        <div key={pathname}>
          <div className='h-full w-full fixed top-0 left-0 right-0
          pointer-events-none z-40 flex'>
            <Stairs />
          </div>
        </div>

      {/* <motion.div
          className='h-screen w-screen fixed top-0 flex items-center justify-center pointer-events-none z-50'
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
        <h1 className='text-4xl font-bold'>Ryoma</h1>
      </motion.div> */}

    {/* fade out effect */}
        <motion.div
         className='h-screen w-screen fixed top-0 pointer-events-none bg-accent'
         initial={{ opacity:1 }}
         animate={{
           opacity: 0,
           transition: { delay: 1, duration: 0.4, ease: 'easeInOut' }, 
         }} 
        />
      </AnimatePresence>
    </>
  );
};

export default StairTransition;