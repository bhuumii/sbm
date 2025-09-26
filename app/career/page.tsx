import { client } from "@/sanity/client";
import { CareerPageClient } from "@/components/CareerPageClient";

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
  return <CareerPageClient data={data} />;
}
