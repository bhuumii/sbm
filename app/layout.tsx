import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConnectWithUs } from "@/components/ConnectWithUs";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "SBM Traders",
	description: "High-quality goods and branding solutions from SBM Traders.",
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-gray-50`}>
				<Navbar />
				<Breadcrumbs />
				<main>{children}</main>
				<ConnectWithUs />
				<Footer />
			</body>
		</html>
	);
}
