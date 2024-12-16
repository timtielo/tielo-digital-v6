import React from 'react';

interface EditorProps {
  content: string;
  onChange: (content: string) => void;
}

export function Editor({ content, onChange }: EditorProps) {
  return (
    <div 
      contentEditable
      className="min-h-[400px] p-4 prose max-w-none focus:outline-none"
      dangerouslySetInnerHTML={{ __html: content }}
      onInput={(e) => onChange(e.currentTarget.innerHTML)}
    />
  );
}