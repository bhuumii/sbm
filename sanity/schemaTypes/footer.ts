import {defineField, defineType} from 'sanity'
    
export default defineType({
  name: "footer",
  title: "Footer & Site-wide Content",
  type: "document",
  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      description:
        "The short paragraph of text that appears under the logo in the footer.",
      type: "text",
    }),

    defineField({
      name: 'whatsAppNumber',
      title: 'WhatsApp Number for Floating Button',
      description: "Enter the full number including country code, with no spaces or symbols (e.g., 919876543210).",
      type: 'string',
    }),
    
   
    defineField({
      name: 'whatsAppQR',
      title: 'WhatsApp QR Code Image',
      description: 'Upload the QR code image for WhatsApp.',
      type: 'image',
    }),

    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [
        {
          type: "object",
            name: "socialLink",
          title: "Social Link",
          fields: [
            {
              name: "platform",
              title: "Platform",
              description: "e.g., Facebook, Instagram, LinkedIn, WhatsApp",
              type: "string",
            },
            { name: "url", title: "URL", type: "url" },
          ],
        },
      ],
    }),
  ],
})