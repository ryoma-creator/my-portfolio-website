'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';
import ContactButton from './sections/contact/contactButton/ContactButton';

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
        ? 'py-4 bg-white/80 backdrop-blur-md shadow-lg' 
        : 'py-8 bg-transparent opacity-0'}
    `}>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/'>
          <h1 className={`text-4xl font-semibold text-shadow-neumorphism transition-opacity duration-300
            ${!isScrolled && 'opacity-0'}`}>
            Ryoma<span className='text-accent'>.</span>
          </h1>
        </Link>

        <div className='hidden xl:flex items-center gap-8'>
          <Nav isScrolled={isScrolled}/>
          <div className={`transition-opacity duration-300 ${!isScrolled && 'opacity-0'}`}>
            <ContactButton className="p-3" />
          </div>
        </div>

        <div className="xl:hidden">
          <MobileNav isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  );
};

export default Header;