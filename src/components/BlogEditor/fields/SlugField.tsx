import React from 'react';

interface SlugFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function SlugField({ value, onChange }: SlugFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        URL Slug *
      </label>
      <div className="flex items-center space-x-2">
        <span className="text-gray-500">tielo-digital.nl/blog/</span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))}
          required
          className="flex-1 px-4 py-2 border border-gray-200 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="url-slug"
        />
      </div>
      <p className="text-sm text-gray-500">
        Dit wordt de URL van je blog. Gebruik alleen kleine letters, cijfers en koppeltekens.
      </p>
    </div>
  );
}