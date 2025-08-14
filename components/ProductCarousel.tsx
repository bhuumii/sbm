"use client";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { urlFor } from "@/sanity/client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback } from "react";

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
		loop: true,
		align: "start",
		slidesToScroll: 1,
	});
	const scrollPrev = useCallback(
		() => emblaApi && emblaApi.scrollPrev(),
		[emblaApi],
	);
	const scrollNext = useCallback(
		() => emblaApi && emblaApi.scrollNext(),
		[emblaApi],
	);

	if (!categories || categories.length === 0) return null;

	return (
		<section className="bg-gray-50 py-16 md:py-24">
			<div className="container mx-auto">
				<div className="text-center px-4 sm:px-6 mb-8">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800">
						{title || "Our Core Product Range"}
					</h2>
				</div>

				<div className="overflow-hidden relative" ref={emblaRef}>
					<div className="flex -ml-4">
						{categories.map((category) => (
							<div
								key={category._id}
								className="flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_33.33%] pl-4 py-4"
							>
								<Link
									href={`/products/category/${category.slug?.current}`}
									className="group block bg-gray-900 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl relative"
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
										<div className="absolute inset-0 top-auto h-full bg-white transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></div>
										<div className="relative">
											<p className="text-base font-semibold text-blue-800 mb-1">
												{category.tagline}
											</p>
											<h3 className="text-2xl font-bold transition-colors duration-300 text-white group-hover:text-black">
												{category.name?.replace(/^\d+\.\s*/, "")}
											</h3>

											<div
												className="absolute top-0 right-0 bg-blue-800 text-white p-3 rounded-full
                                  opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                                  transition-all duration-300 ease-in-out"
											>
												<ArrowRight size={20} />
											</div>
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>

					<div className="absolute top-1/2 left-0 right-0 flex justify-between px-2 md:hidden">
						<button
							onClick={scrollPrev}
							className="bg-white p-2 rounded-full shadow-md"
						>
							<ArrowLeft size={20} className="text-gray-700" />
						</button>
						<button
							onClick={scrollNext}
							className="bg-white p-2 rounded-full shadow-md"
						>
							<ArrowRight size={20} className="text-gray-700" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
