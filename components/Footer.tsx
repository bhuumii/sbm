
export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8 text-center">
        <p>© {new Date().getFullYear()} SBM Traders. All Rights Reserved.</p>
        <p className="text-sm text-gray-400 mt-2">
          Website by Bhumika
        </p>
      </div>
    </footer>
  );
};