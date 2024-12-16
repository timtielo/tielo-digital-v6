export interface EditorInstance {
  content: string;
  handleInput: (content: string) => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  execCommand: (command: string, value?: string) => void;
  
  // Text formatting
  toggleBold: () => void;
  toggleItalic: () => void;
  toggleUnderline: () => void;
  
  // Lists
  toggleBulletList: () => void;
  toggleNumberedList: () => void;
  
  // Alignment
  setAlignment: (align: 'left' | 'center' | 'right' | 'justify') => void;
  
  // Headings
  setHeading: (level: number) => void;
}