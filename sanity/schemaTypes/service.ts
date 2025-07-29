

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'The name of the service (e.g., Quality Sourcing).',
      type: 'string',
      validation: (Rule) => Rule.required(), 
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'A short explanation of this service.',
      type: 'text',
    }),
  ],
})