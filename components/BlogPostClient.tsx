'use client';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
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
  body: any[];
  featured?: boolean;
  status: 'draft' | 'published' | 'archived';
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

export const BlogPostClient = ({ post }: { post: BlogPost }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const components: PortableTextComponents = {
    types: {
      image: ({ value }: any) => {
        if (!value?.asset) return null;
        return (
          <figure className="my-8">
            <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={urlFor(value).url()}
                alt={value.alt || 'Blog Post Image'}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
              />
            </div>
            {value.caption && (
              <figcaption className={`text-center text-sm mt-3 italic ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}>
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      },
    },
    block: {
      h1: ({ children }) =>
        <h1 className={`text-4xl font-bold my-8 ${
          isDark ? "text-white" : "text-gray-900"
        }`}>{children}</h1>,
      h2: ({ children }) =>
        <h2 className={`text-3xl font-semibold my-6 ${
          isDark ? "text-white" : "text-gray-900"
        }`}>{children}</h2>,
      h3: ({ children }) =>
        <h3 className={`text-2xl font-semibold my-5 ${
          isDark ? "text-white" : "text-gray-900"
        }`}>{children}</h3>,
      h4: ({ children }) =>
        <h4 className={`text-xl font-semibold my-4 ${
          isDark ? "text-white" : "text-gray-900"
        }`}>{children}</h4>,
      blockquote: ({ children }) =>
        <blockquote className={`border-l-4 pl-6 py-4 italic my-6 rounded-r-lg ${
          isDark 
            ? "border-blue-400 text-gray-300 bg-gray-800" 
            : "border-blue-800 text-gray-700 bg-blue-50"
        }`}>
          {children}
        </blockquote>,
      normal: ({ children }) =>
        <p className={`mb-4 leading-relaxed ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}>{children}</p>,
    },
    list: {
      bullet: ({ children }) =>
        <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>,
      number: ({ children }) =>
        <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) =>
        <li className={isDark ? "text-gray-300" : "text-gray-700"}>{children}</li>,
      number: ({ children }) =>
        <li className={isDark ? "text-gray-300" : "text-gray-700"}>{children}</li>,
    },
    marks: {
      link: ({ children, value }: any) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
        const target = value.blank ? '_blank' : undefined;
        return (
          <a
            href={value.href}
            rel={rel}
            target={target}
            className={`underline transition-colors duration-200 ${
              isDark 
                ? "text-blue-400 hover:text-blue-300" 
                : "text-blue-700 hover:text-blue-800"
            }`}
          >
            {children}
          </a>
        );
      },
      strong: ({ children }) =>
        <strong className={`font-semibold ${
          isDark ? "text-white" : "text-gray-900"
        }`}>{children}</strong>,
      em: ({ children }) =>
        <em className="italic">{children}</em>,
      code: ({ children }) =>
        <code className={`px-2 py-1 rounded text-sm font-mono ${
          isDark 
            ? "bg-gray-800 text-gray-200" 
            : "bg-gray-100 text-gray-800"
        }`}>
          {children}
        </code>,
    },
  };

  return (
    <main className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Article */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className={`rounded-2xl shadow-lg overflow-hidden ${
            isDark ? "bg-gray-800" : "bg-white"
          }`}>
            {/* Hero Image */}
            {post.mainImage && (
              <div className="relative w-full h-64 md:h-80 lg:h-96">
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.mainImage.alt || post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            )}

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Meta Info */}
              <div className="flex items-center gap-4 mb-6">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  isDark 
                    ? "text-blue-400 bg-blue-900" 
                    : "text-blue-800 bg-blue-50"
                }`}>
                  BLOG POST
                </span>
                <time className={`text-sm ${
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
              <h1 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className={`text-xl mb-8 leading-relaxed font-light ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}>
                {post.excerpt}
              </p>

              {/* Divider */}
              <div className={`w-24 h-1 rounded-full mb-8 ${
                isDark ? "bg-gray-400" : "bg-blue-800"
              }`} />

              {/* Body Content */}
              <div className="prose prose-lg max-w-none">
                <PortableText value={post.body} components={components} />
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className={`inline-flex items-center gap-2 font-semibold transition-colors duration-200 ${
                isDark 
                  ? "text-blue-400 hover:text-blue-300" 
                  : "text-blue-800 hover:text-blue-900"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};
