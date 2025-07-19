// Accordion/Accordion.tsx
import React, { useState } from 'react';

// Type definitions
export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  icon?: boolean;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  onToggle?: (isOpen: boolean) => void;
}

export interface AccordionProps {
  children: React.ReactNode;
  allowMultiple?: boolean;
  defaultOpenItems?: number[];
  icon?: boolean;
  className?: string;
  activeClasses?: string;
  variant?: 'default' | 'colored';
}

// Individual Accordion Item Component
export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen = false,
  icon = false,
  className = '',
  headerClassName = '',
  contentClassName = '',
  onToggle
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(isOpen);
  const actualIsOpen = onToggle ? isOpen : internalIsOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle(!actualIsOpen);
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  return (
    <div className={className}>
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${headerClassName}`}
          onClick={handleToggle}
          aria-expanded={actualIsOpen}
        >
          <span>{title}</span>
          {icon && (
            <svg
              className={`w-3 h-3 shrink-0 transition-transform duration-200 ${
                actualIsOpen ? '' : 'rotate-180'
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          )}
        </button>
      </h2>
      <div className={actualIsOpen ? 'block' : 'hidden'}>
        <div className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 ${contentClassName}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

// Main Accordion Component
const Accordion: React.FC<AccordionProps> = ({
  children,
  allowMultiple = false,
  defaultOpenItems = [],
  icon = false,
  className = '',
  activeClasses = 'bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white',
  variant = 'default'
}) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set(defaultOpenItems));
  
  const childrenArray = React.Children.toArray(children);

  const handleItemToggle = (index: number, isOpen: boolean) => {
    const newOpenItems = new Set(openItems);
    
    if (isOpen) {
      if (!allowMultiple) {
        newOpenItems.clear();
      }
      newOpenItems.add(index);
    } else {
      newOpenItems.delete(index);
    }
    
    setOpenItems(newOpenItems);
  };

  const getItemClasses = (index: number, isFirst: boolean, isLast: boolean) => {
    const baseClasses = '';
    const firstItemClasses = isFirst ? 'rounded-t-xl' : '';
    const lastItemClasses = isLast ? 'rounded-b-xl' : '';
    
    return `${baseClasses} ${firstItemClasses} ${lastItemClasses}`;
  };

  const getHeaderClasses = (index: number, isFirst: boolean, isLast: boolean) => {
    const isOpen = openItems.has(index);
    const baseClasses = 'flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3';
    
    const firstItemClasses = isFirst ? 'rounded-t-xl' : '';
    const lastItemClasses = isLast && !isOpen ? 'border-b rounded-b-xl' : '';
    
    const variantClasses = variant === 'colored' ? 'focus:ring-blue-200 dark:focus:ring-blue-800 hover:bg-blue-100' : 'focus:ring-gray-200 dark:focus:ring-gray-800';
    
    const activeClassesApplied = isOpen ? activeClasses : '';
    
    return `${baseClasses} ${firstItemClasses} ${lastItemClasses} ${variantClasses} ${activeClassesApplied}`;
  };

  const getContentClasses = (index: number, isLast: boolean) => {
    const baseClasses = 'p-5 border border-gray-200 dark:border-gray-700';
    const lastItemClasses = isLast ? 'border-b rounded-b-xl' : 'border-b-0';
    const darkBg = variant === 'default' ? 'dark:bg-gray-900' : '';
    
    return `${baseClasses} ${lastItemClasses} ${darkBg}`;
  };

  return (
    <div className={className}>
      {childrenArray.map((child, index) => {
        if (React.isValidElement(child)) {
          const isFirst = index === 0;
          const isLast = index === childrenArray.length - 1;
          const isOpen = openItems.has(index);
          
          return React.cloneElement(child, {
            key: index,
            isOpen,
            icon,
            onToggle: (open: boolean) => handleItemToggle(index, open),
            className: getItemClasses(index, isFirst, isLast),
            headerClassName: getHeaderClasses(index, isFirst, isLast),
            contentClassName: getContentClasses(index, isLast),
            ...child.props
          });
        }
        return child;
      })}
    </div>
  );
};

export default Accordion;