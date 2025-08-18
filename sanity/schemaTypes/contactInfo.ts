import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactInfo",
  title: "Contact Info",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email Addresses",
      description: "The primary email will be the first one in the list.",
      type: "array",
      of: [
        {
          type: "string",
          validation: (Rule) => Rule.email(),
        },
      ],
    }),
    defineField({
      name: "phone",
      title: "Phone Numbers",
      description:
        "The primary phone number will be the first one in the list.",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "address",
      title: "Business Address",
      type: "text",
    }),
  ],
});
