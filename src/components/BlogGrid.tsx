import React from 'react';
import { BlogCard } from './BlogCard';
import { getAllBlogs } from '../utils/blogStorage';

function cleanExcerpt(content: string): string {
  // Remove HTML tags and decode HTML entities
  const div = document.createElement('div');
  div.innerHTML = content;
  const text = div.textContent || div.innerText || '';
  
  // Trim and limit to 150 characters
  return text.trim().substring(0, 150) + (text.length > 150 ? '...' : '');
}

export function BlogGrid() {
  const allBlogs = getAllBlogs();
  const publishedBlogs = allBlogs.filter(blog => blog.status === 'published');

  if (publishedBlogs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">Er zijn nog geen blogs gepubliceerd.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {publishedBlogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          excerpt={blog.excerpt || cleanExcerpt(blog.content)}
          category={blog.categories[0] || 'Algemeen'}
          readTime={`${Math.ceil(blog.content.split(' ').length / 250)} min`}
          date={new Date(blog.createdAt).toLocaleDateString('nl-NL')}
          image={blog.image?.url || 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&h=400'}
          slug={blog.seo.slug}
          isNew={new Date().getTime() - new Date(blog.createdAt).getTime() < 7 * 24 * 60 * 60 * 1000}
        />
      ))}
    </div>
  );
}