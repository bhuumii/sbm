import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Primary Product Image (for Category Page)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "description",
      title: "Short Description (for Category Page Hover)",
      type: "string",
    }),
  
  ],
});
