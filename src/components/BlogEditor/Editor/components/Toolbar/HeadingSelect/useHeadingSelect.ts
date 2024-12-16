import { useState, useEffect, useRef, useCallback } from 'react';
import { useEditor } from '../../../context/EditorContext';
import { HEADING_OPTIONS } from './constants';
import { HeadingOptionType } from './types';
import { getSelectionParentElement } from '../../../utils/selection';

export function useHeadingSelect() {
  const { dispatch } = useEditor();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHeading, setSelectedHeading] = useState(HEADING_OPTIONS[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const updateSelectedHeading = useCallback(() => {
    const parentElement = getSelectionParentElement();
    if (!parentElement) return;

    const tag = parentElement.tagName.toLowerCase();
    const option = HEADING_OPTIONS.find(opt => opt.tag === tag);
    
    if (option) {
      setSelectedHeading(option);
    } else {
      setSelectedHeading(HEADING_OPTIONS[0]); // Default to normal text
    }
  }, []);

  // Update heading selection when cursor moves
  useEffect(() => {
    const handleSelectionChange = () => {
      updateSelectedHeading();
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    return () => document.removeEventListener('selectionchange', handleSelectionChange);
  }, [updateSelectedHeading]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey) {
        const key = e.key;
        const option = HEADING_OPTIONS.find(opt => opt.shortcut?.includes(key));
        
        if (option) {
          e.preventDefault();
          handleHeadingChange(option);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleHeadingChange = (option: HeadingOptionType) => {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const parentElement = range.commonAncestorContainer.parentElement;
    if (!parentElement) return;

    // Create new element with selected heading type
    const newElement = document.createElement(option.tag);
    newElement.innerHTML = parentElement.innerHTML;
    
    // Replace old element with new one
    parentElement.parentNode?.replaceChild(newElement, parentElement);
    
    setSelectedHeading(option);
    setIsOpen(false);

    // Update editor state
    dispatch({
      type: 'SET_CONTENT',
      payload: document.querySelector('.editor-content')?.innerHTML || ''
    });
  };

  return {
    isOpen,
    selectedHeading,
    headingOptions: HEADING_OPTIONS,
    toggleDropdown,
    handleHeadingChange,
    dropdownRef
  };
}