import React from 'react';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react';
import { useEditor } from '../../context/EditorContext';
import { ToolbarButton } from './ToolbarButton';
import { HeadingSelect } from './HeadingSelect';

export function TextFormatting() {
  const { dispatch } = useEditor();

  const handleFormat = (command: string) => {
    document.execCommand(command, false);
  };

  return (
    <div className="flex items-center gap-1">
      <HeadingSelect />
      <ToolbarButton
        icon={Bold}
        onClick={() => handleFormat('bold')}
        tooltip="Bold (Ctrl+B)"
      />
      <ToolbarButton
        icon={Italic}
        onClick={() => handleFormat('italic')}
        tooltip="Italic (Ctrl+I)"
      />
      <ToolbarButton
        icon={Underline}
        onClick={() => handleFormat('underline')}
        tooltip="Underline (Ctrl+U)"
      />
      <div className="w-px h-6 bg-gray-200 mx-1" />
      <ToolbarButton
        icon={AlignLeft}
        onClick={() => handleFormat('justifyLeft')}
        tooltip="Align Left"
      />
      <ToolbarButton
        icon={AlignCenter}
        onClick={() => handleFormat('justifyCenter')}
        tooltip="Align Center"
      />
      <ToolbarButton
        icon={AlignRight}
        onClick={() => handleFormat('justifyRight')}
        tooltip="Align Right"
      />
      <ToolbarButton
        icon={AlignJustify}
        onClick={() => handleFormat('justifyFull')}
        tooltip="Justify"
      />
    </div>
  );
}