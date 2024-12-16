import React from 'react';
import { ArrowUp, ArrowDown, Trash2, GripVertical } from 'lucide-react';
import { useEditor } from '../../context/EditorContext';

interface BlockControlsProps {
  blockId: string;
}

export function BlockControls({ blockId }: BlockControlsProps) {
  const { dispatch } = useEditor();

  return (
    <div className="absolute -left-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="flex flex-col items-center gap-1">
        <button
          className="p-1 hover:bg-gray-100 rounded"
          onClick={() => dispatch({ type: 'MOVE_BLOCK', payload: { id: blockId, direction: 'up' } })}
        >
          <ArrowUp className="w-4 h-4" />
        </button>
        <button
          className="p-1 hover:bg-gray-100 rounded cursor-move"
        >
          <GripVertical className="w-4 h-4" />
        </button>
        <button
          className="p-1 hover:bg-gray-100 rounded"
          onClick={() => dispatch({ type: 'MOVE_BLOCK', payload: { id: blockId, direction: 'down' } })}
        >
          <ArrowDown className="w-4 h-4" />
        </button>
        <button
          className="p-1 hover:bg-red-100 rounded text-red-500"
          onClick={() => dispatch({ type: 'REMOVE_BLOCK', payload: blockId })}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}