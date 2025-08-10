"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ChevronDown, ChevronRight } from "lucide-react";

interface Product {
	_id: string;
	name: string;
	slug: { current: string };
}
interface NavCategory {
	_id: string;
	name: string;
	slug: { current: string };
	products: Product[];
}
interface ProductDropdownProps {
	categories: NavCategory[];
}

export const ProductDropdown = ({ categories }: ProductDropdownProps) => {
	const pathname = usePathname();
	const isActive = pathname.startsWith("/products");

	return (
		<div className="relative group">
			<Link
				href="/products"
				className={`flex items-center gap-1 hover:text-blue-800 transition-colors duration-200 ${isActive ? "text-blue-600 font-bold" : "text-gray-600"}`}
			>
				Products
				<ChevronDown size={16} />
			</Link>

			<div
				className="absolute top-full -left-4 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50
                      invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200"
			>
				<Link
					href="/products"
					className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold"
				>
					All Products
				</Link>
				<div className="border-t border-gray-200 my-1"></div>

				{categories.map((category) => (
					<div key={category._id} className="relative group/submenu">
						<Link
							href={`/products/category/${category.slug.current}`}
							className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
						>
							<span>{category.name.replace(/^\d+\.\s*/, "")}</span>
							<ChevronRight size={16} />
						</Link>

						<div
							className="absolute top-0 left-full ml-1 w-56 bg-white shadow-lg rounded-md py-2 z-50
                            invisible opacity-0 group-hover/submenu:visible group-hover/submenu:opacity-100 transition-all duration-200"
						>
							{category.products.map((product) => (
								<Link
									key={product._id}
									href={`/products/${product.slug.current}`}
									className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								>
									{product.name}
								</Link>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
