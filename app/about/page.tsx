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

const portableTextComponents = {
  block: {
    h1: ({children}: any) => (
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
        {children}
      </h1>
    ),
    h2: ({children}: any) => (
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-8">
        {children}
      </h2>
    ),
    h3: ({children}: any) => (
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 mt-6">
        {children}
      </h3>
    ),
    normal: ({children}: any) => {
      const childrenArray = Array.isArray(children) ? children : [children];
      const textContent = childrenArray.map(child => 
        typeof child === 'string' ? child : child?.props?.children || ''
      ).join('');
      
      const valueNames = ['Integrity', 'Commitment', 'Passion', 'Seamlessness', 'Speed', 'Looking Ahead'];
      const startsWithValue = valueNames.some(value => textContent.trim().startsWith(value));
      
      if (startsWithValue) {
        return (
          <div className="flex items-start mb-4">
            <span className="inline-block w-2 h-2 bg-blue-800 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
            <p className="text-base md:text-lg leading-7 text-gray-700 flex-1">
              {children}
            </p>
          </div>
        );
      }
      
      return (
        <p className="text-base md:text-lg leading-7 text-gray-700 mb-4">
          {children}
        </p>
      );
    },
  },
  marks: {
    strong: ({children}: any) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
  },
};

export default async function AboutPage() {
  const data = await getAboutPageData();

  if (!data) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">About Us</h1>
          <p className="text-gray-600">Content for this page has not been added yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
   
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollAnimationWrapper>
  
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              {data.title || 'About Us'}
            </h1>
            <div className="w-24 h-1 bg-blue-800 mx-auto rounded-full mb-4 shadow-lg"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <PortableText 
                  value={data.longDescription || []} 
                  components={portableTextComponents}
                />
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>

      {/* Team Section */}
      {data.teamMembers && data.teamMembers.length > 0 && (
        <div className="bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <ScrollAnimationWrapper>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                  {data.teamSectionTitle || 'Our Team'}
                </h2>
                <div className="w-24 h-1 bg-blue-800 mx-auto rounded-full mb-4 shadow-lg"></div>
              </div>
            </ScrollAnimationWrapper>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.teamMembers.map((member, index) => (
                  <ScrollAnimationWrapper 
                    key={member._id} 
                    delay={index * 100}
                    className="group"
                  >
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden text-center transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                      {member.image && (
                        <div className="relative w-full h-64 overflow-hidden">
                          <Image
                            src={urlFor(member.image).url()}
                            alt={member.name || 'Team member photo'}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {member.name}
                        </h3>
                        <p className="text-blue-800 font-medium text-sm tracking-wide">
                          {member.designation}
                        </p>
                      </div>
                    </div>
                  </ScrollAnimationWrapper>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
