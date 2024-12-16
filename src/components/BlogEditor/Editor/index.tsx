import React from 'react';
import { EditorProvider } from './context/EditorContext';
import { EditorToolbar } from './components/Toolbar';
import { EditorContent } from './components/Content';
import { EditorSidebar } from './components/Sidebar';
import './styles/editor.css';

interface EditorProps {
  initialContent: string;
  onChange: (content: string) => void;
  onSave: (status: 'draft' | 'published') => void;
}

export function Editor({ initialContent, onChange, onSave }: EditorProps) {
  return (
    <EditorProvider initialContent={initialContent} onChange={onChange}>
      <div className="editor-container">
        <div className="editor-main">
          <EditorToolbar />
          <EditorContent />
        </div>
        <EditorSidebar onSave={onSave} />
      </div>
    </EditorProvider>
  );
}