import { defineField, defineType } from "sanity";

export default defineType({
	name: "homepage",
	title: "Homepage",
	type: "document",
	fields: [
		defineField({
			name: "heroSlides",
			title: "Hero Slides",
			description: "Add one or more slides for the homepage carousel.",
			type: "array",
			of: [{ type: "reference", to: [{ type: "heroSlide" }] }],
		}),

		defineField({
			name: "aboutTitle",
			title: "About Section Title",
			type: "string",
		}),
		defineField({
			name: "aboutDescription",
			title: "About Section Description",
			type: "text",
		}),
		defineField({
			name: "aboutImage",
			title: "About Section Image",
			type: "image",
			options: { hotspot: true },
		}),

		defineField({
			name: "services",
			title: "Homepage Services",
			type: "array",
			of: [{ type: "reference", to: [{ type: "service" }] }],
		}),
		defineField({
			name: "productsTitle",
			title: "Products Teaser Title",
			type: "string",
		}),
		defineField({
			name: "productCategories",
			title: "Featured Product Categories",
			type: "array",
			of: [{ type: "reference", to: [{ type: "productCategory" }] }],
		}),
		defineField({
			name: "galleryTitle",
			title: "Gallery Teaser Title",
			type: "string",
		}),
		defineField({
			name: "featuredGalleryImages",
			title: "Featured Gallery Images",
			type: "array",
			of: [{ type: "reference", to: [{ type: "galleryImage" }] }],
			validation: (Rule) => Rule.max(3),
		}),
	],
});
