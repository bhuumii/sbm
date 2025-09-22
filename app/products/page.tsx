import { client } from "@/sanity/client";
import Link from "next/link";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { ChevronRight } from "lucide-react";


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


  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <ScrollAnimationWrapper>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Product List
            </h1>
            <p className="text-gray-600 mt-2">
              A comprehensive overview of our premium materials and supplies.
            </p>
          </div>
        </ScrollAnimationWrapper>


        {categories && categories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <ScrollAnimationWrapper key={category._id} delay={index * 100}>
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md h-full flex flex-col">
                  <Link
                    href={`/products/category/${category.slug?.current}`}
                    className="group"
                  >
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-800 transition-colors">
                      {category.name?.replace(/^\d+\.\s*/, "")}
                    </h2>
                  </Link>
                  <ul className="space-y-4 text-gray-600 flex-grow">
                    {category.products.map((product) => (
                      <li key={product._id} className="flex items-center justify-between text-lg">
                        <span className="transition-colors group-hover:text-blue-800 group-hover:font-semibold">
                          {product.name}
                        </span>
                        <ChevronRight className="w-5 h-5 text-gray-300" />
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            Product categories will be listed here soon.
          </p>
        )}
      </div>
    </div>
  );
}
