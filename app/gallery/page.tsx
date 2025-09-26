"use client";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { useTheme } from "next-themes";

const builder = imageUrlBuilder(client);

interface GalleryImage {
  _id: string;
  image: any;
  caption?: string;
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  useEffect(() => {
    const getGalleryImages = async () => {
      setIsLoading(true);
      const query = `*[_type == "galleryImage"] | order(_createdAt desc)`;
      try {
        const data = await client.fetch(query);
        setImages(data);
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getGalleryImages();
  }, []);

  if (isLoading) {
    return (
      <div className={`text-center p-24 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}>
        Loading Gallery...
      </div>
    );
  }

  return (
    <div className={isDark ? "bg-gray-900" : "bg-white"}>
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <ScrollAnimationWrapper>
          <div className="text-center mb-12">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-800"
            }`}>
              Our Gallery
            </h1>
            <div className={`w-24 h-1 mx-auto rounded-full mb-4 shadow-lg ${
              isDark ? "bg-gray-400" : "bg-blue-800"
            }`}></div>
            <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              A showcase of our premium materials and solutions in action.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {images && images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((item, index) => (
              <ScrollAnimationWrapper key={item._id} delay={index * 100}>
                <div className={`group relative block w-full overflow-hidden rounded-2xl shadow-md border ${
                  isDark 
                    ? "border-gray-700 bg-gray-800" 
                    : "border-gray-100 bg-white"
                }`}>
                  <Image
                    src={builder.image(item.image).width(500).height(400).url()}
                    alt={item.caption || "SBM Traders Gallery Image"}
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover transform group-hover:scale-105 group-hover:brightness-75 transition-all duration-300"
                  />
                  {item.caption && (
                    <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-semibold">
                        {item.caption}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        ) : (
          <p className={`text-center ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}>
            No gallery images have been added yet.
          </p>
        )}
      </div>
    </div>
  );
}
