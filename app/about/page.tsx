import { client } from "@/sanity/client";
import { AboutPageClient } from "@/components/AboutClient";

interface TeamMember {
  _id: string;
  name?: string;
  designation?: string;
  image?: any;
}

interface AboutPageData {
  title?: string;
  longDescription?: any[];
  teamSectionTitle?: string;
  teamMembers: TeamMember[];
}

async function getAboutPageData(): Promise<AboutPageData> {
  const query = `*[_type == "aboutPage"][0]{
    title,
    longDescription,
    teamSectionTitle,
    "teamMembers": teamMembers[]->{
      _id,
      name,
      designation,
      image
    }
  }`;
  const data = await client.fetch(query, {}, { cache: 'no-store' });
  return data;
}

export default async function AboutPage() {
  const data = await getAboutPageData();
  return <AboutPageClient data={data} />;
}
