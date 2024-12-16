import React, { useState } from 'react';
import { Image, Upload, X } from 'lucide-react';
import { saveImage } from '../../utils/imageStorage';

interface ImageUploaderProps {
  value: { url: string; alt: string; } | null;
  onChange: (image: { url: string; alt: string; } | null) => void;
}

export function ImageUploader({ value, onChange }: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB');
      return;
    }

    try {
      setIsUploading(true);
      setError(null);
      const image = await saveImage(file);
      onChange({ url: image.url, alt: '' });
    } catch (err) {
      setError('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      {error && (
        <div className="text-red-500 text-sm bg-red-50 p-2 rounded">
          {error}
        </div>
      )}

      {value ? (
        <div className="relative">
          <img
            src={value.url}
            alt={value.alt}
            className="w-full rounded-lg"
          />
          <button
            onClick={() => onChange(null)}
            className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </button>
          <input
            type="text"
            value={value.alt}
            onChange={(e) => onChange({ ...value, alt: e.target.value })}
            placeholder="Alt tekst voor SEO"
            className="mt-2 w-full px-4 py-2 border border-gray-200 rounded-lg"
          />
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="image-upload"
            disabled={isUploading}
          />
          <label
            htmlFor="image-upload"
            className="cursor-pointer flex flex-col items-center"
          >
            {isUploading ? (
              <div className="animate-pulse text-gray-400">Uploading...</div>
            ) : (
              <>
                <Image className="w-8 h-8 text-gray-400 mb-2" />
                <span className="text-sm text-gray-600">
                  Sleep een afbeelding hierheen of klik om te uploaden
                </span>
                <span className="text-xs text-gray-400 mt-1">
                  PNG, JPG, GIF tot 5MB
                </span>
              </>
            )}
          </label>
        </div>
      )}
    </div>
  );
}