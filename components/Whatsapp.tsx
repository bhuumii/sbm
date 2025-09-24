'use client';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = ({ phoneNumber }: { phoneNumber?: string }) => {
  if (!phoneNumber) {
    return null;
  }
  
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-600 text-white
                 flex items-center gap-3 px-5 py-3 rounded-full shadow-lg
                 hover:bg-green-600 transform hover:scale-105 transition-all duration-300"
    >
      <MessageCircle size={24} />
     
    </a>
  );
};