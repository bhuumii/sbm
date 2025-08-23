"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export const AnimatedSBMLogo = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[400px] bg-white relative overflow-hidden">

     
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-indigo-300 rounded-full blur-2xl"></div>
      </div>

      <div className="text-center relative z-10">
    
        <div className="relative mb-4">
          <div className="flex items-center justify-center">
            <div className="relative">
           
              <div className="relative transform transition-all duration-700 hover:scale-105">
                <Image 
                  src="/MAIN.png"
                  alt="SBM Logo"
                  width={120}
                  height={120}
                  quality={100}
                  className="w-80 h-80 object-contain drop-shadow-lg hover:drop-shadow-xl transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>

      
        <div className="relative overflow-hidden">
         
          <h1 
            className={`text-4xl lg:text-5xl font-bold text-blue-900 transition-all duration-1000 transform ${
              showText 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-6 opacity-0'
            } hover:scale-102 cursor-default`}
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(59, 130, 246, 0.1))'
            }}
          >
            SBM
          </h1>
          
         
          <div className="relative mt-2">
            <p 
              className={`text-xl lg:text-2xl font-semibold text-blue-900 transition-all duration-1000 delay-300 transform ${
                showText 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-6 opacity-0'
              } hover:text-blue-700 cursor-default tracking-wider`}
            >
              TRADERS
            </p>
            
         
            <div 
              className={`h-0.5 bg-gradient-to-r from-blue-500/60 to-indigo-500/60 mx-auto transition-all duration-1200 delay-600 ${
                showText ? 'w-32' : 'w-0'
              }`}
            ></div>
          </div>
        </div>

        <div 
          className={`mt-6 transition-all duration-1000 delay-900 transform ${
            showText 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-4 opacity-0'
          }`}
        >
          <p className="text-slate-600 text-lg font-medium">
            India's Trusted Hub for Signage & Branding Materials
          </p>
        </div>

        
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
};
