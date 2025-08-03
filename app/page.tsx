import { client } from "@/sanity/client";
import { Hero } from "@/components/Hero";
import { AboutSummary } from "@/components/AboutSummary";
import { ServicesSection } from "@/components/ServicesSection";
import { ProductsTeaser } from "@/components/ProductsTeaser";
import { GalleryTeaser } from "@/components/GalleryTeaser";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
	return builder.image(source);
}

interface Service {
	_id: string;
	title?: string;
	description?: string;
}
interface GalleryImage {
	_id: string;
	image: any;
	caption?: string;
}

interface CategoryLink {
	_id: string;
	name?: string;
	slug?: { current: string };
}

interface HomepageData {
	heroTitle: string;
	heroSubtitle: string;
	heroImage: any;
	aboutTitle: string;
	aboutDescription: string;
	services: Service[];
	productsTitle?: string;
	productCategories: CategoryLink[];
	galleryTitle?: string;
	featuredGalleryImages: GalleryImage[];
}

async function getHomepageData() {
	const query = `*[_type == "homepage"][0] {
    heroTitle,
    heroSubtitle,
    heroImage,
    aboutTitle,
    aboutDescription,
    "services": services[]->{ _id, title, description },
    productsTitle,
    "productCategories": productCategories[]->{ _id, name, slug }, // Fetch the linked categories
    galleryTitle,
    "featuredGalleryImages": featuredGalleryImages[]->{ _id, image, caption }
  }`;

	const data: HomepageData = await client.fetch(
		query,
		{},
		{ cache: "no-store" },
	);
	return data;
}

export default async function Home() {
	const data = await getHomepageData();
	if (!data) return <div>Loading...</div>;

	return (
		<div>
			<Hero
				title={data.heroTitle}
				subtitle={data.heroSubtitle}
				imageUrl={urlFor(data.heroImage).width(1800).url()}
			/>
			<AboutSummary
				title={data.aboutTitle}
				description={data.aboutDescription}
			/>
			<ServicesSection services={data.services} />
			<ProductsTeaser
				title={data.productsTitle}
				categories={data.productCategories}
			/>
			<GalleryTeaser
				title={data.galleryTitle}
				images={
					data.featuredGalleryImages?.map((img) => ({
						...img,
						imageUrl: urlFor(img.image).width(600).height(600).url(),
					})) || []
				}
			/>
		</div>
	);
}

export const revalidate = 0;
