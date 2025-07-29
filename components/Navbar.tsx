

'use client'; 
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

export const Navbar = () => {
  const pathname = usePathname(); 
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 lg:text-3xl">
          SBM Traders
        </Link>
        <div className="flex space-x-4 sm:space-x-6 items-center">
       
          <Link 
            href="/" 
            className={`
              hover:text-blue-600 transition-colors duration-200
              ${pathname === '/' ? 'text-blue-600 font-bold' : 'text-gray-600'}
            `}
          >
            Home
          </Link>
          <Link 
            href="/gallery" 
            className={`
              hover:text-blue-600 transition-colors duration-200
              ${pathname === '/gallery' ? 'text-blue-600 font-bold' : 'text-gray-600'}
            `}
          >
            Gallery
          </Link>
          <Link 
            href="/contact" 
            className={`
              hover:text-blue-600 transition-colors duration-200
              ${pathname === '/contact' ? 'text-blue-600 font-bold' : 'text-gray-600'}
            `}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};