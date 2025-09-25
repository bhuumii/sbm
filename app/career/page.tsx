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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              {data.title || "Join Our Team"}
            </h1>
            <div className="w-24 h-1 bg-blue-800 mx-auto rounded-full mb-4 shadow-lg"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
