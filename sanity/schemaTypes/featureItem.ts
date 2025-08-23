import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'featureItem',
  title: 'Feature Item',
  type: 'document',
  fields: [
    defineField({ name: 'iconName', title: 'Icon Name', description: 'e.g., "Clock", "ShieldCheck", "Handshake". Use names from lucide-react.dev', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
  ],
})