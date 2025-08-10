import { client } from "@/sanity/client";
import { CareerForm } from "@/components/CareerForm";

interface CareerPageData {
	title?: string;
	subtitle?: string;
}

async function getCareerPageData() {
	const query = `*[_type == "careerPage"][0]`;
	const data = await client.fetch(query);
	return data;
}

export default async function CareerPage() {
	const data: CareerPageData = await getCareerPageData();

	return (
		<div className="bg-white">
			<div className="container mx-auto px-6 py-12 md:py-16">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<h1 className="text-3xl md:text-4xl font-bold text-blue-800">
							{data.title || "Join Our Team"}
						</h1>
						<p className="text-gray-600 mt-4 max-w-2xl mx-auto">
							{data.subtitle ||
								"We are always looking for talented individuals."}
						</p>
					</div>
					<CareerForm />
				</div>
			</div>
		</div>
	);
}
