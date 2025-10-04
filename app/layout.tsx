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
  title: {
    default: "SBM Traders ",
    template: "%s | SBM Traders",
  },

  description: "SBM Traders is India's most trusted hub for high-quality signage and branding materials, offering a wide range of products for all your branding needs.",


  openGraph: {
    title: "SBM Traders - India's Hub for Signage & Branding Materials",
    description: "Discover a wide range of high-quality signage and branding materials at SBM Traders.",
    url: "https://www.sbmtraders.in", 
    siteName: "SBM Traders",
    images: [
      {
        // Use absolute URL for social media sharing
        url: "https://www.sbmtraders.in/logo2.png", 
        width: 1200,
        height: 630,
        alt: "SBM Traders Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SBM Traders - India's Hub for Signage & Branding Materials",
    description: "Discover a wide range of high-quality signage and branding materials at SBM Traders.",
    images: ["https://www.sbmtraders.in/logo2.png"], 
  },

  // Update favicon to use your main logo
  icons: {
    icon: "/assets/darkmain.png",
    shortcut: "/assets/darkmain.png",
    apple: "/assets/darkmain.png",
  },
  
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
      <head>
        
        <meta property="og:image" content="https://www.sbmtraders.in/logo2.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://www.sbmtraders.in/logo2.png" />
      </head>
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
