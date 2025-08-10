"use client";
import useEmblaCarousel from "embla-carousel-react";
import { urlFor } from "@/sanity/client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

export const Hero = ({ slides }: { slides: any[] }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: "center",
	});

	const scrollPrev = useCallback(
		() => emblaApi && emblaApi.scrollPrev(),
		[emblaApi],
	);
	const scrollNext = useCallback(
		() => emblaApi && emblaApi.scrollNext(),
		[emblaApi],
	);

	if (!slides || slides.length === 0)
		return (
			<div className="h-[60vh] bg-gray-800 flex items-center justify-center text-white">
				No slides to display.
			</div>
		);

	return (
		<div
			className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden"
			ref={emblaRef}
		>
			<div className="flex h-full">
				{slides.map((slide) => (
					<div key={slide._id} className="relative flex-[0_0_100%] h-full">
						<div
							className="absolute inset-0 bg-cover bg-center"
							style={
								slide.image
									? {
											backgroundImage: `url(${urlFor(slide.image).width(1920).quality(80).url()})`,
										}
									: { backgroundColor: "#111" }
							}
						/>

						<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center">
							<div
								className="text-center text-white p-4 max-w-4xl mx-auto animate-fadeInUp"
								style={{ animationDelay: "300ms", opacity: 0 }}
							>
								<h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
									{slide.title}
								</h1>
								<p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
									{slide.subtitle}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>

			<button
				onClick={scrollPrev}
				className="absolute top-1/2 left-3 md:left-5 -translate-y-1/2 bg-black bg-opacity-30 p-2 rounded-full text-white hover:bg-opacity-50 transition-all duration-300"
			>
				<ChevronLeft size={28} />
			</button>
			<button
				onClick={scrollNext}
				className="absolute top-1/2 right-3 md:right-5 -translate-y-1/2 bg-black bg-opacity-30 p-2 rounded-full text-white hover:bg-opacity-50 transition-all duration-300"
			>
				<ChevronRight size={28} />
			</button>
		</div>
	);
};
