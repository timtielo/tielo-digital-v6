import { useEffect, RefObject } from 'react';
import { useEditor } from '../context/EditorContext';

export function useKeyboardShortcuts(contentRef: RefObject<HTMLDivElement>) {
  const { dispatch } = useEditor();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key.toLowerCase()) {
          case 'b':
            e.preventDefault();
            document.execCommand('bold', false);
            break;
          case 'i':
            e.preventDefault();
            document.execCommand('italic', false);
            break;
          case 'u':
            e.preventDefault();
            document.execCommand('underline', false);
            break;
          case 'z':
            e.preventDefault();
            if (e.shiftKey) {
              dispatch({ type: 'REDO' });
            } else {
              dispatch({ type: 'UNDO' });
            }
            break;
        }
      }
    };

    const element = contentRef.current;
    if (element) {
      element.addEventListener('keydown', handleKeyDown);
      return () => element.removeEventListener('keydown', handleKeyDown);
    }
  }, [contentRef, dispatch]);
}