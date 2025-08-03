"use client";

import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

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
        "products": products[]->{_id, name, slug, image, description} // 'description' was missing
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
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="relative text-center z-10 p-4">
					<h1 className="text-4xl md:text-5xl font-extrabold">
						{category.name?.replace(/^\d+\.\s*/, "")}
					</h1>
					<p className="mt-2 text-lg">{category.description}</p>
				</div>
			</div>

			{/* --- Products Grid Section --- */}
			<div className="container mx-auto px-6 py-12 md:py-20">
				<h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-12">
					Our {category.name?.replace(/^\d+\.\s*/, "")} Products
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 justify-items-center">
					{category.products &&
						category.products.map((product) => (
							<Link
								key={product._id}
								href={`/products/${product.slug?.current}`}
								className="group relative w-56 h-56 md:w-64 md:h-64 rounded-full shadow-lg overflow-hidden"
							>
								{/* Background Image */}
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

								<div className="absolute inset-0 flex items-end justify-center p-6 pb-8">
									<div className="text-center">
										<h3 className="text-xl font-bold text-black drop-shadow-md transition-opacity duration-300 group-hover:opacity-0">
											{product.name}
										</h3>

										<p className="absolute inset-0 flex items-center justify-center p-4 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
											{product.description}
										</p>
									</div>
								</div>
							</Link>
						))}
				</div>
			</div>
		</div>
	);
}
