"use client";

import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";

const builder = imageUrlBuilder(client);

interface Product {
  _id: string;
  name?: string;
  slug?: { current: string };
  image?: any;
  description?: string;
}
interface Category {
  name?: string;
  description?: string;
  image?: any;
  products: Product[];
}

export default function CategoryPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const [category, setCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const getCategoryData = async () => {
      setIsLoading(true);
      const query = `*[_type == "productCategory" && slug.current == $slug][0]{
        name, description, image,
        "products": products[]->{_id, name, slug, image, description}
      }`;

      try {
        const data = await client.fetch(query, { slug });
        setCategory(data);
      } catch (error) {
        console.error("Failed to fetch category data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getCategoryData();
  }, [slug]);

  if (isLoading) {
    return <div className="text-center p-24">Loading category...</div>;
  }

  if (!category) {
    return <div className="text-center p-24">Category not found.</div>;
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative h-64 md:h-80 bg-cover bg-center text-white flex items-center justify-center"
        style={
          category.image
            ? {
                backgroundImage: `url(${builder.image(category.image).width(1800).url()})`,
              }
            : { backgroundColor: "#333" }
        }
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative text-center z-10 p-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            {category.name?.replace(/^\d+\.\s*/, "")}
          </h1>
          <p className="mt-2 text-lg text-white drop-shadow-md">{category.description}</p>
        </div>
      </div>

      {/* Products Grid Section */}
      <div className="container mx-auto px-6 py-12 md:py-20">
        <ScrollAnimationWrapper>
          <div className="text-center mb-12">
         
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 opacity-0 animate-headingEnhanced">
              Our {category.name?.replace(/^\d+\.\s*/, "")} Products
            </h2>
            
         
            <div className="w-0 h-1 bg-blue-800 mx-auto rounded-full animate-growWidth"></div>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 justify-items-center">
          {category.products &&
            category.products.map((product, index) => (
              <ScrollAnimationWrapper key={product._id} delay={index * 100}>
                <div className="group block text-center">
                  <div className="relative w-56 h-56 md:w-64 md:h-64 mx-auto">
                    <div className="relative w-full h-full rounded-full shadow-lg overflow-hidden">
                      {/* Product Image */}
                      {product.image ? (
                       <Image
  src={builder.image(product.image).url()}
  alt={product.name || "Product Image"}
  fill
  sizes="(max-width: 768px) 100vw, 33vw"
  className="object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-50"
/>
                      ) : (
                        <div className="w-full h-full bg-gray-200 rounded-full"></div>
                      )}

        
<div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
  <p className="text-white text-sm text-center font-medium shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
    {product.description}
  </p>
</div>

                      {/* Product Name */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white text-xs px-3 py-1 rounded">
                        {product.name}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
        </div>
      </div>

 
    
<style jsx>{`
  @keyframes headingEnhanced {
    0% {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
      filter: blur(5px);
    }
    50% {
      opacity: 0.7;
      transform: translateY(10px) scale(0.98);
      filter: blur(2px);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
      filter: blur(0px);
    }
  }

  @keyframes growWidth {
    from {
      width: 0;
    }
    to {
      width: 6rem;
    }
  }

  .animate-headingEnhanced {
    animation: headingEnhanced 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
  }

  .animate-growWidth {
    animation: growWidth 1.5s ease-out 1.2s forwards;
  }
`}</style>

    </div>
  );
}
