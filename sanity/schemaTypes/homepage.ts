import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
 



     // Stats Section ---
    defineField({ name: 'stats', title: 'Stats Section', type: 'array', of: [{ type: 'reference', to: [{type: 'statItem'}] }] }),

        //  Map Section ---
    defineField({ name: 'mapTitle', title: 'Map Section Title', type: 'string' }),
    defineField({ name: 'locations', title: 'Map Locations', type: 'array', of: [{ type: 'reference', to: [{type: 'mapLocation'}] }] }),

    // Why Choose Us Section ---
    defineField({ name: 'whyChooseUsTitle', title: 'Why Choose Us Title', type: 'string' }),
    defineField({ name: 'customerFeatures', title: 'Features for Customers', type: 'array', of: [{ type: 'reference', to: [{type: 'featureItem'}] }] }),
    defineField({ name: 'manufacturerFeatures', title: 'Features for Manufacturers', type: 'array', of: [{ type: 'reference', to: [{type: 'featureItem'}] }] }),

    

    
    // --- Product teaser ---
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
    
  ],
})
