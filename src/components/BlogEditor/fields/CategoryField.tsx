import React from 'react';
import { X } from 'lucide-react';

const CATEGORIES = [
  'AI',
  'Automatisering',
  'Customer Service',
  'Content Creation',
  'Marketing',
  'Innovatie'
];

interface CategoryFieldProps {
  selected: string[];
  onChange: (categories: string[]) => void;
}

export function CategoryField({ selected, onChange }: CategoryFieldProps) {
  const handleToggle = (category: string) => {
    if (selected.includes(category)) {
      onChange(selected.filter(c => c !== category));
    } else {
      onChange([...selected, category]);
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Categorieën *
      </label>
      
      <div className="flex flex-wrap gap-2">
        {selected.map((category) => (
          <span
            key={category}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
          >
            {category}
            <button
              onClick={() => handleToggle(category)}
              className="ml-2 hover:text-primary/80"
            >
              <X className="w-4 h-4" />
            </button>
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {CATEGORIES.filter(c => !selected.includes(c)).map((category) => (
          <button
            key={category}
            onClick={() => handleToggle(category)}
            className="px-3 py-1 rounded-full text-sm border border-gray-200 hover:border-primary hover:text-primary"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}