'use client';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from "next-themes";

interface Stat { 
  _id: string; 
  number?: string; 
  label?: string; 
}


const useCountUp = (target: number, isVisible: boolean, delay: number = 0) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = target / steps;
      const stepDuration = duration / steps;
      
      let current = 0;
      const interval = setInterval(() => {
        current += stepValue;
        if (current >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, target, delay]);

  return count;
};

export const StatsSection = ({ stats }: { stats: Stat[] }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const extractNumber = (numberStr: string): number => {
    const num = parseInt(numberStr.replace(/[^0-9]/g, ''));
    return isNaN(num) ? 0 : num;
  };

  const formatNumber = (originalStr: string, currentNum: number): string => {
    const suffix = originalStr.replace(/[0-9]/g, '');
    return currentNum + suffix;
  };

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section 
      ref={sectionRef}
      className={`${
        isDark 
          ? "bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800" 
          : "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      } ${
        isDark ? "text-white" : "text-white"
      } py-16 md:py-20 relative overflow-hidden`}
    >
   
      <div className={`absolute inset-0 ${
        isDark 
          ? "bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)]" 
          : "bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)]"
      } bg-[length:20px_20px]`}></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat, index) => {
            const targetNumber = extractNumber(stat.number || '0');
            const animatedCount = useCountUp(targetNumber, isVisible, index * 150);
            const displayNumber = formatNumber(stat.number || '0', animatedCount);
            
            return (
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
                  {/* Top blue line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-200 mx-auto mb-4 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  
                  {/* Numbers */}
                  <h3 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 ${
                    isDark 
                      ? "bg-gradient-to-b from-white to-gray-200 bg-clip-text text-transparent" 
                      : "bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent"
                  }`}>
                    {displayNumber}
                  </h3>
                  
                  {/* Separator line */}
                  <div className={`w-8 h-0.5 mx-auto mb-3 ${
                    isDark ? "bg-gray-500" : "bg-gray-600"
                  }`}></div>
                  
                  {/* Labels */}
                  <p className={`text-sm md:text-base uppercase tracking-wider font-medium transition-colors duration-300 ${
                    isDark 
                      ? "text-gray-300 group-hover:text-white" 
                      : "text-gray-300 group-hover:text-white"
                  }`}>
                    {stat.label}
                  </p>

                  {/* Hover background effect */}
                  <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 ${
                    isDark 
                      ? "bg-gradient-to-t from-blue-500/15 to-blue-400/5" 
                      : "bg-gradient-to-t from-blue-500/10 to-transparent"
                  }`}></div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
