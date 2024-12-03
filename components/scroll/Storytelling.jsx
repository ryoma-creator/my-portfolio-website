// components/Storytelling.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Storytelling = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      const text = section.querySelector('.story-text');
      const image = section.querySelector('.story-image');

      // テキストのフェードインアニメーション
      gsap.from(text, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power4.out',
      });

      // 画像のスライドインアニメーション
      gsap.from(image, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        duration: 1,
        ease: 'power4.out',
      });
    });
  }, []);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNTU3OA&ixlib=rb-1.2.1&q=85&w=1500',
      text: 'The Forest',
    },
    {
      src: 'https://images.unsplash.com/photo-1569596082827-c5e8990496cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNDg3NQ&ixlib=rb-1.2.1&q=80&w=500',
      text: 'The Mountains',
    },
    {
      src: 'https://images.unsplash.com/photo-1587932775991-708a20af2cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNDQ5Mg&ixlib=rb-1.2.1&q=80&w=500',
      text: 'The River',
    },
    {
      src: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNTU3OA&ixlib=rb-1.2.1&q=85&w=1200',
      text: 'The Sunset',
    },
    {
      src: 'https://images.unsplash.com/photo-1623166200209-6bd48520d6cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNDg3NQ&ixlib=rb-1.2.1&q=80&w=500',
      text: 'The Beach',
    },
    {
      src: 'https://images.unsplash.com/photo-1532587459811-f057563d1936?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNDg3NQ&ixlib=rb-1.2.1&q=80&w=500',
      text: 'The Field',
    },
    // さらにセクションを追加する場合はここに追加
  ];

  return (
    <div className="bg-gray-100">
      {images.map((image, index) => (
        <section
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className={`flex flex-col md:flex-row items-center justify-center h-screen p-8 ${
            index % 2 === 0 ? 'bg-blue-100' : 'bg-green-100'
          }`}
        >
          <div className={`w-full md:w-1/2 p-4 story-image`}>
            <picture className="image_cont">
              <source
                srcSet="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNTU3OA&ixlib=rb-1.2.1&q=85&w=1500"
                media="(min-width: 1500px)"
              />
              <source
                srcSet="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNTU3OA&ixlib=rb-1.2.1&q=85&w=1000"
                media="(min-width: 700px)"
              />
              <img
                data-speed="auto"
                className="w-full h-full object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNTU3OA&ixlib=rb-1.2.1&q=85&w=600"
                alt={image.text}
              />
            </picture>
          </div>
          <div className={`w-full md:w-1/2 p-4 text-center md:text-left story-text`}>
            <h1 className="text-6xl font-bold">{image.text}</h1>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Storytelling;
