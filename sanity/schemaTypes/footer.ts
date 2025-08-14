import { defineField, defineType } from "sanity";

export default defineType({
	name: "footer",
	title: "Footer Content",
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
							description: "e.g., Facebook, Instagram, LinkedIn",
							type: "string",
						},
						{ name: "url", title: "URL", type: "url" },
					],
				},
			],
		}),
	],
});
