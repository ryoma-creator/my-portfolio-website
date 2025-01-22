'use client'

import Link from 'next/link';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`
      fixed w-full top-0 z-50
      transition-all duration-300
      ${isScrolled 
        ? 'py-4 bg-white/ backdrop-blur-md shadow-lg' 
        : 'py-8 bg-transparent opacity-0'}
    `}>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link href='/'>
          <h1 className={`text-4xl font-semibold text-shadow-neumorphism transition-opacity duration-300
            ${!isScrolled && 'opacity-0'}`}>
            Ryoma<span className='text-accent'>.</span>
          </h1>
        </Link>

        {/* desktop nav ＆ hire me button*/}
        <div className='hidden xl:flex items-center gap-8'>
          <Nav isScrolled={isScrolled}/>
          <Link href='/contact'>
            <Button 
              className={`relative group overflow-hidden rounded-full transition-opacity duration-300
                ${!isScrolled && 'opacity-0'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#CCF8FF] via-[#EF96C5] to-[#CCF8FF] 
                animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative text-gray-800 group-hover:text-white transition-colors duration-300">
                Hire me
              </span>
            </Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  );
};

export default Header;