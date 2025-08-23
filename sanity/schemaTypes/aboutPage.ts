import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
 
  
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      description: "e.g., 'About SBM Traders'",
      type: 'string',
    }),
    defineField({
      name: 'longDescription',
      title: 'Long Description',
      description: 'The main paragraph(s) of text for the about us section.',
   
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'teamSectionTitle',
      title: 'Team Section Title',
      description: "e.g., 'Meet Our Team'",
      type: 'string',
    }),
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      description: 'Select the team members to display on the page.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'teamMember'}],
        },
      ],
    }),
  ],
})