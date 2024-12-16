import React, { useState } from 'react';
import { BlogPost } from '../../types/blog';
import { TitleField } from './fields/TitleField';
import { ExcerptField } from './fields/ExcerptField';
import { ContentEditor } from './fields/ContentEditor';
import { SlugField } from './fields/SlugField';
import { MetaFields } from './fields/MetaFields';
import { CategoryField } from './fields/CategoryField';
import { ImageField } from './fields/ImageField';
import { SaveButtons } from './SaveButtons';
import { useAutoSave } from './hooks/useAutoSave';
import { generateSlug } from '../../utils/slug';

interface BlogFormProps {
  blog?: BlogPost;
  onSave: (blog: Partial<BlogPost>) => void;
}

export function BlogForm({ blog, onSave }: BlogFormProps) {
  const [formData, setFormData] = useState({
    id: blog?.id,
    title: blog?.title || '',
    excerpt: blog?.excerpt || '',
    content: blog?.content || `<section class="mb-8">
  <h2 class="text-2xl font-bold mb-4">1. Introductie</h2>
  <p class="mb-4">Begin hier met je introductie...</p>
</section>

<section class="mb-8">
  <h2 class="text-2xl font-bold mb-4">2. Eerste Hoofdstuk</h2>
  <p class="mb-4">Schrijf hier je eerste hoofdstuk...</p>
  <ul class="list-disc pl-6 mb-4">
    <li>Eerste punt</li>
    <li>Tweede punt</li>
    <li>Derde punt</li>
  </ul>
</section>

<section class="mb-8">
  <h2 class="text-2xl font-bold mb-4">3. Tweede Hoofdstuk</h2>
  <p class="mb-4">Schrijf hier je tweede hoofdstuk...</p>
</section>

<section class="mb-8">
  <h2 class="text-2xl font-bold mb-4">4. Conclusie</h2>
  <p class="mb-4">Schrijf hier je conclusie...</p>
</section>`,
    categories: blog?.categories || [],
    seo: {
      slug: blog?.seo?.slug || '',
      metaTitle: blog?.seo?.metaTitle || '',
      metaDescription: blog?.seo?.metaDescription || ''
    },
    image: blog?.image || null,
    createdAt: blog?.createdAt,
    updatedAt: blog?.updatedAt
  });

  useAutoSave(formData, (data) => {
    try {
      onSave({ ...data, status: 'draft' });
    } catch (err) {
      console.error('Auto-save failed:', err);
    }
  });

  const handleChange = (field: string, value: any) => {
    setFormData(prev => {
      if (field.startsWith('seo.')) {
        const seoField = field.split('.')[1];
        return {
          ...prev,
          seo: {
            ...prev.seo,
            [seoField]: value
          }
        };
      }
      return { ...prev, [field]: value };
    });

    // Auto-generate slug from title
    if (field === 'title' && !formData.seo.slug) {
      setFormData(prev => ({
        ...prev,
        seo: {
          ...prev.seo,
          slug: generateSlug(value)
        }
      }));
    }
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-8">
        <TitleField
          value={formData.title}
          onChange={(value) => handleChange('title', value)}
        />

        <ExcerptField
          value={formData.excerpt}
          onChange={(value) => handleChange('excerpt', value)}
        />

        <ImageField
          image={formData.image}
          onChange={(value) => handleChange('image', value)}
        />

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <ContentEditor
            content={formData.content}
            onChange={(value) => handleChange('content', value)}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <SlugField
              value={formData.seo.slug}
              onChange={(value) => handleChange('seo.slug', value)}
            />

            <CategoryField
              selected={formData.categories}
              onChange={(value) => handleChange('categories', value)}
            />
          </div>

          <MetaFields
            title={formData.seo.metaTitle}
            description={formData.seo.metaDescription}
            onTitleChange={(value) => handleChange('seo.metaTitle', value)}
            onDescriptionChange={(value) => handleChange('seo.metaDescription', value)}
          />
        </div>

        <SaveButtons
          onSaveDraft={() => onSave({ ...formData, status: 'draft' })}
          onPublish={() => onSave({ ...formData, status: 'published' })}
        />
      </div>
    </div>
  );
}