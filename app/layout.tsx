import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/Whatsapp"; 
import { client } from "@/sanity/client";
import { ThemeProvider } from 'next-themes';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 

  // Title will appear in the browser tab and Google search results.
  
  title: {
    default: "SBM Traders ",
    template: "%s | SBM Traders",
  },

  // This description appears below the title in Google search results.

  description: "SBM Traders is India's most trusted hub for high-quality signage and branding materials, offering a wide range of products for all your branding needs.",

  // --- Social Media & Sharing Metadata  ---

  // This controls how your website looks when shared on platforms
  // like Facebook, LinkedIn, WhatsApp, etc.
  openGraph: {
    title: "SBM Traders - India's Hub for Signage & Branding Materials",
    description: "Discover a wide range of high-quality signage and branding materials at SBM Traders.",
    url: "https://www.sbmtraders.in", 
    siteName: "SBM Traders",
    images: [
      {
        // create a specific image for sharing.
       
        url: "https://www.sbmtraders.in/logo2.png", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // --- Twitter-specific Sharing Metadata ---
  twitter: {
    card: "summary_large_image",
    title: "SBM Traders - India's Hub for Signage & Branding Materials",
    description: "Discover a wide range of high-quality signage and branding materials at SBM Traders.",
    images: ["https://www.sbmtraders.in/logo2.png"], 
  },



  // This sets the icon that appears in the browser tab (the favicon).
  // Make sure you have these files in your `public` folder.
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  
  // Helps search engines understand your site's content.
  keywords: ["signage materials", "branding materials", "SBM traders", "LED modules", "acrylic sheets", "vinyl"],
};

async function getSiteData() {
  const query = `*[_type == "footer"][0]{ whatsAppNumber }`;
  const data = await client.fetch(query);
  return data;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const siteData = await getSiteData(); 

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <ThemeProvider 
          attribute="class" 
           defaultTheme="light"  
  enableSystem={false}   
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <Breadcrumbs />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <WhatsAppButton phoneNumber={siteData?.whatsAppNumber} />
        </ThemeProvider>
                <Analytics />
        <SpeedInsights />

      </body>
    </html>
  );
}
