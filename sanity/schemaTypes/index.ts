import type { SchemaTypeDefinition } from "sanity";
import homepage from "./homepage";
import service from "./service";
import galleryImage from "./galleryImage";
import contactInfo from "./contactInfo";
import product from "./product";
import productCategory from "./productCategory";
import careerPage from "./careerPage";
import statItem from './statItem'
import featureItem from './featureItem'
import mapLocation from './mapLocation'
import footer from "./footer";
import teamMember from './teamMember'
import aboutPage from './aboutPage'
import blogPost from './blogPost'

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		homepage,
		service,
		galleryImage,
		contactInfo,
		product,
		productCategory,
		careerPage,
		mapLocation,
	 featureItem, 
	 	statItem,
		footer,
		teamMember,
		aboutPage,
		 blogPost,
		
	],
};
