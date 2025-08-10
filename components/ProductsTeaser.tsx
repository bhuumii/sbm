import Link from "next/link";

interface CategoryLink {
	_id: string;
	name?: string;
	slug?: { current: string };
}
interface ProductsTeaserProps {
	title?: string;
	categories: CategoryLink[];
}

export const ProductsTeaser = ({ title, categories }: ProductsTeaserProps) => {
	if (!categories || categories.length === 0) return null;

	return (
		<section className="bg-gray-50 py-16 md:py-24">
			<div className="container mx-auto px-4 sm:px-6 text-center">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
					{title || "Our Products"}
				</h2>

				<div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 my-8">
					{categories.map((category) => (
						<Link
							key={category._id}
							href={`/products/category/${category.slug?.current}`}
							className="bg-white border border-gray-200 text-gray-700 text-base font-semibold px-6 py-3 rounded-full shadow-sm w-full sm:w-auto
                         hover:bg-blue-700 hover:text-white hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
						>
							{category.name?.replace(/^\d+\.\s*/, "")}
						</Link>
					))}
				</div>

				<Link
					href="/products"
					className="bg-blue-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
				>
					Explore Full Range
				</Link>
			</div>
		</section>
	);
};
