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
    // CHANGE 1: Main container takes up the remaining height of the viewport after the header.
    // Assuming your header has a height of 4rem (h-16). Adjust '4rem' if your header is different.
    // The 'justify-center' and 'items-center' will center the content within this remaining space.
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh - 4rem)] bg-white relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-indigo-300 rounded-full blur-2xl"></div>
      </div>

      {/* CHANGE 2: This inner div holds the logo and text, and is centered as a unit. */}
      <div className="flex flex-col justify-center items-center text-center relative z-10 w-full px-4">
        {/* Logo Container */}
        <div className="relative">
          <Image
            src="/MAIN.png"
            alt="SBM Logo"
            width={1000} // Intrinsic width for Next.js Image optimization
            height={1000} // Intrinsic height for Next.js Image optimization
            quality={100}
            priority={true}
            // CHANGE 3: Aggressive & Safe Logo Sizing for all screens.
            // - w-auto h-auto: Maintains aspect ratio.
            // - max-w-[90vw]: On smaller screens, logo takes up 90% of viewport width (very large).
            // - md:max-w-[45rem]: On medium screens and up (like your HP Victus), caps the width at 45rem,
            //                     retaining the desired large desktop size.
            // - max-h-[65vh]: CRITICAL: Limits logo height to 65% of viewport height,
            //                 ensuring sufficient space for text below on even the shortest screens.
            //                 Adjust '65vh' slightly if needed, e.g., to 60vh or 70vh.
            className="w-auto h-auto max-w-[90vw] md:max-w-[45rem] max-h-[65vh] object-contain drop-shadow-lg hover:drop-shadow-xl transition-all duration-500"
            style={{
              imageRendering: '-webkit-optimize-contrast',
            }}
          />
        </div>

        {/* Text Block (SBM TRADERS and Sub-line) */}
        {/* CHANGE 4: Adjusted top margin for better spacing between logo and text. */}
        <div className="relative overflow-hidden mt-6 md:mt-8 lg:mt-10">
          <h1
            className={`text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-900 transition-all duration-1000 transform ${
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