'use client';
import { useEffect, useRef, useState } from 'react';

interface Stat { 
  _id: string; 
  number?: string; 
  label?: string; 
}

export const StatsSection = ({ stats }: { stats: Stat[] }) => {
  const [isVisible, setIsVisible] = useState(false);
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

  if (!stats || stats.length === 0) return null;

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-20 relative overflow-hidden"
    >
  
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={stat._id}
              className={`transform transition-all duration-700 ease-out ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms` 
              }}
            >
              <div className="relative group">
          
                <div className="w-12 h-1 bg-gradient-to-r from-blue-800 to-cyan-400 mx-auto mb-4 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </h3>
                
            
                <div className="w-8 h-0.5 bg-gray-600 mx-auto mb-3"></div>
                
                <p className="text-sm md:text-base text-gray-300 uppercase tracking-wider font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>

              
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
