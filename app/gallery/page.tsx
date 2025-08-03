"use client";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { useEffect, useState } from "react";

const builder = imageUrlBuilder(client);

interface GalleryImage {
	_id: string;
	image: any;
	caption?: string;
}

export default function GalleryPage() {
	const [images, setImages] = useState<GalleryImage[]>([]);
	const [isLoading, setIsLoading] = useState(true);

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
		return <div className="text-center p-24">Loading Gallery...</div>;
	}

	return (
		<div className="bg-white">
			<div className="container mx-auto px-6 py-12 md:py-16">
				<div className="text-center mb-12">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-800">
						Our Gallery
					</h1>
					<p className="text-gray-600 mt-2">
						A showcase of our premium materials and solutions in action.
					</p>
				</div>

				{images && images.length > 0 ? (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{images.map((item) => (
							<div
								key={item._id}
								className="group relative block w-full overflow-hidden rounded-2xl shadow-md border border-gray-100"
							>
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
						))}
					</div>
				) : (
					<p className="text-center text-gray-500">
						No gallery images have been added yet.
					</p>
				)}
			</div>
		</div>
	);
}
