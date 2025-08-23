import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'mapLocation',
  title: 'Map Location',
  type: 'document',
  fields: [
    defineField({ name: 'cityName', title: 'City Name', type: 'string' }),
    defineField({ name: 'topPercentage', title: 'Top %', description: 'Position from top (e.g., 55.5)', type: 'number' }),
    defineField({ name: 'leftPercentage', title: 'Left %', description: 'Position from left (e.g., 25)', type: 'number' }),
  ],
})