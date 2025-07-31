
import Link from 'next/link';

interface ProductsTeaserProps {
  title?: string;
  categories: string[];
}

export const ProductsTeaser = ({ title, categories }: ProductsTeaserProps) => {
  if (!categories || categories.length === 0) return null;

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title || 'Our Products'}</h2>
        <div className="flex flex-wrap justify-center gap-4 my-8">
          {categories.map((category, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">
              {category}
            </span>
          ))}
        </div>
        <Link 
          href="/products" 
          className="bg-blue-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Explore Full Range
        </Link>
      </div>
    </section>
  );
};