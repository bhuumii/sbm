'use client'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = () => {
  const pathname = usePathname(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/career', label: 'Career' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">

          <Logo />
         
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`
                hover:text-blue-600 transition-colors duration-200
                ${pathname === link.href ? 'text-blue-600 font-bold' : 'text-gray-600'}
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>

      
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Open navigation menu">
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>

    
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center">
          <button onClick={toggleMenu} className="absolute top-5 right-6" aria-label="Close navigation menu">
            <X className="w-8 h-8 text-gray-800" />
          </button>
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`
                  text-2xl hover:text-blue-600 transition-colors duration-200
                  ${pathname === link.href ? 'text-blue-600 font-bold' : 'text-gray-800'}
                `}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};