

interface AboutSummaryProps {
  title?: string;
  description?: string;
}

export const AboutSummary = ({ title, description }: AboutSummaryProps) => {

  if (!title && !description) {
    return null;
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          {title}
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 md:text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};