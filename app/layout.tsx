import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/Whatsapp"; 
import { client } from "@/sanity/client"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { /* ... */ };


async function getSiteData() {
  const query = `*[_type == "footer"][0]{ whatsAppNumber }`;
  const data = await client.fetch(query);
  return data;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const siteData = await getSiteData(); 

  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Breadcrumbs />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
     
        <WhatsAppButton phoneNumber={siteData?.whatsAppNumber} />
      </body>
    </html>
  );
}