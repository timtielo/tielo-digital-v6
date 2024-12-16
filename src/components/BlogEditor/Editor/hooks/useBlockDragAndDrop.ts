import { useCallback } from 'react';
import { useEditor } from '../context/EditorContext';

export function useBlockDragAndDrop(blockId: string) {
  const { dispatch } = useEditor();

  const handleDragStart = useCallback((e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', blockId);
    e.dataTransfer.effectAllowed = 'move';
  }, [blockId]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const sourceId = e.dataTransfer.getData('text/plain');
    const targetRect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const isBeforeMiddle = e.clientY < targetRect.top + targetRect.height / 2;

    dispatch({
      type: 'MOVE_BLOCK',
      payload: {
        sourceId,
        targetId: blockId,
        position: isBeforeMiddle ? 'before' : 'after'
      }
    });
  }, [blockId, dispatch]);

  return {
    handleDragStart,
    handleDragOver,
    handleDrop
  };
}