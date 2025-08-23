import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'statItem',
  title: 'Stat Item',
  type: 'document',
  fields: [
    defineField({ name: 'number', title: 'Number (e.g., 500+)', type: 'string' }),
    defineField({ name: 'label', title: 'Label (e.g., Happy Clients)', type: 'string' }),
  ],
})