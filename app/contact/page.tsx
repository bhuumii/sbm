// app/contact/page.tsx

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
          {/* Left Side: Contact Details & Map */}
          <div className="space-y-8"> {/* Increased spacing */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-4"> {/* Inner spacing for details */}
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
            </div>

            {/* --- NEW: Google Map Section --- */}
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