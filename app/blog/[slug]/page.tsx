
import { client } from '@/sanity/lib/client';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { notFound } from 'next/navigation';

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
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

export const revalidate = 60;

interface BlogPostPageProps {
  params: { slug: string };
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    slug,
    mainImage,
    excerpt,
    publishedAt,
    body,
    seo
  }`;
  return client.fetch(query, { slug });
}


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
            <figcaption className="text-center text-sm text-gray-600 mt-3 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h1: ({ children }) => 
      <h1 className="text-4xl font-bold my-8 text-gray-900">{children}</h1>,
    h2: ({ children }) => 
      <h2 className="text-3xl font-semibold my-6 text-gray-900">{children}</h2>,
    h3: ({ children }) => 
      <h3 className="text-2xl font-semibold my-5 text-gray-900">{children}</h3>,
    h4: ({ children }) => 
      <h4 className="text-xl font-semibold my-4 text-gray-900">{children}</h4>,
    blockquote: ({ children }) => 
      <blockquote className="border-l-4 border-blue-600 pl-6 py-4 italic text-gray-700 my-6 bg-blue-50 rounded-r-lg">
        {children}
      </blockquote>,
    normal: ({ children }) => 
      <p className="mb-4 leading-relaxed text-gray-700">{children}</p>,
  },
  list: {
    bullet: ({ children }) => 
      <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>,
    number: ({ children }) => 
      <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => 
      <li className="text-gray-700">{children}</li>,
    number: ({ children }) => 
      <li className="text-gray-700">{children}</li>,
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
          className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => 
      <strong className="font-semibold text-gray-900">{children}</strong>,
    em: ({ children }) => 
      <em className="italic">{children}</em>,
    code: ({ children }) => 
      <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>,
  },
};

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      images: post.mainImage ? [urlFor(post.mainImage).url()] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate">
              {post.title}
            </span>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
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
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  BLOG POST
                </span>
                <time className="text-sm text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                {post.excerpt}
              </p>

              {/* Divider */}
              <div className="w-24 h-1 bg-blue-600 rounded-full mb-8" />

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
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
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
}
