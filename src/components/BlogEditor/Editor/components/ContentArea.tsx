import React, { useRef, useEffect } from 'react';

interface ContentAreaProps {
  content: string;
  onChange: (content: string) => void;
}

export function ContentArea({ content, onChange }: ContentAreaProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  // Initialize content
  useEffect(() => {
    if (editorRef.current && content !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = content;
    }
  }, [content]);

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  };

  return (
    <div
      ref={editorRef}
      contentEditable
      className="editor-content"
      onInput={handleInput}
      onPaste={handlePaste}
      spellCheck="true"
      data-placeholder="Begin met schrijven..."
    />
  );
}