import { client } from "@/sanity/client";
import Link from "next/link";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { ChevronRight } from "lucide-react";

interface Product {
  _id: string;
  name?: string;
  slug?: { current: string };
}

interface ProductCategory {
  _id: string;
  name?: string;
  slug?: { current: string };
  products: Product[];
}

async function getProductCategories() {
  const query = `*[_type == "productCategory"]{
    _id,
    name,
    slug,
    "products": products[]->{_id, name, slug}
  } | order(name asc)`;
  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
}

export default async function ProductsPage() {
  const categories: ProductCategory[] = await getProductCategories();

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
   
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 relative z-10">
        <ScrollAnimationWrapper>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Our Product List
            </h1>
            <div className="w-24 h-1 bg-blue-800 mx-auto rounded-full mb-4 shadow-lg"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A comprehensive overview of our premium materials and supplies.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {categories && categories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <ScrollAnimationWrapper key={category._id} delay={index * 150}>
                <div className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
             
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-gray-100">
                    <Link
                      href={`/products/category/${category.slug?.current}`}
                      className="flex items-center justify-between group-hover:scale-[1.02] transition-transform duration-300"
                    >
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                        {category.name?.replace(/^\d+\.\s*/, "")}
                      </h2>
                      <div className="bg-white/80 p-2 rounded-full group-hover:bg-blue-50 transition-all duration-300">
                        <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-blue-700 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </Link>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Products ({category.products.length})
                      </span>
                      <div className="w-8 h-0.5 bg-blue-200 rounded-full"></div>
                    </div>
                    
                    <div className="max-h-80 overflow-y-auto pr-2 space-y-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                      {category.products.map((product, productIndex) => (
                        <div 
                          key={product._id}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50/80 transition-all duration-300 group/product border border-transparent hover:border-gray-200/50"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2.5 flex-shrink-0 group-hover/product:bg-blue-600 transition-colors duration-300"></div>
                          <span className="text-gray-700 leading-relaxed group-hover/product:text-gray-900 transition-colors duration-300 font-medium">
                            {product.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <Link
                        href={`/products/category/${category.slug?.current}`}
                        className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold text-sm transition-all duration-300 group-hover:gap-3"
                      >
                        View All Products
                        <ChevronRight className="w-4 h-4 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500 mb-4">
              Product categories will be listed here soon.
            </p>
            <p className="text-gray-400">
              We're working on adding our comprehensive product catalog.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
