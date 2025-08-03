// components/ConnectWithUs.tsx

import { client } from "@/sanity/client";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactInfo {
	email?: string;
	phone?: string;
	address?: string;
}

async function getContactInfo() {
	const query = `*[_type == "contactInfo"][0]`;
	const data = await client.fetch(query, {}, { cache: "no-store" });
	return data;
}

export const ConnectWithUs = async () => {
	const info: ContactInfo = await getContactInfo();

	if (!info) {
		return null;
	}

	return (
		<section className="bg-gray-100 py-16 md:py-20">
			<div className="container mx-auto px-6">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-blue-800">CONNECT WITH US</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
					{/* Card 1: Head Office */}
					<div className="bg-white p-8 rounded-lg shadow-md text-center flex flex-col items-center">
						<MapPin className="w-10 h-10 text-blue-800 mb-4" />
						<h3 className="text-lg font-bold text-blue-800 mb-2">
							HEAD OFFICE
						</h3>
						<p className="text-gray-600 whitespace-pre-wrap">
							{info.address || "Address not available"}
						</p>
					</div>

					{/* Card 2: Phone Contact */}
					<div className="bg-white p-8 rounded-lg shadow-md text-center flex flex-col items-center">
						<Phone className="w-10 h-10 text-blue-800 mb-4" />
						<h3 className="text-lg font-bold text-blue-800 mb-2">PHONE</h3>
						<a
							href={`tel:${info.phone}`}
							className="text-gray-600 hover:text-blue-700"
						>
							{info.phone || "Phone not available"}
						</a>
					</div>

					{/* Card 3: Email Contact */}
					<div className="bg-white p-8 rounded-lg shadow-md text-center flex flex-col items-center">
						<Mail className="w-10 h-10 text-blue-800 mb-4" />
						<h3 className="text-lg font-bold text-blue-800 mb-2">EMAIL</h3>
						<a
							href={`mailto:${info.email}`}
							className="text-gray-600 hover:text-blue-700"
						>
							{info.email || "Email not available"}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
