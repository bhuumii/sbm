'use client';
import { useTheme } from "next-themes";
import { useState, useEffect } from 'react';
import { CareerFormClient } from "./CareerFormClient";

interface CareerPageData {
  title?: string;
  subtitle?: string;
}

export const CareerPageClient = ({ data }: { data: CareerPageData }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className={isDark ? "bg-gray-900" : "bg-white"}>
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-800"
            }`}>
              {data.title || "Join Our Team"}
            </h1>
            <div className={`w-24 h-1 mx-auto rounded-full mb-4 shadow-lg ${
              isDark ? "bg-gray-400" : "bg-blue-800"
            }`}></div>
            <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              {data.subtitle ||
                "We are always looking for talented individuals."}
            </p>
          </div>
          <CareerFormClient />
        </div>
      </div>
    </div>
  );
};
