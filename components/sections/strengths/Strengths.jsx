'use client'

import Link from 'next/link';

export default function Strengths() {
  const strengths = [
    {
      title: "Development",
      description: "Modern web development expertise",
      image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368948/IPC_gtotjt.webp",
      link: "/strengths/development",
    },
    {
      title: "Analytics",
      description: "Logical thinking & data-driven solutions",
      image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368943/law_wputac.jpg",
      link: "/strengths/analytics",
    },
    {
      title: "Bilingual",
      description: "Native Japanese + Business English",
      image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1734416132/accenture_yvo1ec.jpg",
      link: "/strengths/bilingual",
    },
    {
      title: "Growth",
      description: "Continuous learning & adaptation",
      image: "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368948/IPC_gtotjt.webp",
      link: "/strengths/growth",
    }
  ];

  return (
    <section className='min-h-[80vh] py-12 relative'>
      <div className="container mx-auto px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-24">
          {strengths.map((strength, index) => (
            <Link href={strength.link} key={index}>
              <div className="group relative w-72 h-72 aspect-square overflow-hidden rounded-lg hover:z-10">
                {/* 画像 */}
                <img
                  src={strength.image}
                  alt={strength.title}
                  className="w-72 h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* グラデーションオーバーレイ */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#CCF8FF]/40 via-[#EF96C5]/40 to-[#CCF8FF]/40 
                  mix-blend-overlay group-hover:opacity-70 transition-opacity duration-300" />
                {/* コンテンツオーバーレイ */}
                <div className="absolute inset-0 flex flex-col justify-end">
                  <div className="absolute bottom-0 left-0 right-0 pb-6 backdrop-blur-sm bg-gradient-to-t from-black/30 to-transparent">
                    <h3 className="text-2xl font-bold text-white text-center mb-2">
                      {strength.title}
                    </h3>
                    <div className="overflow-hidden">
                      <p className="text-white/90 text-base px-6 text-center
                        transform translate-y-full
                        transition-all duration-300 ease-in-out
                        group-hover:translate-y-0">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}