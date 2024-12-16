import { Block } from './blocks';

export interface EditorState {
  content: string;
  selection: Selection | null;
  history: string[];
  historyIndex: number;
  blocks: Block[];
}

export type EditorAction =
  | { type: 'SET_CONTENT'; payload: string }
  | { type: 'SET_SELECTION'; payload: Selection }
  | { type: 'ADD_TO_HISTORY'; payload: string }
  | { type: 'UNDO' }
  | { type: 'REDO' }
  | { type: 'ADD_BLOCK'; payload: Block }
  | { type: 'REMOVE_BLOCK'; payload: string }
  | { type: 'MOVE_BLOCK'; payload: { id: string; direction: 'up' | 'down' } };