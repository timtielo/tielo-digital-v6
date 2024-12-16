import { useState, useCallback } from 'react';

export function useEditor() {
  const [content, setContent] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const updateContent = useCallback((newContent: string) => {
    setContent(newContent);
  }, []);

  const execCommand = useCallback((command: string, value?: string) => {
    document.execCommand(command, false, value);
  }, []);

  return {
    content,
    updateContent,
    execCommand,
    isSaving
  };
}