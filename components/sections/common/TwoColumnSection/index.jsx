// components/sections/common/TwoColumnSection/index.jsx
import { motion } from 'framer-motion';

const TwoColumnSection = ({ leftContent, rightContent }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[leftContent, rightContent].map((content, index) => (
        <motion.div 
          key={index}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative aspect-square"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${content.image})` }}
          />
          <div className="absolute inset-0 bg-black/50 p-8 flex flex-col justify-end">
            <h3 className="text-2xl font-bold text-white mb-4">{content.title}</h3>
            <p className="text-white/80 mb-6">{content.description}</p>
            <button className="bg-white text-black px-6 py-2 rounded-full self-start hover:bg-white/90">
              {content.ctaText}
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TwoColumnSection;