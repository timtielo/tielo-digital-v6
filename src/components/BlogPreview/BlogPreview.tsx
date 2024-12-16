import React from 'react';
import { BlogPost } from '../../types/blog';
import { formatDate } from '../../utils/date';

interface BlogPreviewProps {
  blog: BlogPost;
}

export function BlogPreview({ blog }: BlogPreviewProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            {blog.categories[0] || 'Algemeen'}
          </span>
          <span className="text-gray-500 text-sm">
            {Math.ceil(blog.content.split(' ').length / 250)} min leestijd
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-4 font-rubik">{blog.title}</h1>
        <p className="text-gray-500">
          {formatDate(blog.createdAt)}
        </p>
      </header>

      {blog.image && (
        <div className="mb-8">
          <div className="relative w-full">
            <img
              src={blog.image.url}
              alt={blog.image.alt}
              className="w-full rounded-xl"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&h=400';
              }}
            />
          </div>
          {blog.image.alt && (
            <p className="mt-2 text-sm text-gray-500 text-center">
              {blog.image.alt}
            </p>
          )}
        </div>
      )}

      <div 
        className="prose max-w-none editor-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}