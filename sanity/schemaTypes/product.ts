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

		defineField({
			name: "pageBuilder",
			title: "Product Page Content",
			description:
				"Build the product page using alternating image-and-list blocks.",
			type: "array",
			of: [
				{
					type: "object",
					name: "contentBlock",
					title: "Content Block",
					fields: [
						{
							name: "heading",
							title: "Heading",
							description: 'e.g., "Specifications", "Key Features"',
							type: "string",
						},
						{
							name: "listItems",
							title: "List Items",
							description: "The bullet points for this section.",
							type: "array",
							of: [{ type: "string" }],
						},
						{
							name: "image",
							title: "Image",
							type: "image",
							options: { hotspot: true },
						},
						{
							name: "imagePlacement",
							title: "Image Placement",
							type: "string",
							description:
								"Should the image be on the left or the right of the text?",
							options: {
								list: ["Left", "Right"],
								layout: "radio",
							},
							initialValue: "Right",
						},
					],
				},
			],
		}),
	],
});
