import React, { useState } from 'react';
import { Toolbar } from './Toolbar';
import { Editor } from './Editor';
import { BlogPost } from '../../types/blog';

interface BlogEditorProps {
  blog?: BlogPost;
  onSave: () => void;
}

export function BlogEditor({ blog, onSave }: BlogEditorProps) {
  const [content, setContent] = useState(blog?.content || '');
  const [title, setTitle] = useState(blog?.title || '');

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-3xl font-bold mb-8">
              {blog ? 'Blog Bewerken' : 'Nieuwe Blog'}
            </h1>
            
            <div className="space-y-6">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Blog titel..."
                className="w-full px-4 py-3 text-xl border border-gray-200 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <Toolbar />
                <Editor 
                  content={content}
                  onChange={setContent}
                />
              </div>

              <div className="flex justify-end gap-4 pt-6">
                <button
                  onClick={onSave}
                  className="px-6 py-2 bg-primary text-white rounded-lg font-semibold
                           hover:bg-primary/90 transition-colors"
                >
                  Opslaan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}