import React from 'react';
import { Toolbar } from './Toolbar';
import { Editor } from './Editor';
import { useEditor } from './hooks/useEditor';

interface ContentEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export function ContentEditor({ content, onChange }: ContentEditorProps) {
  const editor = useEditor({ content, onChange });

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <Toolbar editor={editor} />
      <Editor editor={editor} />
    </div>
  );
}