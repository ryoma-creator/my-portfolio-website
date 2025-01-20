'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'home', path: '/' },
    { name: 'resume', path: '/resume' },
    { name: 'work', path: '/work' },
    { name: 'contact', path: '/contact' },
];

const Nav = () => {
    const pathname = usePathname();
    
    return (
        <nav className='flex gap-8'>
            {links.map((link, index) => {
                const isActive = pathname === link.path;
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`relative capitalize font-medium transition-all group
                            ${isActive ? 'nav-gradient-text' : 'hover:nav-gradient-text'}`}
                    >
                        {link.name}
                        <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ff99] via-[#00ffcc] to-[#00ff99] 
                            transition-transform duration-300
                            ${isActive ? 'nav-gradient-line' : 'scale-x-0 group-hover:scale-x-100'}`}
                        />
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;