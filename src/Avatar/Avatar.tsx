// Avatar/Avatar.tsx
import React from 'react';

// Type definitions
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarShape = 'rounded' | 'square';
export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy';
export type StatusPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  status?: AvatarStatus;
  statusPosition?: StatusPosition;
  bordered?: boolean;
  className?: string;
  onClick?: () => void;
}

export interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number;
  className?: string;
}

export interface AvatarGroupCounterProps {
  count: number;
  href?: string;
  onClick?: () => void;
}

export interface UserAvatarProps extends AvatarProps {
  name?: string;
  subtitle?: string;
  showInfo?: boolean;
}

const sizeClasses: Record<AvatarSize, string> = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-20 h-20',
  xl: 'w-36 h-36'
};

const shapeClasses: Record<AvatarShape, string> = {
  rounded: 'rounded-full',
  square: 'rounded-sm'
};

const statusClasses: Record<AvatarStatus, string> = {
  online: 'bg-green-400',
  offline: 'bg-gray-400',
  away: 'bg-yellow-400',
  busy: 'bg-red-400'
};

const statusPositionClasses: Record<StatusPosition, string> = {
  'top-left': 'top-0 left-0 transform -translate-x-1/2 -translate-y-1/2',
  'top-right': 'top-0 right-0 transform translate-x-1/2 -translate-y-1/2',
  'bottom-left': 'bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2',
  'bottom-right': 'bottom-0 right-0 transform translate-x-1/2 translate-y-1/2'
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  initials,
  size = 'md',
  shape = 'rounded',
  status,
  statusPosition = 'top-right',
  bordered = false,
  className = '',
  onClick
}) => {
  const baseClasses = `${sizeClasses[size]} ${shapeClasses[shape]} ${
    bordered ? 'ring-2 ring-gray-300 dark:ring-gray-500' : ''
  } ${onClick ? 'cursor-pointer' : ''} ${className}`;

  const renderAvatar = () => {
    if (src) {
      return (
        <img
          className={baseClasses}
          src={src}
          alt={alt}
          onClick={onClick}
        />
      );
    }

    if (initials) {
      return (
        <div
          className={`${baseClasses} bg-gray-100 dark:bg-gray-600 flex items-center justify-center overflow-hidden`}
          onClick={onClick}
        >
          <span className="font-medium text-gray-600 dark:text-gray-300">
            {initials}
          </span>
        </div>
      );
    }

    // Default avatar with user icon
    return (
      <div
        className={`${baseClasses} bg-gray-100 dark:bg-gray-600 flex items-center justify-center overflow-hidden`}
        onClick={onClick}
      >
        <svg
          className="w-3/4 h-3/4 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  };

  if (status) {
    return (
      <div className="relative inline-block">
        {renderAvatar()}
        <span
          className={`absolute w-3.5 h-3.5 border-2 border-white dark:border-gray-800 rounded-full ${
            statusClasses[status]
          } ${statusPositionClasses[statusPosition]}`}
        />
      </div>
    );
  }

  return renderAvatar();
};

// AvatarGroup Component
export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  max = 4,
  className = ''
}) => {
  const childrenArray = React.Children.toArray(children);
  const visibleChildren = childrenArray.slice(0, max);
  const remainingCount = childrenArray.length - max;

  return (
    <div className={`flex -space-x-4 rtl:space-x-reverse ${className}`}>
      {visibleChildren.map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            key: index,
            className: `border-2 border-white dark:border-gray-800 ${child.props.className || ''}`,
            ...child.props
          });
        }
        return child;
      })}
      {remainingCount > 0 && (
        <div className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800">
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

// AvatarGroupCounter Component
export const AvatarGroupCounter: React.FC<AvatarGroupCounterProps> = ({
  count,
  href,
  onClick
}) => {
  const content = (
    <div className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800">
      +{count}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="inline-block">
        {content}
      </button>
    );
  }

  return content;
};

// UserAvatar Component
export const UserAvatar: React.FC<UserAvatarProps> = ({
  name,
  subtitle,
  showInfo = false,
  ...avatarProps
}) => {
  if (!showInfo) {
    return <Avatar {...avatarProps} />;
  }

  return (
    <div className="flex items-center gap-4">
      <Avatar {...avatarProps} />
      <div className="font-medium dark:text-white">
        {name && <div>{name}</div>}
        {subtitle && (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
};

export default Avatar;