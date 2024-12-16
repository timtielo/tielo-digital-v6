import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from '../components/Link';
import { getBlogBySlug } from '../utils/blogStorage';

interface BlogPostProps {
  slug: string;
}

export function BlogPost({ slug }: BlogPostProps) {
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-primary mb-8">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Terug naar blogs
            </Link>
            <p className="text-xl text-gray-600">Blog post niet gevonden.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-primary mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Terug naar blogs
          </Link>

          <article>
            <header className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {blog.category}
                </span>
                <span className="text-gray-500 text-sm">
                  {Math.ceil(blog.content.split(' ').length / 250)} min leestijd
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
              <p className="text-gray-500">
                {new Date(blog.createdAt).toLocaleDateString('nl-NL')}
              </p>
            </header>

            {blog.image && (
              <img
                src={blog.image.url}
                alt={blog.image.alt}
                className="w-full h-[400px] object-cover rounded-xl mb-8"
              />
            )}

            <div 
              className="prose max-w-none editor-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>
        </div>
      </div>
    </div>
  );
}