import { defineField, defineType } from "sanity";

export default defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Upload the product or project image here.",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      description: "A short, descriptive caption for the image (optional).",
    }),
  ],

  preview: {
    select: {
      title: "caption",
      media: "image",
    },
  },
});
