import React from 'react';
import { Check } from 'lucide-react';
import { HeadingOptionType } from './types';

interface HeadingOptionProps {
  option: HeadingOptionType;
  isSelected: boolean;
  onClick: () => void;
}

export function HeadingOption({ option, isSelected, onClick }: HeadingOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full px-4 py-2 text-left flex items-center justify-between
                hover:bg-gray-50 ${isSelected ? 'bg-gray-50' : ''}`}
    >
      <span className={option.className}>
        {option.label}
      </span>
      {isSelected && (
        <Check className="w-4 h-4 text-primary" />
      )}
    </button>
  );
}