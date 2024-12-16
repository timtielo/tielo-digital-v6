import React from 'react';
import { Image, Upload, X } from 'lucide-react';

interface ImageFieldProps {
  image: { url: string; alt: string; } | null;
  onChange: (image: { url: string; alt: string; } | null) => void;
}

export function ImageField({ image, onChange }: ImageFieldProps) {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real implementation, you would upload to a server
      const url = URL.createObjectURL(file);
      onChange({ url, alt: '' });
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Uitgelichte Afbeelding
      </label>
      
      {image ? (
        <div className="relative">
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-48 object-cover rounded-lg"
          />
          <button
            onClick={() => onChange(null)}
            className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </button>
          <input
            type="text"
            value={image.alt}
            onChange={(e) => onChange({ ...image, alt: e.target.value })}
            placeholder="Alt tekst voor SEO"
            className="mt-2 w-full px-4 py-2 border border-gray-200 rounded-lg"
          />
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="cursor-pointer flex flex-col items-center"
          >
            <Image className="w-8 h-8 text-gray-400 mb-2" />
            <span className="text-sm text-gray-600">
              Klik om een afbeelding te uploaden
            </span>
          </label>
        </div>
      )}
    </div>
  );
}