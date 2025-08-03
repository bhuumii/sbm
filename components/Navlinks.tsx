"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ProductDropdown } from "./ProductDropdown";

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

interface NavLinksProps {
	categories: NavCategory[];
}

export const NavLinks = ({ categories }: NavLinksProps) => {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	const mainLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About Us" },
		{ href: "/gallery", label: "Gallery" },
		{ href: "/career", label: "Career" },
		{ href: "/contact", label: "Contact Us" },
	];

	return (
		<>
			{/* --- Desktop Navigation (hidden on mobile) --- */}
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

				{/* The Product Dropdown Menu */}
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

			{/* --- Mobile Menu Button --- */}
			<div className="md:hidden">
				<button onClick={toggleMenu} aria-label="Open navigation menu">
					<Menu className="w-6 h-6 text-gray-800" />
				</button>
			</div>

			{/* --- Mobile Menu Overlay --- */}
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
						<Link
							href="/"
							onClick={toggleMenu}
							className={`text-2xl ${pathname === "/" ? "text-blue-600 font-bold" : "text-gray-800"}`}
						>
							Home
						</Link>
						<Link
							href="/about"
							onClick={toggleMenu}
							className={`text-2xl ${pathname === "/about" ? "text-blue-600 font-bold" : "text-gray-800"}`}
						>
							About Us
						</Link>
						<Link
							href="/products"
							onClick={toggleMenu}
							className={`text-2xl ${pathname.startsWith("/products") ? "text-blue-600 font-bold" : "text-gray-800"}`}
						>
							Products
						</Link>
						<Link
							href="/gallery"
							onClick={toggleMenu}
							className={`text-2xl ${pathname === "/gallery" ? "text-blue-600 font-bold" : "text-gray-800"}`}
						>
							Gallery
						</Link>
						<Link
							href="/career"
							onClick={toggleMenu}
							className={`text-2xl ${pathname === "/career" ? "text-blue-600 font-bold" : "text-gray-800"}`}
						>
							Career
						</Link>
						<Link
							href="/contact"
							onClick={toggleMenu}
							className={`text-2xl ${pathname === "/contact" ? "text-blue-600 font-bold" : "text-gray-800"}`}
						>
							Contact Us
						</Link>
					</div>
				</div>
			)}
		</>
	);
};
