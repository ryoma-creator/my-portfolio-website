'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home } from 'lucide-react';

const links = [
    { 
        name: 'home',
        path: '/',
        icon: Home
    },
    // Commented out links can be uncommented and modified later
    // { name: 'resume', path: '/resume' },
    // { name: 'work', path: '/work' },
    // { name: 'contact', path: '/contact' },
];

const Nav = () => {
    const pathname = usePathname();
    
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                const isActive = pathname === link.path;
                const Icon = link.icon;
                
                return (
                    <Link
                      href={link.path}
                      key={index}
                      className="relative group flex flex-col items-center"
                    >
                      <div className={`transition-all duration-300 ${
                        isActive ? 'text-teal-400' : 'text-gray-600 hover:text-teal-400'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      {/* Label that appears on hover */}
                      <span className={`absolute -bottom-5 text-xs font-light tracking-wide
                        opacity-0 group-hover:opacity-100 transition-all duration-300
                        ${isActive ? 'text-teal-400' : 'text-gray-600'}`}>
                        {link.name}
                      </span>
          
                      {/* Animated underline */}
                      <div className={`absolute -bottom-1 left-1/2 w-4 h-0.5 
                        transform -translate-x-1/2
                        transition-all duration-300 ease-out
                        bg-gradient-to-r from-teal-400 to-emerald-400
                        ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'}`}
                      />
                    </Link>
                  );
                })}
              </nav>
          
    );
};

export default Nav;