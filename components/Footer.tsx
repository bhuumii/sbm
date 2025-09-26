import { client } from "@/sanity/client"; 
import { FooterClient } from "./FooterClient";

interface FooterData {
  footerLogo?: any;
  tagline?: string;
  socialLinks?: { platform: string; url: string }[];
  whatsAppQR?: any;
  whatsAppNumber?: string;
}

interface ContactInfo {
  email?: string[];
  phone?: string[];
  address?: string;
}

async function getFooterData() {
  const query = `{
    "footer": *[_type == "footer"][0]{
      ...,
      whatsAppNumber
    },
    "contact": *[_type == "contactInfo"][0]
  }`;
  const data = await client.fetch(query, {}, { cache: 'no-store' });
  return data;
}

export const Footer = async () => {
  const { footer, contact }: { footer: FooterData; contact: ContactInfo } =
    await getFooterData();

  return <FooterClient footer={footer} contact={contact} />;
};
