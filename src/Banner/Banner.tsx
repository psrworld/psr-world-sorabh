import React from 'react';

// Types
export type Position = 'top' | 'bottom';

export interface BannerProps {
  position?: Position;
  className?: string;
  children: React.ReactNode;
  onClose?: () => void;
  fixed?: boolean;
}

export interface BannerCtaProps {
  position?: Position;
  className?: string;
  children: React.ReactNode;
  onClose?: () => void;
  fixed?: boolean;
}

export interface BannerCloseProps {
  onClose: () => void;
  className?: string;
}

export interface BannerCloseCtaProps {
  onClose: () => void;
  className?: string;
}

export interface BannerBodyProps {
  children: React.ReactNode;
  className?: string;
}

export interface BannerBodyCtaProps {
  children: React.ReactNode;
  className?: string;
}

// Utility functions
const getBannerPositionClasses = (position: Position = 'top') => {
  const positionClass = position === 'top' ? 'top-0' : 'bottom-0';
  const borderClass = position === 'top' ? 'border-b' : 'border-t';
  return `${positionClass} ${borderClass}`;
};

const getBannerPositionCtaClasses = (position: Position = 'top') => {
  const positionClass = position === 'top' ? 'top-6' : 'bottom-6';
  return `${positionClass}`;
};

// Base classes
const baseClasses = 'start-0 flex justify-between w-full p-4 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-400';

const ctaClasses = 'flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 bg-white rounded-lg shadow-sm lg:max-w-7xl left-1/2 border dark:bg-gray-700 border-gray-300 dark:border-gray-400';

// Fixed positioning classes
const fixedClasses = 'fixed z-50';

// Banner Close Component
export const BannerClose: React.FC<BannerCloseProps> = ({
  onClose,
  className = ''
}) => {
  return (
    <button
      onClick={onClose}
      className={`ml-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors ${className}`}
      aria-label="Close banner"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

// Banner Close CTA Component
export const BannerCloseCta: React.FC<BannerCloseCtaProps> = ({
  onClose,
  className = ''
}) => {
  return (
    <button
      onClick={onClose}
      className={`fixed top-2 right-2 ml-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors flex-shrink-0 ${className}`}
      aria-label="Close banner"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

// Banner Body Component
export const BannerBody: React.FC<BannerBodyProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`flex items-center flex-1 ${className}`}>
      {children}
    </div>
  );
};

// Banner Body CTA Component
export const BannerBodyCta: React.FC<BannerBodyCtaProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`flex items-center flex-1 relative ${className}`}>
      {children}
    </div>
  );
};

// Banner Component
export const Banner: React.FC<BannerProps> = ({
  position = 'top',
  className = '',
  children,
  onClose,
  fixed = true
}) => {
  const positionClasses = getBannerPositionClasses(position);
  const positioningClasses = fixed ? fixedClasses : '';
  const combinedClasses = `${positioningClasses} ${baseClasses} ${positionClasses} ${className}`;

  return (
    <div className={combinedClasses}>
      <BannerBody>
        {children}
      </BannerBody>
      {onClose && <BannerClose onClose={onClose} />}
    </div>
  );
};

// Banner CTA Component
export const BannerCta: React.FC<BannerCtaProps> = ({
  position = 'top',
  className = '',
  children,
  onClose,
  fixed = true
}) => {
  const positionClasses = getBannerPositionCtaClasses(position);
  const positioningClasses = fixed ? fixedClasses : '';
  const combinedClasses = `${positioningClasses} ${ctaClasses} ${positionClasses} ${className}`;

  return (
    <div className={combinedClasses}>
      <BannerBodyCta>
        {children}
      </BannerBodyCta>
      {onClose && <BannerCloseCta onClose={onClose} />}
    </div>
  );
};

export default Banner;