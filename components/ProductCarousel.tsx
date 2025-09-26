"use client";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { urlFor } from "@/sanity/client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface CategoryLink {
  _id: string;
  name?: string;
  slug?: { current: string };
  tagline?: string;
  image?: any;
}

interface ProductCarouselProps {
  title?: string;
  categories: CategoryLink[];
}

export const ProductCarousel = ({
  title,
  categories,
}: ProductCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false, 
    align: "start",
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const handleCardClick = (e: React.MouseEvent, categoryId: string) => {
 
    if (window.innerWidth < 768) {
      e.preventDefault();
      setActiveCardId(activeCardId === categoryId ? null : categoryId);
    }
  };

  const handleArrowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
   
  };

  if (!categories || categories.length === 0) return null;

  return (
    <section className={`${isDark ? "bg-gray-900" : "bg-white"} py-16 md:py-24`}>
      <div className="container mx-auto relative">
        <div className="text-center px-4 sm:px-6 mb-8">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isDark ? "text-white" : "text-gray-800"} mb-4`}>
            {title || "Product Range"}
          </h2>
         <div className={`w-24 h-1 ${isDark ? "bg-gray-400" : "bg-blue-800"} mx-auto rounded-full mb-4 shadow-lg`}></div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {categories.map((category) => {
              const isActive = activeCardId === category._id;
              
              return (
                <div
                  key={category._id}
                  className="flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_33.33%] pl-4 py-4"
                >
                  <Link
                    href={`/products/category/${category.slug?.current}`}
                    className={`group block bg-gray-900 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl relative ${
                      isActive ? 'md:group' : ''
                    }`}
                    onClick={(e) => handleCardClick(e, category._id)}
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={urlFor(category.image).url()}
                        alt={category.name || "Category Image"}
                        fill
                        sizes="(max-width: 768px) 90vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className={`absolute inset-0 top-auto h-full transform origin-bottom transition-transform duration-500 ease-in-out ${
                        isActive 
                          ? 'scale-y-100' 
                          : 'scale-y-0 group-hover:scale-y-100'
                      } ${
                        isDark ? "bg-gray-900" : "bg-white"
                      }`}></div>
                      <div className="relative">
                        <p className="text-base font-semibold text-blue-800 mb-1">
                          {category.tagline}
                        </p>
                        <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                          isActive
                            ? isDark ? "text-white" : "text-black"
                            : isDark 
                              ? "text-white group-hover:text-white" 
                              : "text-white group-hover:text-black"
                        }`}>
                          {category.name?.replace(/^\d+\.\s*/, "")}
                        </h3>
                        <div
                          className={`absolute top-0 right-0 p-3 rounded-full transition-all duration-300 ease-in-out ${
                            isActive
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
                          } ${
                            isDark ? "bg-white text-gray-900" : "bg-blue-800 text-white"
                          }`}
                          onClick={handleArrowClick}
                        >
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {(canScrollPrev || canScrollNext) && (
          <div className="hidden md:block">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className={`absolute top-1/2 -translate-y-1/2 -left-8 z-10 p-3 rounded-full shadow-lg transition-all duration-200 ${
                canScrollPrev 
                  ? 'bg-white text-gray-800 hover:bg-gray-100 hover:scale-110' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className={`absolute top-1/2 -translate-y-1/2 -right-8 z-10 p-3 rounded-full shadow-lg transition-all duration-200 ${
                canScrollNext 
                  ? 'bg-white text-gray-800 hover:bg-gray-100 hover:scale-110' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ArrowRight size={24} />
            </button>
          </div>
        )}

        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:hidden">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`p-2 rounded-full shadow-md transition-all duration-200 ${
              canScrollPrev 
                ? 'bg-white text-gray-700 hover:bg-gray-100' 
                : 'bg-gray-300 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`p-2 rounded-full shadow-md transition-all duration-200 ${
              canScrollNext 
                ? 'bg-white text-gray-700 hover:bg-gray-100' 
                : 'bg-gray-300 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
