"use client";

import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";

const builder = imageUrlBuilder(client);

interface ContentBlock {
  _key: string;
  heading?: string;
  listItems?: string[];
  image?: any;
  imagePlacement?: "Left" | "Right";
}
interface Product {
  name?: string;
  pageBuilder?: ContentBlock[];
}

export default function ProductPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const getProductData = async () => {
      setIsLoading(true);

      const query = `*[_type == "product" && slug.current == $slug][0]{
        name,
        pageBuilder
      }`;
      try {
        const data = await client.fetch(query, { slug });
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getProductData();
  }, [slug]);

  if (isLoading) {
    return <div className="text-center p-24">Loading product...</div>;
  }

  if (!product) {
    return <div className="text-center p-24">Product not found.</div>;
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <ScrollAnimationWrapper>
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800">
              {product.name}
            </h1>
          </div>
        </ScrollAnimationWrapper>

        <div className="space-y-12 md:space-y-24">
          {product.pageBuilder?.map((block, index) => (
            <ScrollAnimationWrapper key={block._key} delay={index * 150}>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
                {/* Image Column */}
                <div
                  className={`md:col-span-2 w-full aspect-square md:aspect-auto md:h-[350px] relative rounded-lg shadow-lg overflow-hidden ${
                    block.imagePlacement === "Left"
                      ? "md:order-1"
                      : "md:order-2"
                  }`}
                >
                  {block.image && (
                    <Image
                      src={builder.image(block.image).url()}
                      alt={block.heading || "Product feature image"}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Text Column */}
                <div
                  className={`md:col-span-3 flex flex-col justify-center ${
                    block.imagePlacement === "Left"
                      ? "md:order-2"
                      : "md:order-1"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {block.heading}
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-gray-600">
                    {block.listItems?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}
