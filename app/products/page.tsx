import { client } from "@/sanity/client";
import Link from "next/link";

interface Product {
	_id: string;
	name?: string;
	slug?: { current: string };
}

interface ProductCategory {
	_id: string;
	name?: string;
	products: Product[];
}

async function getProductCategories() {
	const query = `*[_type == "productCategory"]{
    _id,
    name,
    "products": products[]->{
      _id,
      name,
      slug // <-- THIS WAS THE MISSING PIECE
    }
  } | order(name asc)`;

	const data = await client.fetch(query, {}, { cache: "no-store" });
	return data;
}

export default async function ProductsPage() {
	const categories: ProductCategory[] = await getProductCategories();

	return (
		<div className="bg-gray-50">
			<div className="container mx-auto px-6 py-12 md:py-16">
				<div className="text-center mb-12">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-800">
						Our Product List
					</h1>
					<p className="text-gray-600 mt-2">
						A comprehensive overview of our premium materials and supplies.
					</p>
				</div>

				{categories && categories.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{categories.map((category) => (
							<div
								key={category._id}
								className="bg-white p-8 rounded-lg shadow-md"
							>
								<h2 className="text-2xl font-bold text-gray-900 mb-6">
									{category.name?.replace(/^\d+\.\s*/, "")}
								</h2>
								<ul className="space-y-3 text-gray-600">
									{category.products.map((product) => (
										<li key={product._id}>
											<Link
												href={`/products/${product.slug?.current}`}
												className="flex items-center group"
											>
												<span className="w-2 h-2 bg-gray-400 rounded-full mr-3 transition-colors group-hover:bg-blue-600"></span>
												<span className="transition-colors group-hover:text-blue-600 group-hover:font-semibold">
													{product.name}
												</span>
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				) : (
					<p className="text-center text-gray-500">
						Product categories will be listed here soon.
					</p>
				)}
			</div>
		</div>
	);
}
