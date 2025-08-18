// sanity/lib/schemaTypes/homepage.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    // --- About Us Section ---
    defineField({
      name: 'aboutTitle',
      title: 'About Section Title',
      description: "e.g., 'Welcome to SBM Traders'",
      type: 'string',
    }),
    defineField({
      name: 'aboutDescription',
      title: 'About Section Description',
      type: 'text',
    }),
    defineField({
      name: 'aboutImage',
      title: 'About Section Image',
      type: 'image',
      options: { hotspot: true }
    }),

    // --- Services Section ---
    defineField({
      name: 'services',
      title: 'Homepage Services',
      description: 'Select the services to display on the homepage.',
      type: 'array',
      of: [{ type: 'reference', to: [{type: 'service'}] }]
    }),
    
    // --- Product and Gallery teasers ---
    defineField({
      name: 'productsTitle',
      title: 'Products Teaser Title',
      type: 'string',
    }),
    defineField({
      name: 'productCategories',
      title: 'Featured Product Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'productCategory' }] }]
    }),
    defineField({
      name: 'galleryTitle',
      title: 'Gallery Teaser Title',
      type: 'string'
    }),
    defineField({
      name: 'featuredGalleryImages',
      title: 'Featured Gallery Images',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'galleryImage' }] }],
      validation: (Rule) => Rule.max(3),
    }),
  ],
})
