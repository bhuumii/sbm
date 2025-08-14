import { type SchemaTypeDefinition } from "sanity";
import homepage from "./homepage";
import service from "./service";
import galleryImage from "./galleryImage";
import contactInfo from "./contactInfo";
import product from "./product";
import productCategory from "./productCategory";
import careerPage from "./careerPage";
import heroSlide from "./heroSlide";
import footer from "./footer";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		homepage,
		service,
		galleryImage,
		contactInfo,
		product,
		productCategory,
		careerPage,
		heroSlide,
		footer,
	],
};
