'use client';
import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import Image from 'next/image';
import Link from "next/link";
import { urlFor } from "@/sanity/client";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";


interface FooterData {
  footerLogo?: any;
  tagline?: string;
  socialLinks?: { platform: string; url: string }[];
  whatsAppQR?: any;
  whatsAppNumber?: string;
}


interface ContactInfo {
  email?: string[];
  phone?: string[];
  address?: string;
}


const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 16 16" 
    fill="currentColor"
  >
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
  </svg>
);


const SocialIcon = ({ platform }: { platform: string }) => {
  if (platform.toLowerCase() === "facebook") return <Facebook size={20} />;
  if (platform.toLowerCase() === "instagram") return <Instagram size={20} />;
  if (platform.toLowerCase() === "linkedin") return <Linkedin size={20} />;
  if (platform.toLowerCase() === "whatsapp") return <WhatsAppIcon size={20} />; 
  return null;
};


export const FooterClient = ({ footer, contact }: { footer: FooterData; contact: ContactInfo }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);


  const isDark = mounted && resolvedTheme === "dark";


  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/career", label: "Career" },
    { href: "/contact", label: "Contact Us" },
  ];


  return (
    <footer className={`${
      isDark 
        ? "bg-white text-gray-700"
        : "bg-gray-800 text-gray-300"        
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-6 md:col-span-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <Image 
              src={isDark ? "/assets/light.png" : "/assets/dark.png"}    
              alt="SBM Traders Footer Logo"
              width={250}
              height={100}
              className="object-contain" 
            />
            <p className={`text-sm leading-relaxed max-w-xs ${
              isDark ? "text-gray-600" : "text-gray-300"
            }`}>{footer?.tagline}</p>
          </div>


          {/* Column 2: Quick Links */}
          <div className="md:mx-auto text-center">
            <h3 className={`text-lg font-semibold mb-4 ${
              isDark ? "text-gray-900" : "text-white"
            }`}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors duration-300 ${
                      isDark 
                        ? "text-gray-600 hover:text-blue-800"    
                        : "text-gray-300 hover:text-blue-400"   
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Column 3: Contact Info */}
          {/* The change is in the line below */}
          <div className="text-center md:text-left">
            <h3 className={`text-lg font-semibold mb-4 ${
              isDark ? "text-gray-900" : "text-white"
            }`}>Contact</h3>
            <ul className="space-y-4 text-sm">
              {contact?.phone?.map((number) => (
                <li
                  key={number}
                  className="flex items-center gap-3 justify-center md:justify-start"
                >
                  <Phone size={16} className={`${
                    isDark ? "text-gray-500" : "text-gray-400"
                  }`} />
                  <a
                    href={`tel:${number}`}
                    className={`transition-colors duration-300 ${
                      isDark 
                        ? "text-gray-600 hover:text-blue-800" 
                        : "text-gray-300 hover:text-blue-400"
                    }`}
                  >
                    {number}
                  </a>
                </li>
              ))}
              {contact?.email?.map((email) => (
                <li
                  key={email}
                  className="flex items-center gap-3 justify-center md:justify-start"
                >
                  <Mail size={16} className={`${
                    isDark ? "text-gray-500" : "text-gray-400"
                  }`} />
                  <a
                    href={`mailto:${email}`}
                    className={`transition-colors duration-300 ${
                      isDark 
                        ? "text-gray-600 hover:text-blue-800" 
                        : "text-gray-300 hover:text-blue-400"
                    }`}
                  >
                    {email}
                  </a>
                </li>
              ))}
              {contact?.address && (
                <li className="flex items-start gap-3 justify-center md:justify-start">
                  <MapPin size={16} className={`${
                    isDark ? "text-gray-500" : "text-gray-400"
                  } mt-1`} />
                  <p className={`whitespace-pre-wrap ${
                    isDark ? "text-gray-600" : "text-gray-300"
                  }`}>{contact.address}</p>
                </li>
              )}
            </ul>
          </div>
          
          {/* Column 4: Social & QR */}
          
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <h3 className={`text-lg font-semibold ${
              isDark ? "text-gray-900" : "text-white"
            }`}>Connect</h3>
            <div className="flex space-x-4">
              {footer?.socialLinks?.map(link => (
                <a 
                  key={link.platform} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`transition-colors duration-300 ${
                    isDark 
                      ? "text-gray-500 hover:text-blue-800" 
                      : "text-gray-400 hover:text-blue-400"
                  }`}
                >
                  <SocialIcon platform={link.platform} />
                </a>
              ))}
            </div>
            {footer?.whatsAppQR && (
              <div className="bg-white p-2 rounded-md w-32 h-32">
                <Image 
                  src={urlFor(footer.whatsAppQR).url()}
                  alt="WhatsApp QR Code"
                  width={128}
                  height={128}
                  className="w-full h-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`py-3 ${
        isDark 
          ? "bg-gray-100"                  
          : "bg-black bg-opacity-10"         
      }`}>
        <div className={`container mx-auto px-4 sm:px-6 text-center text-sm ${
          isDark ? "text-gray-700" : "text-gray-400"
        }`}>
          &copy; {new Date().getFullYear()} SBM Traders. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};