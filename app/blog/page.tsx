import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

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


export const revalidate = 60;


async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost" && status == "published"] | order(orderRank asc, _createdAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    mainImage,
    excerpt,
    publishedAt,
    featured,
    status
  }`;
  return client.fetch(query);
}


export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section*/}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-blue-800 mb-6 tracking-tight">
              Our Blog
            </h1>
            <div className="w-24 h-1.5 bg-blue-800 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
              Discover insights, industry trends, and expert knowledge from the world of signage and branding
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">No Posts Yet</h2>
                <p className="text-gray-600 text-lg">Stay tuned for our latest insights and updates.</p>
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
                    <article className="flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
                      {/* Content Section */}
                      <div className="flex-1 space-y-4">
                        {/* Meta Info */}
                        <div className="flex items-center gap-3 text-sm">
                          <span className="px-3 py-1 bg-blue-50 text-blue-700 font-medium rounded-full">
                            Article
                          </span>
                          <time className="text-gray-500 font-medium">
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </time>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300 leading-tight">
                          {post.title}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 text-lg leading-relaxed font-light">
                          {post.excerpt}
                        </p>

                        {/* Read More */}
                        <div className="flex items-center gap-2 text-blue-600 group-hover:text-blue-800 transition-colors duration-300 font-medium">
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

              {/* Load More Button */}
              {blogPosts.length > 0 && (
                <div className="text-center mt-16">
                  <div className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 text-gray-600 font-medium rounded-full hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
                    <span>More articles coming soon</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
              Get the latest insights and industry updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
              <button className="px-8 py-4 bg-blue-800 text-white font-semibold rounded-full hover:bg-blue-900 transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
