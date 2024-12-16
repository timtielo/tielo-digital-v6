import React, { useRef, useEffect } from 'react';
import { useEditor } from '../../hooks/useEditor';
import { useAutoSave } from '../../hooks/useAutoSave';

export function EditorContent() {
  const contentRef = useRef<HTMLDivElement>(null);
  const { content, updateContent } = useEditor();
  
  useAutoSave(content);

  useEffect(() => {
    if (contentRef.current && contentRef.current.innerHTML !== content) {
      contentRef.current.innerHTML = content;
    }
  }, [content]);

  const handleInput = () => {
    if (contentRef.current) {
      updateContent(contentRef.current.innerHTML);
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      
      // Insert a new paragraph
      document.execCommand('insertParagraph', false);
      
      // Ensure consistent formatting
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const newParagraph = range.startContainer.parentElement;
        if (newParagraph) {
          newParagraph.className = 'font-sans text-base text-gray-600';
        }
      }
    }
  };

  return (
    <div
      ref={contentRef}
      className="editor-content font-sans"
      contentEditable
      suppressContentEditableWarning
      onInput={handleInput}
      onPaste={handlePaste}
      onKeyDown={handleKeyDown}
      data-placeholder="Begin met schrijven..."
      spellCheck="true"
    />
  );
}