import { defineField, defineType } from "sanity";

export default defineType({
	name: "homepage",
	title: "Homepage",
	type: "document",
	fields: [
		// Hero Section
		defineField({
			name: "heroTitle",
			title: "Hero Title",
			type: "string",
		}),
		defineField({
			name: "heroSubtitle",
			title: "Hero Subtitle",
			type: "string",
		}),
		defineField({
			name: "heroImage",
			title: "Hero Image",
			type: "image",
			options: { hotspot: true },
		}),

		//  About Us Summary
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

		// Services Section
		defineField({
			name: "services",
			title: "Homepage Services",
			description: "Select the services to display on the homepage.",
			type: "array",
			of: [{ type: "reference", to: [{ type: "service" }] }],
		}),

		// Products Teaser Section
		defineField({
			name: "productsTitle",
			title: "Products Teaser Title",
			description: "e.g., 'Our Core Product Range'",
			type: "string",
		}),
		defineField({
			name: "productCategories",
			title: "Featured Product Categories",
			description:
				"Select a few categories to feature on the homepage as clickable links.",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "productCategory" }],
				},
			],
		}),

		// Gallery Teaser Section
		defineField({
			name: "galleryTitle",
			title: "Gallery Teaser Title",
			description: "e.g., 'Explore Our Work'",
			type: "string",
		}),
		defineField({
			name: "featuredGalleryImages",
			title: "Featured Gallery Images",
			description:
				"Select exactly 3 images from the gallery to feature on the homepage.",
			type: "array",
			of: [{ type: "reference", to: [{ type: "galleryImage" }] }],
			validation: (Rule) =>
				Rule.max(3).error("You can select a maximum of 3 images."),
		}),
	],
});
