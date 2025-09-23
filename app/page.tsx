import { client, urlFor } from "@/sanity/client";
import { AnimatedSBMLogo } from "@/components/AnimatedSBMLogo";

import { MapSection } from "@/components/MapSection";
import { StatsSection } from "@/components/StatsSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";

import { ProductCarousel } from "@/components/ProductCarousel";

import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";


interface CategoryLink {
  _id: string;
  name?: string;
  slug?: { current: string };
  tagline?: string;
  image?: any;
}

interface GalleryImage {
  _id: string;
  image: any;
  caption?: string;
}

interface Stat {
  _id: string;
  number?: string;
  label?: string;
}

interface Feature {
  _id: string;
  iconName?: string;
  title?: string;
  description?: string;
}

interface Location {
  _id: string;
  cityName?: string;
  topPercentage?: number;
  leftPercentage?: number;
}


interface HomepageData {
  aboutTitle: string;
  aboutDescription: string;
  aboutImage: any;
    mapTitle?: string;
  locations: Location[];
    whyChooseUsTitle?: string;
  customerFeatures: Feature[];
  manufacturerFeatures: Feature[];
  stats: Stat[];
  productsTitle?: string;
  productCategories: CategoryLink[];
  galleryTitle?: string;
  featuredGalleryImages: GalleryImage[];
}


async function getHomepageData(): Promise<HomepageData> {
  const query = `*[_type == "homepage"][0] {
    aboutTitle,
    aboutDescription,
    aboutImage,
       mapTitle,
    "locations": locations[]->{_id, cityName, topPercentage, leftPercentage},
    productsTitle,
    
    whyChooseUsTitle,
    "customerFeatures": customerFeatures[]->{_id, iconName, title, description},
    "manufacturerFeatures": manufacturerFeatures[]->{_id, iconName, title, description},
 "stats": stats[]->{_id, number, label},
    "productCategories": productCategories[]->{_id, name, slug, tagline, image},
    galleryTitle,
    "featuredGalleryImages": featuredGalleryImages[]->{_id, image, caption}
  }`;
  
  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
}

export default async function Home() {
  const data = await getHomepageData();
  
  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <AnimatedSBMLogo />

      <ScrollAnimationWrapper> <StatsSection stats={data.stats} /></ScrollAnimationWrapper>


      <ScrollAnimationWrapper>
        <ProductCarousel 
          title={data.productsTitle} 
          categories={data.productCategories} 
        />
      </ScrollAnimationWrapper>


 <ScrollAnimationWrapper>
  <MapSection 
        title={data.mapTitle} 
        locations={data.locations} 
      /></ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
  <WhyChooseUs 
        title={data.whyChooseUsTitle} 
        customerFeatures={data.customerFeatures} 
        manufacturerFeatures={data.manufacturerFeatures} 
      />
</ScrollAnimationWrapper>
 

    </div>
  );
}