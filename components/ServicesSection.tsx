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
		<section className="bg-gray-50 py-16 md:py-24">
			<div className="container mx-auto px-4 sm:px-6">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800">
						Our Services
					</h2>
					<p className="text-gray-600 mt-2">
						What we provide to our valued partners.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service) => (
						<div
							key={service._id}
							className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
						>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{service.title}
							</h3>
							<p className="text-gray-600 leading-relaxed">
								{service.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
