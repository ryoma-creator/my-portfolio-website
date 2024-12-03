
import React from 'react';
import { motion } from 'framer-motion';

const StaggeredImages = () => {
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
    "https://images.unsplash.com/photo-1569596082827-c5e8990496cb?w=500",
    "https://images.unsplash.com/photo-1587932775991-708a20af2cc2?w=500",
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600",
    "https://images.unsplash.com/photo-1623166200209-6bd48520d6cb?w=500",
    "https://images.unsplash.com/photo-1532587459811-f057563d1936?w=500"
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="overflow-hidden rounded-lg"
        >
          <img src={image} alt="" className="w-full h-full object-cover" />
        </motion.div>
      ))}
    </div>
  );
};

export default StaggeredImages;