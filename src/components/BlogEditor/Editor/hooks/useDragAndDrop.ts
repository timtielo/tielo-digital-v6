import { useCallback } from 'react';
import { useEditor } from '../context/EditorContext';

export function useDragAndDrop() {
  const { dispatch } = useEditor();

  const handleDragStart = useCallback((e: React.DragEvent) => {
    const blockId = (e.target as HTMLElement).getAttribute('data-block-id');
    if (blockId) {
      e.dataTransfer.setData('text/plain', blockId);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const blockId = e.dataTransfer.getData('text/plain');
    const target = e.target as HTMLElement;
    const targetBlock = target.closest('[data-block-id]');
    
    if (blockId && targetBlock) {
      const targetId = targetBlock.getAttribute('data-block-id');
      if (targetId && blockId !== targetId) {
        // Calculate if dropping above or below target
        const rect = targetBlock.getBoundingClientRect();
        const isAbove = e.clientY < rect.top + rect.height / 2;
        
        dispatch({
          type: 'MOVE_BLOCK',
          payload: {
            id: blockId,
            direction: isAbove ? 'up' : 'down'
          }
        });
      }
    }
  }, [dispatch]);

  return {
    handleDragStart,
    handleDragOver,
    handleDrop
  };
}