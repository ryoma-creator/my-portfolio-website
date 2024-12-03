'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PageTurnAnimation = () => {
  const canvasRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const text = textRef.current;

    const canvasSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    canvas.width = canvasSize.width * Math.min(2, window.devicePixelRatio);
    canvas.height = canvasSize.height * Math.min(2, window.devicePixelRatio);

    const point = {
      currentY: canvas.height * 5,
      curveY: canvas.height,
    };

    // pageをめくる演出はここ！
    const curveUpdate = (flag) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#111';

      if (flag) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#fff';
      }

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, point.currentY);
      ctx.quadraticCurveTo(point.currentY, point.curveY / 2, canvas.width, -(canvas.height / 10));
      ctx.lineTo(canvas.width, 0);
      ctx.closePath();
      ctx.fill();
    };

    gsap.registerEffect({
      name: 'curve',
      defaults: { flag: true, delay: 0 },
      effect: (target, config) => {
        const tl = gsap.timeline({
          onUpdate: () => curveUpdate(config.flag),
        })
          .to(target, {
            duration: 0.8,
            curveY: 0,
            ease: 'power4.out',
            delay: config.delay,
          })
          .to(target, {
            currentY: 0,
            duration: 0.8,
          }, '<');
        return tl;
      },
    });

    // textの演出はここ！
    const textAnimation = () => {
      const chars = text.children;
      return gsap.timeline()
        .to(chars, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'back.out(3)',
          stagger: { each: 0.02 },
        })
        .to(chars, {
          opacity: 0,
          y: -100,
          duration: 0.6,
          ease: 'back.in(2)',
          stagger: { each: 0.01, ease: 'power2' },
        }, '-=0.5');
    };

    const slideUpText = () => {
      gsap.to('.is-slide-up', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: { each: 0.05, from: 'end' },
      });
    };

    const tl = gsap.timeline({ delay: 0.5 })
      .add(gsap.effects.curve(point))
      .add(textAnimation)
      .set(point, {
        currentY: canvas.height * 5,
        curveY: canvas.height,
      })
      .set('.is-slide-up', {
        opacity: 0,
        y: 60,
      })
      .add(gsap.effects.curve(point, { flag: false }), '+=2')
      .from('.main-visual img', {
        autoAlpha: 0,
        yPercent: 20,
        duration: 1,
        ease: 'power4.out',
      }, '-=0.3')
      .add(slideUpText, '<');

  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <header className="absolute top-0 left-0 w-full flex justify-between items-center p-4 z-10">
        <h1 className="text-2xl font-bold is-slide-up">Design</h1>
        <nav>
          <ul className="flex space-x-4">
            {['TOP', 'ABOUT', 'WORKS', 'CONTACT'].map((item) => (
              <li key={item} className="is-slide-up">{item}</li>
            ))}
          </ul>
        </nav>
      </header>
      <p ref={textRef} className="absolute inset-0 flex items-center justify-center text-4xl font-serif text-white z-20">
        {Array.from('Animation with gsap + canvas2D').map((char, index) => (
          <span key={index} className="char opacity-0 translate-y-12">{char}</span>
        ))}
      </p>
      <div className="main-visual p-16 w-full h-full">
        <img src="https://images.unsplash.com/photo-1581175205870-8d4b32f05db7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default PageTurnAnimation;