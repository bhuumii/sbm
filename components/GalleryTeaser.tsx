import Link from "next/link";
import Image from "next/image";

interface ImageProps {
	_id: string;
	imageUrl: string;
	caption?: string;
}

interface GalleryTeaserProps {
	title?: string;
	images: ImageProps[];
}

export const GalleryTeaser = ({ title, images }: GalleryTeaserProps) => {
	if (!images || images.length === 0) return null;

	return (
		<section className="bg-white py-16 md:py-24">
			<div className="container mx-auto px-4 sm:px-6 text-center">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
					{title || "From Our Gallery"}
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
					{images.map((item) => (
						<div
							key={item._id}
							className="block w-full aspect-square overflow-hidden rounded-lg shadow-lg"
						>
							<Image
								src={item.imageUrl}
								alt={item.caption || "SBM Traders Gallery Image"}
								width={600}
								height={600}
								className="w-full h-full object-cover"
							/>
						</div>
					))}
				</div>
				<Link
					href="/gallery"
					className="bg-blue-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
				>
					View Full Gallery
				</Link>
			</div>
		</section>
	);
};
