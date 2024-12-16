import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useEditor } from '../../context/EditorContext';
import { BlockPicker } from '../BlockPicker';

interface AddBlockButtonProps {
  position: 'before' | 'after';
  blockId: string;
}

export function AddBlockButton({ position, blockId }: AddBlockButtonProps) {
  const [showPicker, setShowPicker] = useState(false);
  const { dispatch } = useEditor();

  return (
    <div className="relative">
      <div 
        className={`absolute left-1/2 -translate-x-1/2 ${
          position === 'before' ? '-top-3' : '-bottom-3'
        } opacity-0 group-hover:opacity-100 transition-opacity`}
      >
        <button
          className="p-1 rounded-full bg-primary text-white hover:bg-primary/90 shadow-sm"
          onClick={() => setShowPicker(true)}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {showPicker && (
        <BlockPicker
          onSelect={(type) => {
            dispatch({
              type: 'ADD_BLOCK',
              payload: {
                type,
                position: position === 'before' ? blockId : blockId + 1
              }
            });
            setShowPicker(false);
          }}
          onClose={() => setShowPicker(false)}
        />
      )}
    </div>
  );
}