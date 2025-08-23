import { client, urlFor } from "@/sanity/client";
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";


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

  if (!data) {
    return <div>Content for this page has not been added yet.</div>;
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        
        {/* --- Main About Section --- */}
        <ScrollAnimationWrapper>
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {data.title || 'About Us'}
            </h1>
            <div className="prose lg:prose-lg mx-auto text-gray-600">
              <PortableText value={data.longDescription || []} />
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* --- Meet Our Team Section --- */}
        {data.teamMembers && data.teamMembers.length > 0 && (
          <ScrollAnimationWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                {data.teamSectionTitle || 'Meet Our Team'}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {data.teamMembers.map((member, index) => (
                <ScrollAnimationWrapper 
                  key={member._id} 
                  delay={index * 100}
                  className="bg-gray-50 rounded-lg shadow-md overflow-hidden text-center transform hover:-translate-y-2 transition-transform duration-300"
                >
                  {member.image && (
                    <div className="relative w-full h-64">
                      <Image
                        src={urlFor(member.image).url()}
                        alt={member.name || 'Team member photo'}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-800 font-semibold mt-1">{member.designation}</p>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </ScrollAnimationWrapper>
        )}
      </div>
    </div>
  );
}