

import { type SchemaTypeDefinition } from 'sanity'
import homepage from './homepage'
import service from './service'
import galleryImage from './galleryImage' 
import contactInfo from './contactInfo' 

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage, service, galleryImage, contactInfo], 
}