import React, { createContext, useContext, useReducer } from 'react';
import { EditorState, EditorAction } from '../types';
import { editorReducer } from '../reducers/editorReducer';

const EditorContext = createContext<{
  state: EditorState;
  dispatch: React.Dispatch<EditorAction>;
} | null>(null);

export function EditorProvider({ 
  children, 
  initialContent,
  onChange 
}: { 
  children: React.ReactNode;
  initialContent: string;
  onChange: (content: string) => void;
}) {
  const [state, dispatch] = useReducer(editorReducer, {
    content: initialContent,
    selection: null,
    history: [initialContent],
    historyIndex: 0,
    blocks: []
  });

  // Update parent component when content changes
  React.useEffect(() => {
    onChange(state.content);
  }, [state.content, onChange]);

  return (
    <EditorContext.Provider value={{ state, dispatch }}>
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
}