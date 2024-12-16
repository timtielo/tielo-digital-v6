import React from 'react';
import { Save, Send } from 'lucide-react';

interface SaveButtonsProps {
  onSaveDraft: () => void;
  onPublish: () => void;
}

export function SaveButtons({ onSaveDraft, onPublish }: SaveButtonsProps) {
  return (
    <div className="flex justify-end gap-4 pt-6 border-t">
      <button
        onClick={onSaveDraft}
        className="px-6 py-2 flex items-center gap-2 text-gray-700 bg-gray-100 rounded-lg
                 hover:bg-gray-200 transition-colors"
      >
        <Save className="w-5 h-5" />
        Opslaan als concept
      </button>
      
      <button
        onClick={onPublish}
        className="px-6 py-2 flex items-center gap-2 text-white bg-primary rounded-lg
                 hover:bg-primary/90 transition-colors"
      >
        <Send className="w-5 h-5" />
        Publiceren
      </button>
    </div>
  );
}