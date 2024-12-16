import { useState, useCallback } from 'react';
import { EditorInstance } from '../types';

interface UseEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export function useEditor({ content: initialContent, onChange }: UseEditorProps): EditorInstance {
  const [content, setContent] = useState(initialContent);

  const handleInput = useCallback((newContent: string) => {
    setContent(newContent);
    onChange(newContent);
  }, [onChange]);

  const setHeading = useCallback((level: number) => {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const container = range.commonAncestorContainer;
    const parentBlock = container.nodeType === 3 ? container.parentElement : container as Element;

    if (parentBlock) {
      try {
        // Get the current block element
        const currentBlock = parentBlock.closest('h1, h2, h3, h4, h5, h6, p') || parentBlock;
        
        // Create new element based on selected level
        const tag = level === 0 ? 'p' : `h${level}`;
        const newElement = document.createElement(tag);
        
        // Copy content
        newElement.innerHTML = currentBlock.innerHTML;
        
        // Add appropriate classes based on tag
        if (tag === 'p') {
          newElement.className = 'text-gray-600 mb-4';
        } else {
          newElement.className = 'font-bold font-rubik mb-4';
        }
        
        // Replace the old element with the new one
        if (currentBlock.parentNode) {
          currentBlock.parentNode.replaceChild(newElement, currentBlock);
          
          // Restore selection
          const newRange = document.createRange();
          newRange.selectNodeContents(newElement);
          selection.removeAllRanges();
          selection.addRange(newRange);
        }
      } catch (error) {
        console.error('Error setting heading:', error);
      }
    }
  }, []);

  const execCommand = useCallback((command: string, value?: string) => {
    document.execCommand(command, false, value);
  }, []);

  return {
    content,
    handleInput,
    execCommand,
    setHeading,
    
    // Text formatting
    toggleBold: () => execCommand('bold'),
    toggleItalic: () => execCommand('italic'),
    toggleUnderline: () => execCommand('underline'),
    
    // Lists
    toggleBulletList: () => execCommand('insertUnorderedList'),
    toggleNumberedList: () => execCommand('insertOrderedList'),
    
    // Alignment
    setAlignment: (align: 'left' | 'center' | 'right' | 'justify') => 
      execCommand(`justify${align.charAt(0).toUpperCase()}${align.slice(1)}`),
  };
}