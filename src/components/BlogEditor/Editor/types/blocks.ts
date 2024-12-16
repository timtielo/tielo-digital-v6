export interface BaseBlock {
  id: string;
  type: 'text' | 'image' | 'video' | 'table';
  position: number;
}

export interface TextBlock extends BaseBlock {
  type: 'text';
  content: string;
  format: {
    type: 'paragraph' | 'heading' | 'list';
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    listType?: 'bullet' | 'number' | 'check';
  };
}

export interface ImageBlock extends BaseBlock {
  type: 'image';
  url: string;
  alt: string;
  caption?: string;
  alignment: 'left' | 'center' | 'right';
  size: {
    width: number;
    height: number;
  };
}

export interface VideoBlock extends BaseBlock {
  type: 'video';
  url: string;
  provider: 'youtube' | 'vimeo';
  thumbnail?: string;
}

export interface TableBlock extends BaseBlock {
  type: 'table';
  rows: number;
  columns: number;
  data: string[][];
  header?: boolean;
}

export type Block = TextBlock | ImageBlock | VideoBlock | TableBlock;