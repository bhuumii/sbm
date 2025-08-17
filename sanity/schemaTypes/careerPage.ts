import { defineField, defineType } from "sanity";

export default defineType({
  name: "careerPage",
  title: "Career Page",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
      description: "e.g., 'Exciting Job Opportunities Are a Click Away!'",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle / Introduction Text",
      type: "text",
      description: "The paragraph of text that appears below the main title.",
    }),
  ],
});
