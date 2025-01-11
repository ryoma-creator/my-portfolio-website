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
            <style jsx global>{`
                .nav-gradient-text {
                    background: linear-gradient(
                        to right,
                        #00ff99,
                        #00ffcc,
                        #00ffdd,
                        #00ffcc,
                        #00ff99
                    );
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    background-size: 200% auto;
                }

                .nav-gradient-line {
                    background-size: 200% auto;
                    animation: gradientMove 3s linear infinite;
                }

                .group:hover .nav-gradient-text {
                    animation: gradientMove 3s linear infinite;
                }

                @keyframes gradientMove {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </nav>
    );
};

export default Nav;