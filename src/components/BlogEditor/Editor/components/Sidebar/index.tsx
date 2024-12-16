import React from 'react';
import { Save, Send } from 'lucide-react';
import { useEditor } from '../../hooks/useEditor';

interface EditorSidebarProps {
  onSave: (status: 'draft' | 'published') => void;
}

export function EditorSidebar({ onSave }: EditorSidebarProps) {
  const { isSaving } = useEditor();

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm space-y-6">
      <div className="space-y-4">
        <button
          onClick={() => onSave('draft')}
          disabled={isSaving}
          className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg
                   hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
        >
          <Save className="w-4 h-4" />
          Opslaan als concept
        </button>
        
        <button
          onClick={() => onSave('published')}
          disabled={isSaving}
          className="w-full px-4 py-2 bg-primary text-white rounded-lg
                   hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          Publiceren
        </button>
      </div>

      <div className="border-t pt-4">
        <h3 className="font-medium mb-2">Document</h3>
        <div className="text-sm text-gray-500">
          Laatste wijziging: {new Date().toLocaleString()}
        </div>
      </div>
    </div>
  );
}