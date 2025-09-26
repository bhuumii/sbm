import { client } from '@/sanity/lib/client';
import { BlogPageClient } from '@/components/BlogPageClient';

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
  return <BlogPageClient blogPosts={blogPosts} />;
}
