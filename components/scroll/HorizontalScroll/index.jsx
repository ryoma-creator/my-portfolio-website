import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import Picture1 from '@/public/medias/1month.png';
// import Picture2 from '@/public/medias/2month.png';
// import Picture3 from '@/public/medias/3month.png';
// import Picture4 from '@/public/medias/4month.png';
// import Picture5 from '@/public/medias/5month.png';

// import Picture6 from '@/public/medias/6month.jpg';
// import Picture7 from '@/public/medias/7month.jpg';

gsap.registerPlugin(ScrollTrigger);

const images = [
  // '/medias/1month.png',
  // '/medias/2month.png',
  // '/medias/3month.png',
  // '/medias/4month.png',
  // '/medias/5month.png'
];

// const images = [Picture1, Picture2, Picture3, Picture4, Picture5];

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    gsap.to(track, {
      x: () => -(track.offsetWidth - container.offsetWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${track.offsetWidth - container.offsetWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden bg-primary">
      <div
        ref={trackRef}
        className="flex gap-[4vmin] absolute left-0 top-1/2 transform -translate-y-1/2"
      >
        {images.map((src, index) => (
          <div key={index} className="relative w-[80vmin] h-[56vmin] flex-shrink-0">
        <Image
          src={src}  // 変更なし
          loading="lazy"
          fill
          style={{ objectFit: 'cover' }}
          alt={`Slide ${index + 1}`}
          draggable="false"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."  // プレースホルダーを追加
          placeholder="blur"  // ブラー効果を有効化
          sizes="80vmin"  // レスポンシブサイズを指定
        />
            <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
              <p className="text-white text-4xl font-medium z-20">{index + 1} month later...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
