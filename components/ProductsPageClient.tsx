'use client';
import Link from "next/link";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from 'react';

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

export const ProductsPageClient = ({ categories }: { categories: ProductCategory[] }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className={`min-h-screen ${
      isDark 
        ? "bg-gray-900" 
        : "bg-white"
    }`}>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 relative z-10">
        <ScrollAnimationWrapper>
          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-800"
            }`}>
              Our Product List
            </h1>
            <div className={`w-24 h-1 mx-auto rounded-full mb-4 shadow-lg ${
              isDark ? "bg-gray-400" : "bg-blue-800"
            }`}></div>
            <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              A comprehensive overview of our premium materials and supplies.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {categories && categories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <ScrollAnimationWrapper key={category._id} delay={index * 150}>
                <div className={`group backdrop-blur-sm border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                  isDark 
                    ? "bg-gray-800/80 border-gray-700/50" 
                    : "bg-white/80 border-gray-200/50"
                }`}>
                  {/* Header */}
                  <div className={`p-6 border-b ${
                    isDark 
                      ? "bg-gradient-to-r from-gray-800 to-gray-700 border-gray-700" 
                      : "bg-gradient-to-r from-blue-50 to-indigo-50 border-gray-100"
                  }`}>
                    <Link
                      href={`/products/category/${category.slug?.current}`}
                      className="flex items-center justify-between group-hover:scale-[1.02] transition-transform duration-300"
                    >
                      <h2 className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                        isDark 
                          ? "text-white group-hover:text-blue-400" 
                          : "text-gray-900 group-hover:text-blue-800"
                      }`}>
                        {category.name?.replace(/^\d+\.\s*/, "")}
                      </h2>
                      <div className={`p-2 rounded-full transition-all duration-300 ${
                        isDark 
                          ? "bg-gray-700/80 group-hover:bg-gray-600" 
                          : "bg-white/80 group-hover:bg-blue-50"
                      }`}>
                        <ChevronRight className={`w-5 h-5 transition-all duration-300 group-hover:translate-x-1 ${
                          isDark 
                            ? "text-gray-400 group-hover:text-blue-400" 
                            : "text-gray-500 group-hover:text-blue-700"
                        }`} />
                      </div>
                    </Link>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-sm font-semibold uppercase tracking-wide ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}>
                        Products ({category.products.length})
                      </span>
                      <div className={`w-8 h-0.5 rounded-full ${
                        isDark ? "bg-gray-600" : "bg-blue-200"
                      }`}></div>
                    </div>
                    
                    <div className="max-h-80 overflow-y-auto pr-2 space-y-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                      {category.products.map((product, productIndex) => (
                        <div 
                          key={product._id}
                          className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-300 group/product border border-transparent ${
                            isDark 
                              ? "hover:bg-gray-700/80 hover:border-gray-600/50" 
                              : "hover:bg-gray-50/80 hover:border-gray-200/50"
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full mt-2.5 flex-shrink-0 transition-colors duration-300 ${
                            isDark 
                              ? "bg-blue-500 group-hover/product:bg-blue-400" 
                              : "bg-blue-400 group-hover/product:bg-blue-600"
                          }`}></div>
                          <span className={`leading-relaxed transition-colors duration-300 font-medium ${
                            isDark 
                              ? "text-gray-300 group-hover/product:text-white" 
                              : "text-gray-700 group-hover/product:text-gray-900"
                          }`}>
                            {product.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className={`mt-6 pt-4 border-t ${
                      isDark ? "border-gray-700" : "border-gray-100"
                    }`}>
                      <Link
                        href={`/products/category/${category.slug?.current}`}
                        className={`inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300 group-hover:gap-3 ${
                          isDark 
                            ? "text-blue-400 hover:text-blue-300" 
                            : "text-blue-700 hover:text-blue-800"
                        }`}
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
            <p className={`text-xl mb-4 ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}>
              Product categories will be listed here soon.
            </p>
            <p className={isDark ? "text-gray-500" : "text-gray-400"}>
              We're working on adding our comprehensive product catalog.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
