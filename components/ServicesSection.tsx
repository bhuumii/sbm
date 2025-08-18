interface Service {
    _id: string;
    title?: string;
    description?: string;
}

interface ServicesSectionProps {
    services: Service[];
}

export const ServicesSection = ({ services }: ServicesSectionProps) => {
    if (!services || services.length === 0) {
        return null;
    }

    return (
        <section className="bg-white py-20 md:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                        Our Services
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        What we provide to our valued partners.
                    </p>
                  
                    <div className="w-20 h-1 bg-blue-800 mx-auto mt-6"></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {services.map((service, index) => (
                        <div
                            key={service._id}
                            className="group bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                           
                            <div className="w-full flex justify-start mb-6">
                                <svg width="40" height="6" viewBox="0 0 40 6" fill="none">
                                    <rect x="0" y="2" width="40" height="2" rx="1" fill="url(#lineGradient)" />
                                    <defs>
                                        <linearGradient id={`lineGradient-${index}`} x1="0" y1="3" x2="40" y2="3" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#1e3a8a" />
                                            <stop offset="1" stopColor="#60a5fa" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            {/* Service Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-base">
                                {service.description}
                            </p>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
