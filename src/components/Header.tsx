"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

function Header() {
    const pathname = usePathname();

    const links = [
        { name: 'Home', path: '/', icon: 'home' },
        { name: 'About', path: '/about', icon: 'about' },
        { name: 'Team', path: '/team', icon: 'team' },
        { name: 'Projects', path: '/projects', icon: 'code' },
        { name: 'Contact', path: '/contact', icon: 'call' },
    ];

    return (
        <header className="bg-black text-white p-4">
            <nav className="flex justify-end space-x-12 font-mont text-[24px] relative">
                {links.map((link, index) => (
                    <Link key={index} href={link.path} className="relative">
                        <div
                            className={`flex items-center justify-center space-x-2 transition-all duration-300 ${pathname === link.path
                                ? ''
                                : 'opacity-45 hover:opacity-100'
                                }`}
                        >
                            <Image src={`/${link.icon}.svg`} width={24} height={24} alt={link.icon} />
                            <span>{link.name}</span>
                        </div>
                        {pathname === link.path && (
                            <div
                                className="absolute left-0 right-0 -bottom-1 h-[3px] rounded-[3px]"
                                style={{
                                    background: 'linear-gradient(90deg, #7FEEE7 0%, #498884 85.5%)',
                                }}
                            />
                        )}
                    </Link>
                ))}
            </nav>
        </header>
    );
}

export default Header;
