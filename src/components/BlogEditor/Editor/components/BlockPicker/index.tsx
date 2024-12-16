import React, { useRef, useEffect } from 'react';
import { Type, Image, Video, Table, List, Quote } from 'lucide-react';
import { useClickOutside } from '../../hooks/useClickOutside';

interface BlockPickerProps {
  onSelect: (type: string) => void;
  onClose: () => void;
}

const BLOCK_TYPES = [
  { type: 'text', icon: Type, label: 'Text' },
  { type: 'image', icon: Image, label: 'Image' },
  { type: 'video', icon: Video, label: 'Video' },
  { type: 'table', icon: Table, label: 'Table' },
  { type: 'list', icon: List, label: 'List' },
  { type: 'quote', icon: Quote, label: 'Quote' }
];

export function BlockPicker({ onSelect, onClose }: BlockPickerProps) {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, onClose);

  return (
    <div 
      ref={ref}
      className="absolute z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-2 w-64"
    >
      <div className="grid grid-cols-2 gap-2">
        {BLOCK_TYPES.map(({ type, icon: Icon, label }) => (
          <button
            key={type}
            className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => onSelect(type)}
          >
            <Icon className="w-5 h-5 text-gray-500" />
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}