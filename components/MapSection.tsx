'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

interface Location { 
  _id: string; 
  cityName?: string; 
  topPercentage?: number; 
  leftPercentage?: number; 
}

interface MapSectionProps { 
  title?: string; 
  locations: Location[]; 
}

export const MapSection = ({ title, locations }: MapSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  
  if (!locations || locations.length === 0) return null;

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24 relative overflow-hidden">
  
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(29,78,216,0.03),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
   
        <div className={`text-center transform transition-all duration-700 ease-out mb-16 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent mb-4">
            {title || 'Our Global Footprint'}
          </h2>
          <div className="w-24 h-1 bg-blue-800 mx-auto rounded-full"></div>
        </div>

    
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Map Container  */}
          <div className={`lg:col-span-2 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
          }`} style={{ transitionDelay: '300ms' }}>
            
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-100">
              <Image 
                src="/india.svg" 
                alt="Map of India" 
                width={600} 
                height={600} 
                className="w-full h-auto filter drop-shadow-sm" 
              />
   
              {locations.map((loc, index) => (
                <div 
                  key={loc._id} 
                  className="absolute group cursor-pointer transform transition-all duration-300" 
                  style={{ 
                    top: `${loc.topPercentage}%`, 
                    left: `${loc.leftPercentage}%`,
                    animationDelay: `${800 + index * 200}ms`
                  }}
                  onMouseEnter={() => setHoveredLocation(loc._id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                >
               
                  <div className="absolute inset-0 w-6 h-6 bg-blue-800/20 rounded-full animate-ping"></div>
                  
                  {/* Main pin */}
                  <div className={`relative w-4 h-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full shadow-lg transform transition-all duration-300 ${
                    hoveredLocation === loc._id ? 'scale-125' : 'scale-100'
                  } ${isVisible ? 'animate-bounce-once' : ''}`}>
             
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>

           
                  <div className={`absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                    hoveredLocation === loc._id ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'
                  }`}>
                    <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-xl shadow-xl whitespace-nowrap font-medium text-sm relative">
                      {loc.cityName}
                   
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-900"></div>
               
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl opacity-50 blur animate-pulse -z-10"></div>
                    </div>
                  </div>

             
                  {hoveredLocation === loc._id && (
                    <div className="absolute inset-0 w-8 h-8 bg-blue-800/30 rounded-full animate-ping -translate-x-2 -translate-y-2"></div>
                  )}
                </div>
              ))}

              
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`lg:col-span-1 space-y-8 transform transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            
            {/* Stat Card 1 */}
            <div className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold text-white">{locations.length}+</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">Locations</h3>
                  <p className="text-gray-600 text-sm">Nationwide Coverage</p>
                </div>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg font-bold text-white">24/7</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">Support</h3>
                  <p className="text-gray-600 text-sm">Round the Clock</p>
                </div>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg font-bold text-white">100%</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">Coverage</h3>
                  <p className="text-gray-600 text-sm">Pan India Reach</p>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes bounce-once {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-once {
          animation: bounce-once 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};
