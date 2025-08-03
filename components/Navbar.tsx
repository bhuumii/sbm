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
			const query = `*[_type == "productCategory"]{ 
  _id, 
  name,
  slug,
  "products": products[]->{ _id, name, slug } 
} | order(name asc)`;
			const data = await client.fetch(query);
			setCategories(data);
		};
		getNavData();
	}, []);

	const navLinks = [
		{ href: "/", label: "Home" },

		{ href: "/gallery", label: "Gallery" },
		{ href: "/career", label: "Career" },
		{ href: "/contact", label: "Contact Us" },
	];

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="bg-white shadow-md sticky top-0 z-50">
			<div className="container mx-auto px-6 py-3 flex justify-between items-center">
				<Logo />

				{/* --- DESKTOP NAVIGATION --- */}
				<div className="hidden md:flex space-x-6 items-center">
					<Link
						href="/"
						className={`${pathname === "/" ? "text-blue-600 font-bold" : "text-gray-600"} hover:text-blue-600`}
					>
						Home
					</Link>
					<Link
						href="/about"
						className={`${pathname === "/about" ? "text-blue-600 font-bold" : "text-gray-600"} hover:text-blue-600`}
					>
						About Us
					</Link>

					<ProductDropdown categories={categories} />

					<Link
						href="/gallery"
						className={`${pathname === "/gallery" ? "text-blue-600 font-bold" : "text-gray-600"} hover:text-blue-600`}
					>
						Gallery
					</Link>
					<Link
						href="/career"
						className={`${pathname === "/career" ? "text-blue-600 font-bold" : "text-gray-600"} hover:text-blue-600`}
					>
						Career
					</Link>
					<Link
						href="/contact"
						className={`${pathname === "/contact" ? "text-blue-600 font-bold" : "text-gray-600"} hover:text-blue-600`}
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
				<div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center">
					<button
						onClick={toggleMenu}
						className="absolute top-5 right-6"
						aria-label="Close navigation menu"
					>
						<X className="w-8 h-8 text-gray-800" />
					</button>
					<div className="flex flex-col items-center space-y-8">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`...`}
								onClick={toggleMenu}
							>
								{link.label}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};
