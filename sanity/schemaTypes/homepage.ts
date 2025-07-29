

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [

    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      description: 'The main big text on the homepage.',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      description: 'The smaller text underneath the main title.',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      description: 'The main background image for the homepage.',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

  
    defineField({
        name: 'aboutTitle',
        title: 'About Section Title',
        type: 'string',
    }),
    defineField({
        name: 'aboutDescription',
        title: 'About Section Description',
        
        type: 'text',
    }),


defineField({
    name: 'services',
    title: 'Services Section',
    description: 'Select the services to display on the homepage.',
    type: 'array',
    of: [
      {
        type: 'reference',
        to: [{type: 'service'}] 
      }
    ]
}),

 defineField({
      name: 'ctaTitle',
      title: 'CTA Section Title',
      description: "The compelling text, e.g., 'Ready to Elevate Your Brand?'",
      type: 'string',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      description: "The text for the button, e.g., 'Get In Touch'",
      type: 'string',
    }),

  ],
})