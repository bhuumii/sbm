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

        //  Map Section ---
    defineField({ name: 'mapTitle', title: 'Map Section Title', type: 'string' }),
    defineField({ name: 'locations', title: 'Map Locations', type: 'array', of: [{ type: 'reference', to: [{type: 'mapLocation'}] }] }),

    // Why Choose Us Section ---
    defineField({ name: 'whyChooseUsTitle', title: 'Why Choose Us Title', type: 'string' }),
    defineField({ name: 'customerFeatures', title: 'Features for Customers', type: 'array', of: [{ type: 'reference', to: [{type: 'featureItem'}] }] }),
    defineField({ name: 'manufacturerFeatures', title: 'Features for Manufacturers', type: 'array', of: [{ type: 'reference', to: [{type: 'featureItem'}] }] }),

    
     // Stats Section ---
    defineField({ name: 'stats', title: 'Stats Section', type: 'array', of: [{ type: 'reference', to: [{type: 'statItem'}] }] }),

    
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
