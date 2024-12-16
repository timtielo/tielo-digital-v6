import React from 'react';

interface ExcerptFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function ExcerptField({ value, onChange }: ExcerptFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Samenvatting *
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        rows={3}
        placeholder="Een korte samenvatting van je blog..."
        className="w-full px-4 py-3 border border-gray-200 rounded-lg 
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      <div className="text-sm text-gray-500 flex justify-end">
        {value.length}/300 karakters
      </div>
    </div>
  );
}