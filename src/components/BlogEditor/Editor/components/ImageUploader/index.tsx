import React, { useState } from 'react';
import { Image, Upload, X } from 'lucide-react';
import { ImagePreview } from './ImagePreview';
import { useImageUpload } from './useImageUpload';

interface ImageUploaderProps {
  image: { url: string; alt: string; } | null;
  onChange: (image: { url: string; alt: string; } | null) => void;
}

export function ImageUploader({ image, onChange }: ImageUploaderProps) {
  const [error, setError] = useState<string | null>(null);
  const { handleImageUpload, isUploading } = useImageUpload();

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
      setError(null);
      const url = await handleImageUpload(file);
      onChange({ url, alt: '' });
    } catch (err) {
      setError('Failed to upload image. Please try again.');
    }
  };

  return (
    <div className="space-y-4">
      {error && (
        <div className="text-red-500 text-sm bg-red-50 p-2 rounded">
          {error}
        </div>
      )}

      {image ? (
        <ImagePreview
          image={image}
          onRemove={() => onChange(null)}
          onAltChange={(alt) => onChange({ ...image, alt })}
        />
      ) : (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
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
                <Upload className="w-8 h-8 text-gray-400 mb-2" />
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