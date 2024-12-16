import React, { useRef, useEffect } from 'react';
import { EditorInstance } from './types';
import './styles.css';

interface EditorProps {
  editor: EditorInstance;
}

export function Editor({ editor }: EditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      // Only update content if it's different to avoid cursor jumping
      if (editorRef.current.innerHTML !== editor.content) {
        editorRef.current.innerHTML = editor.content;
      }
    }
  }, [editor.content]);

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const content = e.currentTarget.innerHTML;
    editor.handleInput(content);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      
      const selection = window.getSelection();
      if (!selection || !selection.rangeCount) return;
      
      const range = selection.getRangeAt(0);
      const parentElement = range.commonAncestorContainer.parentElement;
      
      // If we're in a heading, create a new paragraph after it
      if (parentElement?.matches('h1, h2, h3, h4, h5, h6')) {
        const p = document.createElement('p');
        p.innerHTML = '<br>';
        
        // Insert after the current heading
        if (parentElement.nextSibling) {
          parentElement.parentNode?.insertBefore(p, parentElement.nextSibling);
        } else {
          parentElement.parentNode?.appendChild(p);
        }
        
        // Move cursor to new paragraph
        const newRange = document.createRange();
        newRange.setStart(p, 0);
        newRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(newRange);
      } else {
        // Insert line break
        document.execCommand('insertLineBreak');
      }
    }
  };

  return (
    <div
      ref={editorRef}
      contentEditable
      className="editor-content"
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      spellCheck="true"
      lang="nl"
      dir="ltr"
      style={{ 
        unicodeBidi: 'plaintext',
        direction: 'ltr',
        textAlign: 'left'
      }}
    />
  );
}