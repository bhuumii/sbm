"use client";

import { client } from "@/sanity/client";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface ContactInfo {
  email?: string[];
  phone?: string[];
  address?: string;
}

export default function ContactPage() {
  const [info, setInfo] = useState<ContactInfo | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const getContactInfo = async () => {
      const query = `*[_type == "contactInfo"][0]`;
      const data = await client.fetch(query);
      setInfo(data);
    };
    getContactInfo();
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className={isDark ? "bg-gray-900" : "bg-gray-50"}>
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
            isDark ? "text-white" : "text-gray-800"
          }`}>
            Contact Us
          </h1>
          <div className={`w-24 h-1 mx-auto rounded-full mb-4 shadow-lg ${
            isDark ? "bg-gray-400" : "bg-blue-800"
          }`}></div>
          <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            We're here to help. Reach out to us anytime.
          </p>
        </div>

        <div className={`p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}>
          {/* Contact Info Section */}
          <div className="space-y-8">
            <div>
              <h2 className={`text-2xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
                Get in Touch
              </h2>
              <div className="space-y-4">
                {info?.email?.map((emailAddress) => (
                  <a
                    key={emailAddress}
                    href={`mailto:${emailAddress}`}
                    className={`flex items-center space-x-3 transition-colors ${
                      isDark 
                        ? "text-gray-300 hover:text-blue-400" 
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    <Mail className="w-5 h-5" />
                    <span className="break-all">{emailAddress}</span>
                  </a>
                ))}
                {info?.phone?.map((phoneNumber) => (
                  <a
                    key={phoneNumber}
                    href={`tel:${phoneNumber}`}
                    className={`flex items-center space-x-3 transition-colors ${
                      isDark 
                        ? "text-gray-300 hover:text-blue-400" 
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    <Phone className="w-5 h-5" />
                    <span className="break-all">{phoneNumber}</span>
                  </a>
                ))}
                {info?.address && (
                  <div className={`flex items-start space-x-3 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}>
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="whitespace-pre-wrap break-words">
                      {info.address}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0418065346244!2d76.7329371761931!3d30.717225086380815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedd51203ca95%3A0x4c09d88d4520b76a!2sS.B.M%20Traders!5e0!3m2!1sen!2sin!4v1753821139100!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <h2 className={`text-2xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
