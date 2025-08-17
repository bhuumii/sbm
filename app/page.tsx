import { client, urlFor } from "@/sanity/client";
import { Hero } from "@/components/Hero";
import { AboutSummary } from "@/components/AboutSummary";
import { ServicesSection } from "@/components/ServicesSection";
import { ProductCarousel } from "@/components/ProductCarousel";
import { GalleryTeaser } from "@/components/GalleryTeaser";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";

interface CategoryLink {
  _id: string;
  name?: string;
  slug?: { current: string };
  tagline?: string;
  image?: any;
}

interface HomepageData {
  heroSlides: any[];
  aboutTitle: string;
  aboutDescription: string;
  aboutImage: any;
  services: any[];
  productsTitle?: string;
  productCategories: CategoryLink[];
  galleryTitle?: string;
  featuredGalleryImages: any[];
}

async function getHomepageData() {
  const query = `*[_type == "homepage"][0] {
    "heroSlides": heroSlides[]->{_id, title, subtitle, image},
    aboutTitle,
    aboutDescription,
    aboutImage,
    "services": services[]->{ _id, title, description },
    productsTitle,
 
    "productCategories": productCategories[]->{ _id, name, slug, tagline, image }, 
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
      <Hero slides={data.heroSlides} />

      <ScrollAnimationWrapper>
        <AboutSummary
          title={data.aboutTitle}
          description={data.aboutDescription}
          image={data.aboutImage}
        />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <ServicesSection services={data.services} />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <ProductCarousel
          title={data.productsTitle}
          categories={data.productCategories}
        />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <GalleryTeaser
          title={data.galleryTitle}
          images={
            data.featuredGalleryImages?.map((img) => ({
              ...img,
              imageUrl: urlFor(img.image).width(600).height(600).url(),
            })) || []
          }
        />
      </ScrollAnimationWrapper>
    </div>
  );
}
