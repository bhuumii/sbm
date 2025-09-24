"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export const AnimatedSBMLogo = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col justify-start md:justify-center items-center min-h-[calc(100vh - 3.5rem)] bg-white relative overflow-hidden pt-8 md:pt-0">
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-indigo-300 rounded-full blur-2xl"></div>
      </div>

      <div className="flex flex-col justify-center items-center text-center relative z-10 w-full px-4 pb-8 md:pb-12">
        
        <div className="relative">
          <Image
            src="/MAIN.png"
            alt="SBM Logo"
            width={1000}
            height={1000}
            quality={100}
            priority={true}
          
            className="w-auto h-auto max-w-[90vw] md:max-w-[55rem] max-h-[65vh] md:max-h-[80vh] object-contain drop-shadow-lg hover:drop-shadow-xl transition-all duration-500"
            style={{
              imageRendering: '-webkit-optimize-contrast',
            }}
          />
        </div>

    
        <div className="relative -mt-4 md:-mt-16">
          <div className="relative overflow-hidden">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-900 transition-all duration-1000 transform ${
                showText
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-6 opacity-0'
              } hover:scale-102 cursor-default`}
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(59, 130, 246, 0.1))'
              }}
            >
              SBM TRADERS
            </h1>

            <div className="relative mt-0.5 md:mt-1">
              <div
                className={`h-0.5 md:h-1 bg-gradient-to-r from-blue-500/60 to-indigo-500/60 mx-auto transition-all duration-1200 delay-600 ${
                  showText ? 'w-32 md:w-48 lg:w-56 xl:w-64' : 'w-0'
                }`}
              ></div>
            </div>
          </div>

          <div
            className={`mt-0.5 md:mt-1 transition-all duration-1000 delay-900 transform ${
              showText
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            <p className="text-slate-600 text-sm md:text-base lg:text-lg xl:text-xl font-medium">
              India's Trusted Hub for Signage & Branding Materials
            </p>
          </div>
        </div>
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
  );
};