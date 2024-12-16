import React from 'react';
import { BlogLayout } from '../components/BlogLayout';
import { BlogGrid } from '../components/BlogGrid';

export function Blog() {
  return (
    <div className="pt-20">
      <BlogLayout>
        <BlogGrid />
      </BlogLayout>
    </div>
  );
}