

import { client } from "@/sanity/client";
import { Hero } from "@/components/Hero";
import { AboutSummary } from "@/components/AboutSummary";
import { ServicesSection } from "@/components/ServicesSection";
import { CTASection } from "@/components/CTASection"; 
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

interface Service {
  _id: string;
  title?: string;
  description?: string;
}

interface HomepageData {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: any;
  aboutTitle: string;
  aboutDescription: string;
  services: Service[];
  ctaTitle?: string;      
  ctaButtonText?: string; 
}

async function getHomepageData() {
  const query = `*[_type == "homepage"][0] {
    heroTitle,
    heroSubtitle,
    heroImage,
    aboutTitle,
    aboutDescription,
    "services": services[]->{
      _id,
      title,
      description
    },
    ctaTitle,
    ctaButtonText
  }`;

  const data: HomepageData = await client.fetch(query, {}, { cache: 'no-store' });
  return data;
}

export default async function Home() {
  const data = await getHomepageData();
  console.log("Data received on homepage:", data);

  if (!data) {
    return <div>Loading content or no content found...</div>;
  }

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
      
      
      <CTASection 
        title={data.ctaTitle}
        buttonText={data.ctaButtonText}
      />
    </div>
  );
}

export const revalidate = 0;