"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from 'react';

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  if (pathname === "/") {
    return null;
  }

  const pathSegments = pathname.split("/").filter((p) => p && p !== "category");

  return (
    <div className={`py-3 sticky top-16 z-20 border-b ${
      isDark 
        ? "bg-gray-800 border-gray-700" 
        : "bg-gray-100 border-gray-200"
    }`}>
      <div className="container mx-auto px-6">
        <nav
          className={`flex items-center text-sm ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className={`flex items-center gap-2 transition-colors ${
              isDark 
                ? "hover:text-blue-400" 
                : "hover:text-blue-800"
            }`}
          >
            <Home size={16} />
            Home
          </Link>

          {pathSegments.map((segment, index) => {
            const href =
              "/" +
              pathname
                .split("/")
                .filter((p) => p)
                .slice(0, index + 1)
                .join("/");
            const isLast = index === pathSegments.length - 1;
            const title =
              segment.charAt(0).toUpperCase() +
              segment.slice(1).replace(/-/g, " ");

            let correctedHref =
              "/" +
              pathname
                .split("/")
                .filter((p) => p)
                .slice(
                  0,
                  pathSegments
                    .slice(0, index + 1)
                    .join("/")
                    .split("/").length,
                )
                .join("/");
            if (segment === "products") correctedHref = "/products";

            return (
              <div key={href} className="flex items-center">
                <span className="mx-2">/</span>
                <Link
                  href={isLast ? pathname : correctedHref}
                  className={`transition-colors ${
                    isLast 
                      ? isDark 
                        ? "text-gray-200 font-semibold cursor-default" 
                        : "text-gray-700 font-semibold cursor-default"
                      : isDark
                        ? "hover:text-blue-400"
                        : "hover:text-blue-800"
                  }`}
                  aria-current={isLast ? "page" : undefined}
                >
                  {title}
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
