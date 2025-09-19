"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Logo } from "./Logo";
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
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [categories, setCategories] = useState<NavCategory[]>([]);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getNavData = async () => {
      const query = `*[_type == "productCategory"]{ _id, name, slug, "products": products[]->{ _id, name, slug } } | order(name asc)`;
      const data = await client.fetch(query);
      setCategories(data);
    };
    getNavData();
  }, []);

  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (panelRef.current && !panelRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler, true);
    document.addEventListener("touchstart", handler, true);
    return () => {
      document.removeEventListener("mousedown", handler, true);
      document.removeEventListener("touchstart", handler, true);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-30">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex space-x-6 items-center">
            {/* Desktop links remain the same */}
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
            <DesktopProductDropdown categories={categories} />
            <Link
              href="/gallery"
              className={`${pathname === "/gallery" ? "text-blue-800 font-bold" : "text-gray-600"} hover:text-blue-800`}
            >
              Gallery
            </Link>
            <Link
  href="/blog"
  className={`${pathname === "/blog" ? "text-blue-800 font-bold" : "text-gray-600"} hover:text-blue-800`}
>
  Blog
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
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <>
          <div className="md:hidden fixed inset-0 z-40 pointer-events-none animate-fadeIn">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          </div>

          <div
            ref={panelRef}
            className="
              md:hidden fixed top-4 right-4 z-50
              w-[90vw] max-w-sm
              h-auto max-h-[85vh] overflow-y-auto
              bg-gradient-to-b from-white to-gray-50 rounded-2xl border border-gray-200 shadow-2xl
              animate-scaleIn
            "
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white/80 backdrop-blur-lg rounded-t-2xl">
              <Logo />
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close navigation menu"
                className="p-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                <X className="w-7 h-7 text-gray-600" />
              </button>
            </div>

            <div className="p-2">
              <Link
                href="/"
                className={`block py-3 px-3 text-lg font-medium border-b rounded-md ${pathname === "/" ? "text-blue-800 bg-blue-50" : "text-gray-700 hover:bg-gray-100"}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block py-3 px-3 text-lg font-medium border-b rounded-md ${pathname === "/about" ? "text-blue-800 bg-blue-50" : "text-gray-700 hover:bg-gray-100"}`}
              >
                About Us
              </Link>

              <div>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="w-full flex justify-between items-center py-3 px-3 text-lg font-medium border-b text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isProductsOpen && (
                  <div className="pl-4 pr-2 py-2 border-l-2 border-gray-200">
                    <Link
                      href="/products"
                      className="block py-2 text-gray-600 hover:text-blue-800 font-semibold"
                    >
                      All Products
                    </Link>
                    {categories.map((cat) => (
                      <Link
                        key={cat._id}
                        href={`/products/category/${cat.slug.current}`}
                        className="block py-2 text-gray-600 hover:text-blue-800"
                      >
                        {cat.name.replace(/^\d+\.\s*/, "")}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/gallery"
                className={`block py-3 px-3 text-lg font-medium border-b rounded-md ${pathname === "/gallery" ? "text-blue-800 bg-blue-50" : "text-gray-700 hover:bg-gray-100"}`}
              >
                Gallery
              </Link>
              <Link
  href="/blog"
  className={`block py-3 px-3 text-lg font-medium border-b rounded-md ${pathname === "/blog" ? "text-blue-800 bg-blue-50" : "text-gray-700 hover:bg-gray-100"}`}
>
  Blog
</Link>

              <Link
                href="/career"
                className={`block py-3 px-3 text-lg font-medium border-b rounded-md ${pathname === "/career" ? "text-blue-800 bg-blue-50" : "text-gray-700 hover:bg-gray-100"}`}
              >
                Career
              </Link>
              <Link
                href="/contact"
                className={`block py-3 px-3 text-lg font-medium rounded-md ${pathname === "/contact" ? "text-blue-800 bg-blue-50" : "text-gray-700 hover:bg-gray-100"}`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const DesktopProductDropdown = ({
  categories,
}: {
  categories: NavCategory[];
}) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith("/products");

  return (
    <div className="relative group">
      <Link
        href="/products"
        className={`flex items-center gap-1 hover:text-blue-800 transition-colors duration-200 ${isActive ? "text-blue-800 font-bold" : "text-gray-600"}`}
      >
        Products <ChevronDown size={16} />
      </Link>
      <div className="absolute top-full -left-4 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
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
            <div className="absolute top-0 left-full ml-1 w-56 bg-white shadow-lg rounded-md py-2 z-50 invisible opacity-0 group-hover/submenu:visible group-hover/submenu:opacity-100 transition-all duration-200">
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
