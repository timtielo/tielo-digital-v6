import { useEffect, useRef } from 'react';
import { BlogPost } from '../../../types/blog';

export function useAutoSave(
  formData: Partial<BlogPost>,
  onSave: (data: Partial<BlogPost>) => void
) {
  const timeoutRef = useRef<number>();

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      onSave({ ...formData, status: 'draft' });
    }, 30000); // Auto-save every 30 seconds

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [formData, onSave]);
}