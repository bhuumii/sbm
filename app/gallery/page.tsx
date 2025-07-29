

import { client } from "@/sanity/client";
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

interface GalleryImage {
  _id: string;
  image: any;
  caption?: string;
}

async function getGalleryImages() {
  
  const query = `*[_type == "galleryImage"] | order(_createdAt desc)`;
  const data = await client.fetch(query, {}, { cache: 'no-store' });
  return data;
}

export default async function GalleryPage() {
  const images: GalleryImage[] = await getGalleryImages();

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Our Gallery</h1>
          <p className="text-gray-600 mt-2">A showcase of our premium materials and solutions in action.</p>
        </div>

        {images && images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((item) => (
              <div key={item._id} className="group relative block w-full aspect-square overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={urlFor(item.image).width(600).height(600).url()}
                  alt={item.caption || 'SBM Traders Gallery Image'}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                {item.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-semibold">{item.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No gallery images have been added yet.</p>
        )}
      </div>
    </div>
  );
}