import React from 'react';
import { Bold, Italic, Underline, List, ListOrdered, Link, Image, Quote, Code, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { HeadingSelect } from './HeadingSelect';
import { ToolbarButton } from './ToolbarButton';
import { useEditor } from '../../hooks/useEditor';

export function EditorToolbar() {
  const { execCommand } = useEditor();

  return (
    <div className="border-b border-gray-200 bg-white p-2 flex items-center gap-2 flex-wrap">
      <HeadingSelect />
      
      <div className="w-px h-6 bg-gray-200" />
      
      <ToolbarButton
        icon={Bold}
        onClick={() => execCommand('bold')}
        tooltip="Bold (⌘B)"
      />
      <ToolbarButton
        icon={Italic}
        onClick={() => execCommand('italic')}
        tooltip="Italic (⌘I)"
      />
      <ToolbarButton
        icon={Underline}
        onClick={() => execCommand('underline')}
        tooltip="Underline (⌘U)"
      />
      
      <div className="w-px h-6 bg-gray-200" />
      
      <ToolbarButton
        icon={List}
        onClick={() => execCommand('insertUnorderedList')}
        tooltip="Bullet List"
      />
      <ToolbarButton
        icon={ListOrdered}
        onClick={() => execCommand('insertOrderedList')}
        tooltip="Numbered List"
      />
      
      <div className="w-px h-6 bg-gray-200" />
      
      <ToolbarButton
        icon={Link}
        onClick={() => execCommand('createLink')}
        tooltip="Insert Link (⌘K)"
      />
      <ToolbarButton
        icon={Image}
        onClick={() => execCommand('insertImage')}
        tooltip="Insert Image"
      />
      <ToolbarButton
        icon={Quote}
        onClick={() => execCommand('formatBlock', '<blockquote>')}
        tooltip="Quote"
      />
      <ToolbarButton
        icon={Code}
        onClick={() => execCommand('formatBlock', '<pre>')}
        tooltip="Code Block"
      />
      
      <div className="w-px h-6 bg-gray-200" />
      
      <ToolbarButton
        icon={AlignLeft}
        onClick={() => execCommand('justifyLeft')}
        tooltip="Align Left"
      />
      <ToolbarButton
        icon={AlignCenter}
        onClick={() => execCommand('justifyCenter')}
        tooltip="Align Center"
      />
      <ToolbarButton
        icon={AlignRight}
        onClick={() => execCommand('justifyRight')}
        tooltip="Align Right"
      />
    </div>
  );
}