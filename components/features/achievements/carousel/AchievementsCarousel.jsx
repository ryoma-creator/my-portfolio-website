'use client'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Play, Pause, Check } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const AchievementSlide = ({ achievement, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 月を短縮形に変換
  const formatDate = (dateStr) => {
    const [month, year] = dateStr.split(' ');
    const shortMonth = month.slice(0, 3);
    return `${shortMonth} ${year}`;
  };

  return (
    <>
      {/* カードコンテンツ */}
      <div 
        className="relative h-[400px] w-[500px] rounded-lg overflow-hidden cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* 背景画像 */}
        <Image
          src={achievement.background}
          alt={achievement.title}
          fill
          sizes="(max-width: 500px) 100vw, 500px"
          className="object-cover"
        />
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
          {/* スケルトン番号 */}
          <div className="absolute top-4 left-4">
            <div className="text-8xl leading-none font-extrabold text-transparent 
              text-outline opacity-80">
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>

          {/* コンテンツ */}
          <div className="absolute bottom-0 w-full p-6">
            <div className="mb-4">
              <h3 className="text-3xl font-bold text-white mb-2">
                {formatDate(achievement.period)}
              </h3>
              <p className="text-xl text-white/90">{achievement.title}</p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {achievement.techStack?.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-accent/20 text-white rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* View Details ボタン */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="px-6 py-3 bg-accent text-primary rounded-full font-semibold">
            View Details
          </button>
        </div>
      </div>

      {/* モーダル */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative w-[90vw] h-[90vh] bg-primary rounded-lg overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="h-full overflow-y-auto">
              {/* モーダルヘッダー */}
              <div className="relative h-[30vh]">
                <Image
                  src={achievement.background}
                  alt={achievement.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-4xl font-bold text-white mb-2">
                    {formatDate(achievement.period)}
                  </h2>
                  <p className="text-2xl text-white/90">{achievement.title}</p>
                </div>
              </div>

              {/* モーダルコンテンツ */}
              <div className="p-8">
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-xl font-bold text-accent mb-6">Key Achievements</h3>
                      <div className="space-y-4">
                        {achievement.achievements.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                            <p className="text-white/90">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-accent mb-6">Technologies Used</h3>
                      <div className="flex flex-wrap gap-3">
                        {achievement.techStack?.map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-accent/20 text-accent rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function AchievementCarousel({ achievements }) {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
        setIsPlaying(false);
      } else {
        swiper.autoplay.start();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="relative py-12">
      <Swiper
        ref={swiperRef}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {achievements.map((achievement, index) => (
          <SwiperSlide key={index} className="group">
            <AchievementSlide 
              achievement={achievement} 
              index={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute bottom-4 right-4 z-10 p-3 rounded-full 
          bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors"
      >
        {isPlaying ? (
          <Pause className="w-6 h-6 text-accent" />
        ) : (
          <Play className="w-6 h-6 text-accent" />
        )}
      </button>
    </div>
  );
}