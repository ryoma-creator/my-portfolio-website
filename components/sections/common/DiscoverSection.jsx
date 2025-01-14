'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DiscoverSection({ title = "What else you might discover?", items }) {
  return (
    <section className="py-20">
      <h2 className="text-responsive-lg text-center mb-16">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1200px] mx-auto px-4">
        {items.slice(0, 3).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col"
          >
            <Link href={item.link} className="block">
              <div className="mb-4 aspect-[3/4] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-125"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-responsive-md mb-2">
                  {item.title}
                </h3>
                <p className="text-responsive-sm text-gray-600">
                  {item.subtitle}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}