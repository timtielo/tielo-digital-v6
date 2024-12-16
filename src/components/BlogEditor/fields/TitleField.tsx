import React from 'react';

interface TitleFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function TitleField({ value, onChange }: TitleFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Titel *
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        placeholder="Een pakkende titel voor je blog..."
        className="w-full px-4 py-3 text-xl border border-gray-200 rounded-lg 
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      <div className="text-sm text-gray-500 flex justify-end">
        {value.length}/100 karakters
      </div>
    </div>
  );
}