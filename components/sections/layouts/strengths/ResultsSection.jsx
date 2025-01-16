'use client'

import React from 'react';
import { motion } from 'framer-motion';
import ContactCTA from '../../common/ContactCTA';
import DiscoverSection from '../../common/DiscoverSection';


export default function ResultsSection({
  sectionTitle,
  sectionSubtitle,
  mainResults,
  discover, 
  contactMessage,
}) {
  console.log('ResultsSection props:', { discover });

  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-24">
          <h2 className="text-sm uppercase tracking-wider text-white/60 mb-4">
            {sectionTitle}
          </h2>
          <p className="text-2xl font-light">
            {sectionSubtitle}
          </p>
        </div>

        {/* Main Results */}
        <div className="max-w-6xl mx-auto">
          {mainResults.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-32 last:mb-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={`aspect-[4/3] overflow-hidden rounded-lg ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <span className="text-sm uppercase tracking-wider text-white/60 mb-4 block">
                    {item.category}
                  </span>
                  <h3 className="text-3xl font-light mb-6">
                    {item.title}
                  </h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Items (Trapezoid Layout) */}
        {/* <div className="my-32"> */}
          {/* Top Row - 2 items */}
          {/* <div className="flex justify-center gap-8 mb-16">
            {featuredItems.slice(0, 2).map((item, index) => (
              <motion.div
                key={`top-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group w-full max-w-[400px]"
              >
                <div className="aspect-[3/4] mb-8 overflow-hidden rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-2">{item.title}</h3>
                  <p className="text-lg text-white/60">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div> */}

          {/* Bottom Row - 3 items */}
          {/* <div className="flex justify-center gap-8">
            {featuredItems.slice(2).map((item, index) => (
              <motion.div
                key={`bottom-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                className="group w-full max-w-[400px]"
              >
                <div className="aspect-[3/4] mb-8 overflow-hidden rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-2">{item.title}</h3>
                  <p className="text-lg text-white/60">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div> */}
        {/* </div> */}

        {discover?.title && discover?.items && (
        <DiscoverSection 
          title={discover.title}
          items={discover.items} 
        />
      )}


        {/* Contact CTA */}
        <ContactCTA description={contactMessage} />
      </div>
    </div>
  );
}