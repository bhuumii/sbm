import { client } from "@/sanity/client";
import { Logo } from "./Logo";
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
  tagline?: string;
  socialLinks?: { platform: string; url: string }[];
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
  const data = await client.fetch(query, {}, { cache: "no-store" });
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center md:text-left">
          {/* Column 1: Logo, Tagline, Socials */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <Logo />
            <p className="text-sm leading-relaxed max-w-xs">
              {footer?.tagline}
            </p>
            <div className="flex space-x-4">
              {footer?.socialLinks?.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <SocialIcon platform={link.platform} />
                </a>
              ))}
            </div>
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
