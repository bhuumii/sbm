'use client';
import { useState, useEffect, useRef } from 'react';
import { type LucideProps } from 'lucide-react';
import * as icons from 'lucide-react';

interface Feature { 
  _id: string; 
  iconName?: string; 
  title?: string; 
  description?: string; 
}

interface WhyChooseUsProps { 
  title?: string; 
  customerFeatures: Feature[]; 
  manufacturerFeatures: Feature[]; 
}

const DynamicIcon = ({ name, ...props }: { name: string; [key: string]: any }) => {
  
  const iconNameMap: { [key: string]: string } = {
    'handshake': 'Handshake',
    'clock': 'Clock',
    'shield': 'Shield',
    'shieldcheck': 'ShieldCheck',
    'lightbulb': 'Lightbulb',
    'truck': 'Truck',
    'eye': 'Eye',
    'award': 'Award',
    'target': 'Target',
    'users': 'Users',
    'settings': 'Settings',
    'check': 'Check',
    'star': 'Star',
    'heart': 'Heart',
    'thumbsup': 'ThumbsUp'
  };

  const iconName = iconNameMap[name?.toLowerCase()] || name || 'HelpCircle';
  const LucideIcon = (icons as any)[iconName] as React.FC<LucideProps>;
  
  if (!LucideIcon) {
    console.log('Icon not found:', iconName, 'Available icons:', Object.keys(icons).slice(0, 10));
    return <icons.HelpCircle {...props} />;
  }
  return <LucideIcon {...props} />;
};

export const WhyChooseUs = ({ title, customerFeatures, manufacturerFeatures }: WhyChooseUsProps) => {
  const [activeTab, setActiveTab] = useState<'customers' | 'manufacturers'>('customers');
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

  const featuresToShow = activeTab === 'customers' ? (customerFeatures || []) : (manufacturerFeatures || []);

  return (
   <section ref={sectionRef} className="bg-white py-16 md:py-24 relative overflow-hidden">
  <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
     
        <div className={`transform transition-all duration-700 ease-out mb-12 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            {title || 'Why Choose Us?'}
          </h2>
          <div className="w-24 h-1 bg-blue-800 mx-auto rounded-full mb-4 shadow-lg"></div>
        </div>

        <div className={`flex justify-center gap-2 mb-12 transform transition-all duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '200ms' }}>
          <div className="relative bg-gray-100 p-1 rounded-full shadow-inner">
            <button 
              onClick={() => setActiveTab('customers')} 
              className={`relative px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'customers' 
                  ? 'bg-blue-800 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              For Customers
              {activeTab === 'customers' && (
                <div className="absolute inset-0 bg-blue-800 rounded-full animate-pulse opacity-20"></div>
              )}
            </button>
            <button 
              onClick={() => setActiveTab('manufacturers')} 
              className={`relative px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'manufacturers' 
                  ? 'bg-blue-800 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              For Manufacturers
              {activeTab === 'manufacturers' && (
                <div className="absolute inset-0 bg-blue-800 rounded-full animate-pulse opacity-20"></div>
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-7xl mx-auto">
          {featuresToShow.map((feature, index) => (
            <div
              key={feature._id}
              className={`transform transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200 overflow-hidden min-h-[250px] flex flex-col justify-start">
        
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 mb-6 flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-800 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <DynamicIcon 
                      name={feature.iconName || 'HelpCircle'} 
                      size={28} 
                      className="text-white drop-shadow-sm" 
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-16 h-16 bg-blue-800 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                </div>

                <div className="relative z-10 flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
