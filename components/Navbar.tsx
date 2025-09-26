"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronRight, Sun, Moon } from "lucide-react";
import { client } from "@/sanity/client";
import { useTheme } from "next-themes";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  pageBuilder?: any[]; 
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
  
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const getNavData = async () => {
      const query = `*[_type == "productCategory"]{ _id, name, slug, "products": products[]->{ _id, name, slug, pageBuilder } } | order(name asc)`;
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

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <>
      <nav className={`${isDark ? "bg-gray-900" : "bg-white"} ${
        isDark 
          ? "shadow-[0_2px_10px_rgba(0,0,0,0.3)]" 
          : "shadow-md"
      } sticky top-0 z-30`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex justify-between items-center">
          <Image
            src={isDark ? "/assets/dark.png" : "/assets/light.png"}
            alt="Company Logo"
            width={150}
            height={40}
            priority
          />
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className={`text-lg ${pathname === "/" ? "font-bold" : ""} ${
                isDark 
                  ? `${pathname === "/" ? "text-white" : "text-gray-200"} hover:text-white`
                  : `${pathname === "/" ? "text-blue-800" : "text-gray-600"} hover:text-blue-800`
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-lg ${pathname === "/about" ? "font-bold" : ""} ${
                isDark 
                  ? `${pathname === "/about" ? "text-white" : "text-gray-200"} hover:text-white`
                  : `${pathname === "/about" ? "text-blue-800" : "text-gray-600"} hover:text-blue-800`
              }`}
            >
              About Us
            </Link>
            <DesktopProductDropdown categories={categories} isDark={isDark} />
            <Link
              href="/gallery"
              className={`text-lg ${pathname === "/gallery" ? "font-bold" : ""} ${
                isDark 
                  ? `${pathname === "/gallery" ? "text-white" : "text-gray-200"} hover:text-white`
                  : `${pathname === "/gallery" ? "text-blue-800" : "text-gray-600"} hover:text-blue-800`
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/blog"
              className={`text-lg ${pathname === "/blog" ? "font-bold" : ""} ${
                isDark 
                  ? `${pathname === "/blog" ? "text-white" : "text-gray-200"} hover:text-white`
                  : `${pathname === "/blog" ? "text-blue-800" : "text-gray-600"} hover:text-blue-800`
              }`}
            >
              Blog
            </Link>
            <Link
              href="/career"
              className={`text-lg ${pathname === "/career" ? "font-bold" : ""} ${
                isDark 
                  ? `${pathname === "/career" ? "text-white" : "text-gray-200"} hover:text-white`
                  : `${pathname === "/career" ? "text-blue-800" : "text-gray-600"} hover:text-blue-800`
              }`}
            >
              Career
            </Link>
            <Link
              href="/contact"
              className={`text-lg ${pathname === "/contact" ? "font-bold" : ""} ${
                isDark 
                  ? `${pathname === "/contact" ? "text-white" : "text-gray-200"} hover:text-white`
                  : `${pathname === "/contact" ? "text-blue-800" : "text-gray-600"} hover:text-blue-800`
              }`}
            >
              Contact Us
            </Link>

            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className={`p-2 rounded-full ${
                isDark 
                  ? "bg-gray-800 hover:bg-gray-700" 
                  : "bg-gray-100 hover:bg-gray-200"
              } transition-colors duration-200`}
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-800" />
              )}
            </button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className={`w-6 h-6 ${isDark ? "text-white" : "text-gray-800"}`} />
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
            className={`
              md:hidden fixed top-4 right-4 z-50
              w-[90vw] max-w-sm
              h-auto max-h-[85vh] overflow-y-auto
              ${isDark 
                ? "bg-gradient-to-b from-gray-800 to-gray-900 border-gray-700" 
                : "bg-gradient-to-b from-white to-gray-50 border-gray-200"
              } 
              rounded-2xl border shadow-2xl animate-scaleIn
            `}
            role="dialog"
            aria-modal="true"
          >
            <div className={`flex justify-between items-center p-4 border-b sticky top-0 backdrop-blur-lg rounded-t-2xl ${
              isDark ? "bg-gray-900/80 border-gray-700" : "bg-white/80 border-gray-200"
            }`}>
              <Image
                src={isDark ? "/assets/dark.png" : "/assets/light.png"}
                alt="Company Logo"
                width={120}
                height={32}
                priority
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close navigation menu"
                className={`p-1 rounded-full transition-colors ${
                  isDark ? "hover:bg-gray-800" : "hover:bg-gray-200"
                }`}
              >
                <X className={`w-7 h-7 ${isDark ? "text-white" : "text-gray-600"}`} />
              </button>
            </div>

            <div className="p-2">
              <div className="flex justify-center mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  className={`p-3 rounded-full ${
                    isDark 
                      ? "bg-gray-800 hover:bg-gray-700 text-yellow-400" 
                      : "bg-gray-100 hover:bg-gray-200 text-blue-800"
                  } transition-colors duration-200 flex items-center gap-2`}
                  aria-label="Toggle dark mode"
                >
                  {isDark ? (
                    <>
                      <Sun className="w-5 h-5" />
                      <span className="text-sm font-medium text-white">Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5" />
                      <span className="text-sm font-medium text-gray-700">Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
              <Link
                href="/"
                className={`block py-3 px-3 text-lg font-medium border-b rounded-md ${
                  pathname === "/"
                    ? isDark
                      ? "text-white bg-gray-800"
                      : "text-blue-800 bg-blue-50"
                    : isDark
                      ? "text-gray-200 hover:bg-gray-800"
                      : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block py-3 px-3 text-lg font-medium border-b rounded-md ${
                  pathname === "/about"
                    ? isDark
                      ? "text-white bg-gray-800"
                      : "text-blue-800 bg-blue-50"
                    : isDark
                      ? "text-gray-200 hover:bg-gray-800"
                      : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                About Us
              </Link>

              <div>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className={`w-full flex justify-between items-center py-3 px-3 text-lg font-medium border-b rounded-md ${
                    isDark
                      ? "text-gray-200 hover:bg-gray-800"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isProductsOpen && (
                  <div className={`pl-4 pr-2 py-2 border-l-2 ${
                    isDark ? "border-gray-600" : "border-gray-200"
                  }`}>
                    <Link
                      href="/products"
                      className={`block py-2 font-semibold ${
                        isDark
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-600 hover:text-blue-800"
                      }`}
                    >
                      All Products
                    </Link>
                    {categories.map((cat) => (
                      <Link
                        key={cat._id}
                        href={`/products/category/${cat.slug.current}`}
                        className={`block py-2 ${
                          isDark
                            ? "text-gray-300 hover:text-white"
                            : "text-gray-600 hover:text-blue-800"
                        }`}
                      >
                        {cat.name.replace(/^\d+\.\s*/, "")}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/gallery"
                className={`block py-3 px-3 text-lg font-medium border-b rounded-md ${
                  pathname === "/gallery"
                    ? isDark
                      ? "text-white bg-gray-800"
                      : "text-blue-800 bg-blue-50"
                    : isDark
                      ? "text-gray-200 hover:bg-gray-800"
                      : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Gallery
              </Link>
              <Link
                href="/blog"
                className={`block py-3 px-3 text-lg font-medium border-b rounded-md ${
                  pathname === "/blog"
                    ? isDark
                      ? "text-white bg-gray-800"
                      : "text-blue-800 bg-blue-50"
                    : isDark
                      ? "text-gray-200 hover:bg-gray-800"
                      : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Blog
              </Link>

              <Link
                href="/career"
                className={`block py-3 px-3 text-lg font-medium border-b rounded-md ${
                  pathname === "/career"
                    ? isDark
                      ? "text-white bg-gray-800"
                      : "text-blue-800 bg-blue-50"
                    : isDark
                      ? "text-gray-200 hover:bg-gray-800"
                      : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Career
              </Link>
              <Link
                href="/contact"
                className={`block py-3 px-3 text-lg font-medium rounded-md ${
                  pathname === "/contact"
                    ? isDark
                      ? "text-white bg-gray-800"
                      : "text-blue-800 bg-blue-50"
                    : isDark
                      ? "text-gray-200 hover:bg-gray-800"
                      : "text-gray-700 hover:bg-gray-100"
                }`}
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
  isDark
}: {
  categories: NavCategory[];
  isDark: boolean;
}) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith("/products");

  return (
    <div className="relative group">
      <Link
        href="/products"
        className={`text-lg flex items-center gap-1 ${isActive ? "font-bold" : ""} ${
          isDark 
            ? `${isActive ? "text-white" : "text-gray-200"} hover:text-white`
            : `${isActive ? "text-blue-800" : "text-gray-600"} hover:text-blue-800`
        }`}
      >
        Products <ChevronDown size={16} />
      </Link>
      <div className={`absolute top-full -left-4 mt-2 w-56 shadow-lg rounded-md py-2 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}>
        <Link
          href="/products"
          className={`block w-full text-left px-4 py-2 text-sm font-bold ${
            isDark
              ? "text-white hover:bg-gray-700"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          All Products
        </Link>
        <div className={`border-t my-1 ${isDark ? "border-gray-600" : "border-gray-200"}`}></div>
        {categories.map((category) => (
          <div key={category._id} className="relative group/submenu">
            <Link
              href={`/products/category/${category.slug.current}`}
              className={`flex justify-between items-center px-4 py-2 text-sm ${
                isDark
                  ? "text-gray-200 hover:bg-gray-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span>{category.name.replace(/^\d+\.\s*/, "")}</span>
              <ChevronRight size={16} />
            </Link>
            <div className={`absolute top-0 left-full ml-1 w-56 shadow-lg rounded-md py-2 z-50 invisible opacity-0 group-hover/submenu:visible group-hover/submenu:opacity-100 transition-all duration-200 ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}>
              {category.products.map((product) => {
          
                const hasContent = product.pageBuilder && product.pageBuilder.length > 0;
                
                return hasContent ? (
           
                  <Link
                    key={product._id}
                    href={`/products/${product.slug.current}`}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      isDark
                        ? "text-gray-200 hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {product.name}
                  </Link>
                ) : (
               
                  <div
                    key={product._id}
                    className={`px-4 py-2 text-sm cursor-default ${
                      isDark
                        ? "text-gray-400"
                        : "text-gray-500"
                    }`}
                  >
                    {product.name}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
