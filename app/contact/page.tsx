

import { client } from "@/sanity/client";
import { ContactForm } from "@/components/ContactForm";

import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
}

async function getContactInfo() {
  const query = `*[_type == "contactInfo"][0]`;
  const data = await client.fetch(query, {}, { cache: 'no-store' });
  return data;
}

export default async function ContactPage() {
  const info: ContactInfo = await getContactInfo();

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-600 mt-2">We're here to help. Reach out to us anytime.</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Contact Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
            {info.email && (
              <a href={`mailto:${info.email}`} className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
                <Mail className="w-5 h-5" />
                <span>{info.email}</span>
              </a>
            )}
            {info.phone && (
              <a href={`tel:${info.phone}`} className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
                <Phone className="w-5 h-5" />
                <span>{info.phone}</span>
              </a>
            )}
            {info.address && (
              <div className="flex items-start space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="whitespace-pre-wrap">{info.address}</p>
              </div>
            )}
          </div>

          {/* Right Side: Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}