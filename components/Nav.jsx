'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Mail, Briefcase, User, Newspaper, Code } from 'lucide-react';
import { useState } from 'react';

import ContactModal from '@/components/common/ContactCTA/Modal';
import ContactForm from '@/components/common/ContactCTA/form';

const links = [
    { 
        name: 'home',
        path: '/',
        icon: Home
    },
    // {
    //     name: 'about',
    //     path: '/about',
    //     icon: User
    // },
    // {
    //     name: 'works',
    //     path: '/works',
    //     icon: Briefcase
    // },
    // {
    //     name: 'skills',
    //     path: '/skills',
    //     icon: Code
    // },
    // {
    //     name: 'blog',
    //     path: '/blog',
    //     icon: Newspaper
    // },
    { 
        name: 'contact',
        path: '#',
        icon: Mail,
        isSpecial: true
    }
];

const Nav = () => {
    const pathname = usePathname();
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <>
            <nav className="flex gap-3">
                {links.map((link, index) => {
                    const isActive = pathname === link.path;
                    const Icon = link.icon;
                    
                    return (
                        <button
                            key={index}
                            onClick={() => {
                                if (link.path === '#') {
                                    setIsModalOpen(true);
                                }
                            }}
                            className="relative group flex flex-col items-center"
                        >
                            <div className={`
                                transition-all duration-300
                                ${link.isSpecial 
                                    ? 'relative p-2 rounded-full overflow-hidden' 
                                    : 'p-2'}
                                ${isActive 
                                  ? 'text-brand-pink' // ⇦ transform -translate-y-1  // 上移動を有効にする場合: transform -translate-y-1 加えて
                                  : 'text-text-secondary'}
                            `}>
                                {/* Gradient background for Contact icon */}
                                {link.isSpecial && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue  
                                        opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                                )}
                                
                                <Icon className={`
                                    w-5 h-5
                                    ${link.isSpecial ? 'group-hover:animate-bounce' : 'group-hover:scale-110 transition-transform'}
                                `} />
                            </div>
                            
                            {/* Tooltip */}
                            <span className={`
                                absolute -bottom-3 text-xs font-light tracking-wide
                                opacity-0 group-hover:opacity-100 
                                transition-all duration-300
                                ${isActive ? 'text-brand-pink' : 'text-text-secondary'}
                            `}>
                                {link.name}
                            </span>
          
                            {/* Animated underline */}
                            <div className={`
                                absolute -bottom-[2px] left-1/2 w-4 h-0.5 
                                transform -translate-x-1/2
                                transition-all duration-300 ease-out
                                ${link.isSpecial 
                                    ? 'bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue' 
                                    : 'bg-gradient-to-r from-brand-blue to-brand-pink'}
                                ${isActive 
                                    ? 'opacity-100 scale-x-100' 
                                    : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'}
                            `} />
                        </button>
                    );
                })}
            </nav>

            {/* Contact Modal */}
            <ContactModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)}
            >
              <ContactForm />
            </ContactModal>
        </>    
    );
};

export default Nav;