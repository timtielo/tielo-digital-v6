import React from 'react';
import { X } from 'lucide-react';

interface ImagePreviewProps {
  image: { url: string; alt: string; };
  onRemove: () => void;
  onAltChange: (alt: string) => void;
}

export function ImagePreview({ image, onRemove, onAltChange }: ImagePreviewProps) {
  return (
    <div className="relative">
      <div className="relative aspect-video">
        <img
          src={image.url}
          alt={image.alt}
          className="w-full h-full object-cover rounded-lg"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&h=400';
          }}
        />
        <button
          onClick={onRemove}
          className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm 
                   hover:bg-gray-100 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <input
        type="text"
        value={image.alt}
        onChange={(e) => onAltChange(e.target.value)}
        placeholder="Alt tekst voor SEO"
        className="mt-2 w-full px-3 py-2 border border-gray-200 rounded-lg 
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
    </div>
  );
}