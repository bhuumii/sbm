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
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
      Our Product List
    </h1>
    <div className="w-24 h-1 bg-blue-800 mx-auto rounded-full mb-2"></div>
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
                    className="group flex items-center justify-between mb-6"
                  >
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors">
                      {category.name?.replace(/^\d+\.\s*/, "")}
                    </h2>
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-800 transition-colors" />
                  </Link>
                  
             
                  <ul className="space-y-4 text-gray-600 flex-grow">
                    {category.products.map((product) => (
                      <li key={product._id} className="text-lg">
                        <span>
                          {product.name}
                        </span>
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
