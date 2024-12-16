import React from 'react';
import { Block as BlockType } from '../../types/blocks';
import { TextBlock } from './TextBlock';
import { ImageBlock } from './ImageBlock';
import { VideoBlock } from './VideoBlock';
import { TableBlock } from './TableBlock';
import { BlockControls } from './BlockControls';
import { useBlockDragAndDrop } from '../../hooks/useBlockDragAndDrop';

interface BlockProps {
  block: BlockType;
}

export function Block({ block }: BlockProps) {
  const { handleDragStart, handleDragOver, handleDrop } = useBlockDragAndDrop(block.id);

  const renderBlock = () => {
    switch (block.type) {
      case 'text':
        return <TextBlock block={block} />;
      case 'image':
        return <ImageBlock block={block} />;
      case 'video':
        return <VideoBlock block={block} />;
      case 'table':
        return <TableBlock block={block} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="relative group"
      data-block-id={block.id}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <BlockControls blockId={block.id} />
      {renderBlock()}
      <AddBlockButton position="after" blockId={block.id} />
    </div>
  );
}