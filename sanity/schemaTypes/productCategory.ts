import { defineField, defineType } from "sanity";

export default defineType({
	name: "productCategory",
	title: "Product Category",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Category Name",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: "description",
			title: "Short Description",
			type: "string",
			description: "A brief, one-sentence tagline for this category.",
		}),

		defineField({
			name: "image",
			title: "Hero Image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "products",
			title: "Products in this Category",
			type: "array",
			of: [{ type: "reference", to: [{ type: "product" }] }],
		}),
	],
});
