"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ProductDropdown } from "./ProductDropdown";
import { client } from "@/sanity/client";

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

export const Navbar = () => {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [categories, setCategories] = useState<NavCategory[]>([]);

	useEffect(() => {
		const getNavData = async () => {
			const query = `*[_type == "productCategory"]{ _id, name, slug, "products": products[]->{ _id, name, slug } } | order(name asc)`;
			const data = await client.fetch(query);
			setCategories(data);
		};
		getNavData();
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const allNavLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About Us" },
		{ href: "/products", label: "Products" },
		{ href: "/gallery", label: "Gallery" },
		{ href: "/career", label: "Career" },
		{ href: "/contact", label: "Contact Us" },
	];

	return (
		<nav className="bg-white shadow-md sticky top-0 z-50">
			<div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
				<Logo />

				<div className="hidden md:flex space-x-6 items-center">
					<Link
						href="/"
						className={`${pathname === "/" ? "text-blue-800 font-bold" : "text-gray-600"} hover:text-blue-800`}
					>
						Home
					</Link>
					<Link
						href="/about"
						className={`${pathname === "/about" ? "text-blue-800 font-bold" : "text-gray-600"} hover:text-blue-800`}
					>
						About Us
					</Link>
					<ProductDropdown categories={categories} />
					<Link
						href="/gallery"
						className={`${pathname === "/gallery" ? "text-blue-800 font-bold" : "text-gray-600"} hover:text-blue-800`}
					>
						Gallery
					</Link>
					<Link
						href="/career"
						className={`${pathname === "/career" ? "text-blue-800 font-bold" : "text-gray-600"} hover:text-blue-800`}
					>
						Career
					</Link>
					<Link
						href="/contact"
						className={`${pathname === "/contact" ? "text-blue-800 font-bold" : "text-gray-600"} hover:text-blue-800`}
					>
						Contact Us
					</Link>
				</div>

				<div className="md:hidden">
					<button onClick={toggleMenu} aria-label="Open navigation menu">
						<Menu className="w-6 h-6 text-gray-800" />
					</button>
				</div>
			</div>

			{isMenuOpen && (
				<div
					className="md:hidden fixed inset-0 bg-gradient-to-b from-gray-900 to-black z-50 flex flex-col items-center justify-center p-6"
					onClick={toggleMenu}
				>
					<button
						onClick={toggleMenu}
						className="absolute top-5 right-5"
						aria-label="Close navigation menu"
					>
						<X className="w-8 h-8 text-gray-400 hover:text-white" />
					</button>

					<div className="flex flex-col items-center w-full">
						{allNavLinks.map((link, index) => {
							const isActive =
								link.href === "/"
									? pathname === "/"
									: pathname.startsWith(link.href);
							return (
								<div
									key={link.href}
									className="w-full text-center animate-fadeInUp"
									style={{ animationDelay: `${index * 100}ms` }}
								>
									<Link
										href={link.href}
										className={`
                      block py-4 text-3xl font-light tracking-wider
                      ${isActive ? "text-blue-400" : "text-gray-300 hover:text-white"}
                      transition-colors duration-300
                    `}
									>
										{link.label}
									</Link>

									{index < allNavLinks.length - 1 && (
										<div className="w-1/2 mx-auto h-px bg-gray-700"></div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			)}
		</nav>
	);
};
