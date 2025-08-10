"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";

export const Breadcrumbs = () => {
	const pathname = usePathname();
	if (pathname === "/") {
		return null;
	}

	const pathSegments = pathname.split("/").filter((p) => p && p !== "category");

	return (
		<div className="bg-gray-100 py-3">
			<div className="container mx-auto px-6">
				<nav
					className="flex items-center text-sm text-gray-500"
					aria-label="Breadcrumb"
				>
					<Link
						href="/"
						className="hover:text-blue-800 flex items-center gap-2"
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
									className={`${isLast ? "text-gray-700 font-semibold cursor-default" : "hover:text-blue-800"}`}
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
