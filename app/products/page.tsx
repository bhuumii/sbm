import { client } from "@/sanity/client";
import { ProductsPageClient } from "@/components/ProductsPageClient";

interface Product {
  _id: string;
  name?: string;
  slug?: { current: string };
}

interface ProductCategory {
  _id: string;
  name?: string;
  slug?: { current: string };
  products: Product[];
}

async function getProductCategories() {
  const query = `*[_type == "productCategory"]{
    _id,
    name,
    slug,
    "products": products[]->{_id, name, slug}
  } | order(name asc)`;
  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
}

export default async function ProductsPage() {
  const categories: ProductCategory[] = await getProductCategories();
  return <ProductsPageClient categories={categories} />;
}
