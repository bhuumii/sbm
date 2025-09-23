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
    <div className="flex flex-col justify-start min-h-screen bg-white relative overflow-hidden pt-4 md:pt-6">

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-indigo-300 rounded-full blur-2xl"></div>
      </div>

      <div className="text-center relative z-10 flex-1 flex flex-col justify-start">
        
        {/* Logo Section - Keep your original HP Victus proportions */}
        <div className="relative mt-2 sm:mt-4 md:mt-8">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="relative transform transition-all duration-700 hover:scale-105">
                <Image 
                  src="/MAIN.png"
                  alt="SBM Logo"
                  width={1000}
                  height={1000}
                  quality={100}
                  priority={true}
                  className="w-72 h-72 sm:w-80 sm:h-80 md:w-[35rem] md:h-[35rem] lg:w-[40rem] lg:h-[40rem] xl:w-[45rem] xl:h-[45rem] object-contain drop-shadow-lg hover:drop-shadow-xl transition-all duration-500"
                  style={{
                    imageRendering: '-webkit-optimize-contrast'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text Section - Keep your original HP Victus proportions */}
        <div className="relative overflow-hidden -mt-4 sm:-mt-6 md:-mt-12 lg:-mt-16 xl:-mt-20">
          <h1 
            className={`text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-900 transition-all duration-1000 transform ${
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
          
          {/* Decorative Line */}
          <div className="relative mt-0.5 md:mt-1">
            <div 
              className={`h-0.5 md:h-1 bg-gradient-to-r from-blue-500/60 to-indigo-500/60 mx-auto transition-all duration-1200 delay-600 ${
                showText ? 'w-24 sm:w-32 md:w-48 lg:w-56 xl:w-64' : 'w-0'
              }`}
            ></div>
          </div>
        </div>

        {/* Tagline Section - Keep your original HP Victus proportions */}
        <div 
          className={`mt-0.5 md:mt-1 transition-all duration-1000 delay-900 transform ${
            showText 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-4 opacity-0'
          }`}
        >
          <p className="text-slate-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium px-4">
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










/* "use client";

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
    <div className="flex items-center justify-center min-h-[50vh] bg-white relative overflow-hidden pt-4 md:pt-6 pb-6 md:pb-8">

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-indigo-300 rounded-full blur-xl"></div>
      </div>

      <div className="text-center relative z-10">
    

        <div className="relative mb-4 md:mb-6">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="relative transform transition-all duration-700 hover:scale-105">
                <Image 
                  src="/MAIN.png"
                  alt="SBM Logo"
                  width={800}
                  height={800}
                  quality={100}
                  priority={true}
                  className="w-52 h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-88 xl:h-88 object-contain drop-shadow-lg hover:drop-shadow-xl transition-all duration-500"
                  style={{
                    imageRendering: '-webkit-optimize-contrast'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

     
        <div className="relative overflow-hidden">
         
    
          <h1 
            className={`text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900 transition-all duration-1000 transform ${
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
          
    
          <div className="relative mt-2 md:mt-3">
            <div 
              className={`h-0.5 md:h-1 bg-gradient-to-r from-blue-500/60 to-indigo-500/60 mx-auto transition-all duration-1200 delay-600 ${
                showText ? 'w-24 md:w-36 lg:w-40' : 'w-0'
              }`}
            ></div>
          </div>
        </div>

        
        <div 
          className={`mt-3 md:mt-4 mb-4 md:mb-6 transition-all duration-1000 delay-900 transform ${
            showText 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-4 opacity-0'
          }`}
        >
          <p className="text-slate-600 text-sm md:text-base lg:text-lg font-medium">
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
}; */
