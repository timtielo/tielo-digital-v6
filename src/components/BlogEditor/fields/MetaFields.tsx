import React from 'react';

interface MetaFieldsProps {
  title: string;
  description: string;
  onTitleChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
}

export function MetaFields({ 
  title, 
  description, 
  onTitleChange, 
  onDescriptionChange 
}: MetaFieldsProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">SEO Instellingen</h3>
      
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Meta Titel
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          maxLength={60}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <div className="text-sm text-gray-500 flex justify-end">
          {title.length}/60 karakters
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Meta Beschrijving
        </label>
        <textarea
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          maxLength={155}
          rows={3}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <div className="text-sm text-gray-500 flex justify-end">
          {description.length}/155 karakters
        </div>
      </div>
    </div>
  );
}