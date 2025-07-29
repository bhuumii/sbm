
import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  buttonText?: string;
}

export const CTASection = ({ title, buttonText }: CTASectionProps) => {
  if (!title) return null;

  return (
    <section className="bg-blue-700">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-0">
            {title}
          </h2>
          {buttonText && (
            <Link 
              href="/contact" 
              className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};