import { useEffect, useRef } from 'react';

export function useAutoSave(content: string) {
  const timeoutRef = useRef<number>();

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      // Auto-save logic here
      console.log('Auto-saving...', content);
    }, 60000); // Auto-save every 60 seconds

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [content]);
}