import React, { useState, useEffect } from 'react';
import { PlusCircle, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { getAllBlogs, deleteBlog, saveAsDraft, publishBlog, updateBlog } from '../utils/blogStorage';
import { BlogPreview } from '../components/BlogPreview/BlogPreview';
import { BlogForm } from '../components/BlogEditor/BlogForm';
import { BlogPost } from '../types/blog';
import { formatDate } from '../utils/date';

export function BlogManagement() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    setBlogs(getAllBlogs());
  }, []);

  const handleNewBlog = () => {
    setSelectedBlog(null);
    setIsEditing(true);
  };

  const handleEdit = (blog: BlogPost) => {
    setSelectedBlog(blog);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Weet je zeker dat je deze blog wilt verwijderen?')) {
      deleteBlog(id);
      setBlogs(getAllBlogs());
      setSelectedBlog(null);
      setIsEditing(false);
    }
  };

  const handleSave = (blogData: Partial<BlogPost>) => {
    if (selectedBlog) {
      updateBlog(selectedBlog.id, blogData);
    } else if (blogData.status === 'published') {
      publishBlog(blogData);
    } else {
      saveAsDraft(blogData);
    }
    
    setBlogs(getAllBlogs());
    setIsEditing(false);
    setSelectedBlog(null);
  };

  const handleBack = () => {
    setIsEditing(false);
    setSelectedBlog(null);
  };

  if (isEditing) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-primary mb-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Terug naar overzicht
            </button>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h1 className="text-3xl font-bold mb-8">
                {selectedBlog ? 'Blog Bewerken' : 'Nieuwe Blog'}
              </h1>
              
              <BlogForm 
                blog={selectedBlog}
                onSave={handleSave}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Blog Management</h1>
            <button 
              onClick={handleNewBlog}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <PlusCircle className="w-5 h-5" />
              Nieuwe Blog
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Titel</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Categorie</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Datum</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Acties</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {blogs.map((blog) => (
                  <tr key={blog.id}>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleEdit(blog)}
                        className="text-sm font-medium text-gray-900 hover:text-primary text-left"
                      >
                        {blog.title || 'Untitled'}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {blog.category || 'Uncategorized'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {formatDate(blog.createdAt)}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        blog.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {blog.status === 'published' ? 'Gepubliceerd' : 'Concept'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-3">
                      <button 
                        onClick={() => handleEdit(blog)}
                        className="text-gray-400 hover:text-primary"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => handleDelete(blog.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}