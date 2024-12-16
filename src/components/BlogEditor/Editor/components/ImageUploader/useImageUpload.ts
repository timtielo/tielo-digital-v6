import { useState } from 'react';

export function useImageUpload() {
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = async (file: File): Promise<string> => {
    setIsUploading(true);
    try {
      // Create a blob URL for the image
      const url = URL.createObjectURL(file);
      return url;
    } finally {
      setIsUploading(false);
    }
  };

  return {
    handleImageUpload,
    isUploading
  };
}