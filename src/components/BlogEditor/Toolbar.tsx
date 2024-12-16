import React from 'react';
import { 
  Bold, Italic, Underline, List, 
  ListOrdered, AlignLeft, AlignCenter, 
  AlignRight, AlignJustify 
} from 'lucide-react';

export function Toolbar() {
  return (
    <div className="flex flex-wrap gap-1 p-2 border-b bg-gray-50">
      <select 
        className="px-3 py-1.5 bg-white border border-gray-200 rounded text-sm 
                   focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="p">Normaal</option>
        <option value="h1">Kop 1</option>
        <option value="h2">Kop 2</option>
        <option value="h3">Kop 3</option>
        <option value="h4">Kop 4</option>
      </select>

      <div className="w-px h-6 bg-gray-300 mx-1" />
      
      <button className="p-2 hover:bg-gray-200 rounded">
        <Bold className="w-4 h-4" />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded">
        <Italic className="w-4 h-4" />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded">
        <Underline className="w-4 h-4" />
      </button>

      <div className="w-px h-6 bg-gray-300 mx-1" />

      <button className="p-2 hover:bg-gray-200 rounded">
        <List className="w-4 h-4" />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded">
        <ListOrdered className="w-4 h-4" />
      </button>

      <div className="w-px h-6 bg-gray-300 mx-1" />

      <button className="p-2 hover:bg-gray-200 rounded">
        <AlignLeft className="w-4 h-4" />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded">
        <AlignCenter className="w-4 h-4" />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded">
        <AlignRight className="w-4 h-4" />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded">
        <AlignJustify className="w-4 h-4" />
      </button>
    </div>
  );
}