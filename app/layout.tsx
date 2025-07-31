import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConnectWithUs } from "@/components/ConnectWithUs"; 

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '700'] 
});

export const metadata: Metadata = {
  title: "SBM Traders - Your Trusted Partner",
  description: "High-quality goods and branding solutions from SBM Traders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-50`}>
        <Navbar />
        <main>
          {children}
        </main>
        <ConnectWithUs /> 
        <Footer />
      </body>
    </html>
  );
}