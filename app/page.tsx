// app/page.tsx
import { client, urlFor } from "@/sanity/client";
import { AnimatedSBMLogo } from "@/components/AnimatedSBMLogo";
import { AboutSummary } from "@/components/AboutSummary";
import { ServicesSection } from "@/components/ServicesSection";
import { ProductCarousel } from "@/components/ProductCarousel";
import { GalleryTeaser } from "@/components/GalleryTeaser";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";

// Define all the data shapes needed for the homepage
interface Service { _id: string; title?: string; description?: string; }
interface CategoryLink { _id: string; name?: string; slug?: { current: string }; tagline?: string; image?: any; }
interface GalleryImage { _id: string; image: any; caption?: string; }
interface HomepageData {
  aboutTitle: string;
  aboutDescription: string;
  aboutImage: any;
  services: Service[];
  productsTitle?: string;
  productCategories: CategoryLink[];
  galleryTitle?: string;
  featuredGalleryImages: GalleryImage[];
}

async function getHomepageData() {
  // The complete query to fetch all sections
  const query = `*[_type == "homepage"][0] {
    aboutTitle,
    aboutDescription,
    aboutImage,
    "services": services[]->{ _id, title, description },
    productsTitle,
    "productCategories": productCategories[]->{ _id, name, slug, tagline, image },
    galleryTitle,
    "featuredGalleryImages": featuredGalleryImages[]->{ _id, image, caption }
  }`;
  const data: HomepageData = await client.fetch(query, {}, { cache: "no-store" });
  return data;
}

export default async function Home() {
  const data = await getHomepageData();
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {/* 1. Animated Logo Hero (as you created it) */}
      <AnimatedSBMLogo />

      {/* 2. "Welcome to SBM Traders" Section (Restored) */}
      <ScrollAnimationWrapper>
        <AboutSummary
          title={data.aboutTitle}
          description={data.aboutDescription}
          image={data.aboutImage}
        />
      </ScrollAnimationWrapper>

      {/* 3. "Our Services" Section (Restored) */}
      <ScrollAnimationWrapper>
        <ServicesSection services={data.services} />
      </ScrollAnimationWrapper>

      {/* 4. Product Carousel Section */}
      <ScrollAnimationWrapper>
        <ProductCarousel
          title={data.productsTitle}
          categories={data.productCategories}
        />
      </ScrollAnimationWrapper>

      {/* 5. Gallery Teaser Section */}
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
