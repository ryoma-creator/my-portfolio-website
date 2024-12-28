// components/sections/solutions/Solutions.jsx
'use client'

import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';

const solutions = [
  {
    title: "Cultural Bridge",
    description: "Experience in 3+ countries' development cultures",
    icon: "🌏",
    stats: "2000+ global interactions"
  },
  {
    title: "Tech Expertise",
    description: "Modern frontend stack with proven projects",
    icon: "💻",
    stats: "5+ React/Next.js projects"
  },
  {
    title: "Fast Learner",
    description: "Rapid skill acquisition and adaptation",
    icon: "🚀",
    stats: "900+ learning hours"
  }
];

export default function Solutions() {
  return (
    <section className='min-h-[90vh] w-full py-16 bg-transparent'>
      {/* Main Solution Message */}
      <div className="text-center mb-24">
        <GsapAnimatedText 
        //   text="Bridging the Gap to Your Success"
        // "Solutions That Bridge Cultures"
        // "Global Tech Solutions"
        // "Bridging Tech & Culture" （現在の最適解）
        //   text="Your Global Tech Partner"
          text="Bridging Tech & Culture"
          variant="blurIn" 
          duration={1.5}
          scrollTrigger={true}
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
        />
        <GsapAnimatedText 
          text="Combining global experience with technical expertise"
          variant="blurIn" 
          duration={1.5}
          delay={0.3}
          scrollTrigger={true}
          className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
        />
      </div>

      {/* Solutions Grid */}
      <div className="w-full max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {solutions.map((solution, index) => (
          <div key={index} className="group hover:translate-y-[-10px] transition-all duration-300">
            <div className="bg-gray-800/50 p-12 rounded-xl min-h-[350px] flex flex-col relative overflow-hidden">
              <div className="text-6xl mb-6">{solution.icon}</div>
              <GsapAnimatedText 
                text={solution.title}
                variant="blurIn"
                duration={1.5}
                delay={index * 0.3}
                scrollTrigger={true}
                className="text-3xl font-bold mb-4"
              />
              <GsapAnimatedText 
                text={solution.description}
                variant="blurIn"
                duration={1.5}
                delay={index * 0.3 + 0.2}
                scrollTrigger={true}
                className="text-xl text-gray-300 mb-6"
              />
              <div className="mt-auto">
                <span className="text-sm text-accent">{solution.stats}</span>
              </div>
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}