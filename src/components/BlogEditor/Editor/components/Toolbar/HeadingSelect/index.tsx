import React from 'react';
import { useHeadingSelect } from './useHeadingSelect';
import { HeadingOption } from './HeadingOption';
import { ChevronDown } from 'lucide-react';

export function HeadingSelect() {
  const {
    isOpen,
    selectedHeading,
    headingOptions,
    toggleDropdown,
    handleHeadingChange,
    dropdownRef
  } = useHeadingSelect();

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 
                 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        <span className="text-sm font-medium min-w-[80px] text-left">
          {selectedHeading.label}
        </span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg 
                      border border-gray-200 py-1 z-50">
          {headingOptions.map((option) => (
            <HeadingOption
              key={option.value}
              option={option}
              isSelected={option.value === selectedHeading.value}
              onClick={() => handleHeadingChange(option)}
            />
          ))}
        </div>
      )}
    </div>
  );
}