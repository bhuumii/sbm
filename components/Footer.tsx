import { client, urlFor } from "@/sanity/client"; 
import { Logo } from "./Logo";
import Image from 'next/image'; 
import Link from "next/link";
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
}
interface ContactInfo {
  email?: string[];
  phone?: string[];
  address?: string;
}


async function getFooterData() {
  const query = `{
    "footer": *[_type == "footer"][0],
    "contact": *[_type == "contactInfo"][0]
  }`;
  const data = await client.fetch(query, {}, { cache: 'no-store' });
  return data;
}


const SocialIcon = ({ platform }: { platform: string }) => {
  if (platform.toLowerCase() === "facebook") return <Facebook size={20} />;
  if (platform.toLowerCase() === "instagram") return <Instagram size={20} />;
  if (platform.toLowerCase() === "linkedin") return <Linkedin size={20} />;
  return null;
};


export const Footer = async () => {
  const { footer, contact }: { footer: FooterData; contact: ContactInfo } =
    await getFooterData();


  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/gallery", label: "Gallery" },
    { href: "/career", label: "Career" },
    { href: "/contact", label: "Contact Us" },
  ];


  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
         {/* Column 1: Logo & Tagline */}
        <div className="space-y-6 md:col-span-1 flex flex-col items-center md:items-start">

  <Image 
    src="/ALT.png" 
    alt="SBM Traders Footer Logo"
    width={200}
    height={100}
    className="object-contain" 
  />
  <p className="text-sm leading-relaxed max-w-xs">{footer?.tagline}</p>
</div>


          {/* Column 2: Quick Links */}
          <div className="md:mx-auto">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              {contact?.phone?.map((number) => (
                <li
                  key={number}
                  className="flex items-center gap-3 justify-center md:justify-start"
                >
                  <Phone size={16} className="text-gray-400" />
                  <a
                    href={`tel:${number}`}
                    className="hover:text-white transition-colors"
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
                  <Mail size={16} className="text-gray-400" />
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-white transition-colors"
                  >
                    {email}
                  </a>
                </li>
              ))}
              {contact?.address && (
                <li className="flex items-start gap-3 justify-center md:justify-start">
                  <MapPin size={16} className="text-gray-400 mt-1" />
                  <p className="whitespace-pre-wrap">{contact.address}</p>
                </li>
              )}
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              {footer?.socialLinks?.map(link => (
                <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
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
      <div className="bg-black bg-opacity-20 py-4">
        <div className="container mx-auto px-4 sm:px-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} SBM Traders. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};