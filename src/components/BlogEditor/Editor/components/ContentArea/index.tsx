import React, { useRef, useEffect } from 'react';
import { useEditor } from '../../context/EditorContext';
import { Block } from './Block';
import { useKeyboardShortcuts } from '../../hooks/useKeyboardShortcuts';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import './styles.css';

export function ContentArea() {
  const { state, dispatch } = useEditor();
  const contentRef = useRef<HTMLDivElement>(null);
  
  useKeyboardShortcuts(contentRef);
  const { handleDragStart, handleDragOver, handleDrop } = useDragAndDrop();

  return (
    <div 
      ref={contentRef}
      className="editor-content"
      contentEditable
      suppressContentEditableWarning
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {state.blocks.map((block) => (
        <Block key={block.id} block={block} />
      ))}
    </div>
  );
}