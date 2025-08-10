import Image from "next/image";
import { urlFor } from "@/sanity/client";

export const AboutSummary = ({
	title,
	description,
	image,
}: {
	title?: string;
	description?: string;
	image?: any;
}) => {
	if (!title && !description) return null;

	return (
		<section className="bg-white py-16 md:py-24">
			<div className="container mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					{image && (
						<div className="relative w-full aspect-square md:aspect-auto md:h-[400px] rounded-lg overflow-hidden shadow-lg">
							<Image
								src={urlFor(image).url()}
								alt={title || "About SBM Traders"}
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="object-cover"
							/>
						</div>
					)}

					<div className={!image ? "md:col-span-2 text-center" : ""}>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
							{title}
						</h2>
						<p className="text-gray-600 md:text-lg leading-relaxed">
							{description}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
