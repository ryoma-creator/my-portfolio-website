'use client'

import { motion } from 'framer-motion';

export default function ApproachSection() {
    const approaches = [
        {
            title: "Data Analysis & Problem Solving",
            subtitle: "Evidence-Based Decision Making",
            description: "Implementing data-driven strategies that consistently deliver measurable results. By analyzing historical data and current trends, we achieve optimal solutions. Recent projects have seen a 40% improvement in process efficiency through systematic analysis and implementation.",
          image: "https://res.cloudinary.com/da3abynbu/image/upload/v1736499137/samples/coffee.jpg"
        },
        {
            title: "Critical Thinking & Argumentation",
            subtitle: "Advanced Logical Framework",
            description: "Leveraging two years of intensive training in Japan's premier legal philosophy seminar, where complex problems are systematically broken down into solvable components. This approach ensures every solution is built on solid logical foundations.",
          image: "https://res.cloudinary.com/da3abynbu/image/upload/v1736499137/samples/cup-on-a-table.jpg"
        },
        {
            title: "Educational Leadership",
            subtitle: "Transformative Learning Systems",
            description: "Reduced standard training time from 3 months to 1 month while improving results. Successfully helped a student double their test scores in one month, despite being told it was impossible, through systematic analysis of 10 years of past data and personalized optimization.",
          image: "https://res.cloudinary.com/da3abynbu/image/upload/v1736499138/cld-sample-4.jpg"
        },
        {
            title: "Process Optimization",
            subtitle: "Systematic Efficiency Enhancement",
            description: "Developed a comprehensive analysis system that identified critical performance gaps and learning priorities. This system led to a 200% improvement in student performance within one month, establishing a replicable framework for rapid skill development.",
          image: "https://res.cloudinary.com/da3abynbu/image/upload/v1736499137/cld-sample.jpg"
        },
        {
            title: "Research & Documentation",
            subtitle: "Strategic Knowledge Management",
            description: "Created a data-driven educational framework based on 10 years of historical analysis. This systematic approach enabled precise identification of improvement areas, leading to unprecedented success in student achievement and process optimization.",
          image: "https://res.cloudinary.com/da3abynbu/image/upload/v1736499135/samples/smile.jpg"
        }
      ];
    
  
    return (
      <div className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-light mb-20">Impact Areas</h2>
          
          {/* 上段2つ */}
          <div className="flex justify-center gap-8 mb-16">
            {approaches.slice(0, 2).map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group w-full max-w-[500px]"
              >
                <div className="aspect-[16/9] mb-8 overflow-hidden rounded-lg">
                  <img 
                    src={approach.image} 
                    alt={approach.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div>
                  <h3 className="text-2xl font-light mb-2">
                    {approach.title}
                  </h3>
                  <p className="text-lg text-white/60 mb-4">
                    {approach.subtitle}
                  </p>
                  <p className="text-base text-white/80 leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
  
          {/* 下段3つ */}
          <div className="flex justify-center gap-8">
            {approaches.slice(2, 5).map((approach, index) => (
              <motion.div
                key={index + 2}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                className="group w-full max-w-[400px]"
              >
                <div className="aspect-[16/9] mb-8 overflow-hidden rounded-lg">
                  <img 
                    src={approach.image} 
                    alt={approach.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div>
                  <h3 className="text-2xl font-light mb-2">
                    {approach.title}
                  </h3>
                  <p className="text-lg text-white/60 mb-4">
                    {approach.subtitle}
                  </p>
                  <p className="text-base text-white/80 leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }