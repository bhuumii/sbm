'use client';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import NewsletterForm from '@/components/NewsletterForm';
import { useTheme } from "next-themes";
import { useState, useEffect } from 'react';

interface BlogPost {
  _id: string;
  _createdAt: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage?: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  };
  excerpt: string;
  publishedAt: string;
  featured?: boolean;
  status: 'draft' | 'published' | 'archived';
}

export const BlogPageClient = ({ blogPosts }: { blogPosts: BlogPost[] }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <main className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-white"}`}>
      {/* Hero Section*/}
      <section className={`py-20 ${isDark ? "bg-gray-900" : "bg-white"}`}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-800"
            }`}>
              Our Blog
            </h1>
            <div className={`w-24 h-1 mx-auto rounded-full mb-4 shadow-lg ${
              isDark ? "bg-gray-400" : "bg-blue-800"
            }`}></div>
            <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              Discover insights, industry trends, and expert knowledge from the world of signage and branding
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className={`py-16 ${isDark ? "bg-gray-900" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          {blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className={`w-32 h-32 mx-auto mb-8 rounded-3xl flex items-center justify-center ${
                  isDark 
                    ? "bg-gray-800" 
                    : "bg-gradient-to-br from-blue-100 to-blue-50"
                }`}>
                  <svg className={`w-16 h-16 ${
                    isDark ? "text-gray-400" : "text-blue-300"
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className={`text-3xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>No Posts Yet</h2>
                <p className={`text-lg ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}>Stay tuned for our latest insights and updates.</p>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {blogPosts.map((post, index) => (
                  <Link 
                    key={post._id} 
                    href={`/blog/${post.slug.current}`} 
                    className="group block"
                  >
                    <article className={`flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border ${
                      isDark 
                        ? "bg-gray-800 border-gray-700 hover:border-gray-600" 
                        : "bg-white border-gray-100 hover:border-gray-200"
                    }`}>
                      {/* Content Section */}
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3 text-sm">
                          <span className={`px-3 py-1 font-medium rounded-full ${
                            isDark 
                              ? "bg-gray-700 text-blue-400" 
                              : "bg-blue-50 text-blue-700"
                          }`}>
                            Article
                          </span>
                          <time className={`font-medium ${
                            isDark ? "text-gray-400" : "text-gray-500"
                          }`}>
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </time>
                        </div>

                        {/* Title */}
                        <h2 className={`text-2xl md:text-3xl font-bold leading-tight transition-colors duration-300 ${
                          isDark 
                            ? "text-white group-hover:text-blue-400" 
                            : "text-gray-900 group-hover:text-blue-800"
                        }`}>
                          {post.title}
                        </h2>

                        {/* Description */}
                        <p className={`text-lg leading-relaxed font-light ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}>
                          {post.excerpt}
                        </p>

                        {/* Read More */}
                        <div className={`flex items-center gap-2 font-medium transition-colors duration-300 ${
                          isDark 
                            ? "text-blue-400 group-hover:text-blue-300" 
                            : "text-blue-800 group-hover:text-blue-900"
                        }`}>
                          <span>Read Article</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>

                      {/* Image Section */}
                      {post.mainImage && (
                        <div className="flex-shrink-0 md:w-64 lg:w-80">
                          <div className="relative h-48 md:h-40 lg:h-48 w-full rounded-xl overflow-hidden">
                            <Image
                              src={urlFor(post.mainImage).url()}
                              alt={post.mainImage.alt || post.title}
                              fill
                              style={{ objectFit: 'cover' }}
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 256px, 320px"
                              className="transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </div>
                      )}
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className={`py-20 ${isDark ? "bg-gray-900" : "bg-white"}`}>
        <div className="container mx-auto px-4 text-center">
          <NewsletterForm />
        </div>
      </section>
    </main>
  );
};
