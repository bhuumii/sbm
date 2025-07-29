

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export const Hero = ({ title, subtitle, imageUrl }: HeroProps) => {
  return (
    <div
      className="relative bg-cover bg-center h-[60vh] md:h-[80vh] flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-md">
          {title}
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-light drop-shadow-md">
          {subtitle}
        </p>
      </div>
    </div>
  );
};