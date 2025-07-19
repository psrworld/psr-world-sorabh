import React, { useState } from 'react';

type BadgeVariant = 'default' | 'dark' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink';
type BadgeSize = 'xs' | 'sm';
type BadgeRounded = 'sm' | 'full';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  rounded?: BadgeRounded;
  icon?: React.ReactNode;
  link?: boolean;
  href?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
  onClick?: () => void;
  border?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  rounded = 'sm',
  icon,
  link = false,
  href = '',
  dismissible = false,
  onDismiss,
  className = '',
  onClick,
  border = false,
}) => {
  const [visible, setVisible] = useState(true);

  const variants = {
    default: {
      color: "bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400",
      border: "border border-blue-400",
    },
    dark: {
      color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400",
      border: "border border-gray-400",
    },
    red: {
      color: "bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400",
      border: "border border-red-400",
    },
    green: {
      color: "bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400",
      border: "border border-green-400",
    },
    yellow: {
      color: "bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-400",
      border: "border border-yellow-400",
    },
    indigo: {
      color: "bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400",
      border: "border border-indigo-400",
    },
    purple: {
      color: "bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400",
      border: "border border-purple-400",
    },
    pink: {
      color: "bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400",
      border: "border border-pink-400",
    },
  };

  const base = "me-2 inline-flex items-center font-medium";
  const baseLink = "me-2 font-medium inline-flex items-center justify-center";
  const baseDismissible = "inline-flex items-center px-2 py-1 me-2 font-medium";

  const sizes = {
    xs: "text-xs",
    sm: "text-sm"
  };

  const roundedClasses = {
    sm: "rounded-sm",
    full: "rounded-full"
  };

  const getBaseClass = () => {
    if (dismissible) return baseDismissible;
    if (link) return baseLink;
    return base;
  };

  const badgeClasses = [
    getBaseClass(),
    variants[variant].color,
    border ? variants[variant].border : '',
    sizes[size],
    roundedClasses[rounded],
    rounded === 'full' ? 'p-1' : 'px-2.5 py-0.5',
    className,
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (onClick) onClick();
  };

  const handleDismiss = () => {
    setVisible(false);
    if (onDismiss) onDismiss();
  };

  if (!visible) return null;

  if (link) {
    return (
      <a
        href={href}
        className={badgeClasses}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon && icon}
        {children}
        {dismissible && (
          <button
            type="button"
            className="inline-flex items-center p-1 ms-2 text-sm hover:bg-blue-200 rounded-full dark:hover:bg-gray-600"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleDismiss();
            }}
            aria-label="Remove badge"
          >
            <svg className="w-2 h-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
          </button>
        )}
      </a>
    );
  }

  return (
    <span
      className={badgeClasses}
      onClick={onClick ? handleClick : undefined}
      style={onClick ? { cursor: 'pointer' } : undefined}
    >
      {icon && icon}
      {children}
      {dismissible && (
        <button
          type="button"
          className="inline-flex items-center p-1 ms-2 text-sm hover:bg-blue-200 rounded-full dark:hover:bg-gray-600"
          onClick={(e) => {
            e.stopPropagation();
            handleDismiss();
          }}
          aria-label="Remove badge"
        >
          <svg className="w-2 h-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Badge;