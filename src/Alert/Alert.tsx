import React, { useState, ReactNode } from 'react';

type AlertColor = 'info' | 'warning' | 'danger' | 'success' | 'dark';

interface AlertProps {
  color?: AlertColor;
  icon?: boolean;
  border?: boolean;
  borderAccent?: boolean;
  dismissing?: boolean;
  className?: string;
  children: ReactNode;
}

const colorMap: Record<AlertColor, {
  bg: string;
  text: string;
  border: string;
  borderAccent: string;
}> = {
  info: {
    bg: 'bg-blue-50 dark:bg-gray-800',
    text: 'text-blue-800 dark:text-blue-400',
    border: 'border border-blue-300 dark:border-blue-800',
    borderAccent: 'border-t-4 border-blue-300 dark:border-blue-800',
  },
  warning: {
    bg: 'bg-yellow-50 dark:bg-gray-800',
    text: 'text-yellow-800 dark:text-yellow-400',
    border: 'border border-yellow-300 dark:border-yellow-800',
    borderAccent: 'border-t-4 border-yellow-300 dark:border-yellow-800',
  },
  danger: {
    bg: 'bg-red-50 dark:bg-gray-800',
    text: 'text-red-800 dark:text-red-400',
    border: 'border border-red-300 dark:border-red-800',
    borderAccent: 'border-t-4 border-red-300 dark:border-red-800',
  },
  success: {
    bg: 'bg-green-50 dark:bg-gray-800',
    text: 'text-green-800 dark:text-green-400',
    border: 'border border-green-300 dark:border-green-800',
    borderAccent: 'border-t-4 border-green-300 dark:border-green-800',
  },
  dark: {
    bg: 'bg-gray-50 dark:bg-gray-800',
    text: 'text-gray-800 dark:text-gray-300',
    border: 'border border-gray-300 dark:border-gray-600',
    borderAccent: 'border-t-4 border-gray-300 dark:border-gray-600',
  },
};

const iconMap: Record<AlertColor, JSX.Element> = {
  info: (
    <svg className="shrink-0 inline w-4 h-4 me-3" fill="currentColor" viewBox="0 0 512 512">
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24v-64h-48v-48h72v112h32v48h-128v-48h24zm72-144h-64v-64h64v64z"/>
    </svg>
  ),
  warning: (
    <svg className="shrink-0 inline w-4 h-4 me-3" fill="currentColor" viewBox="0 0 512 512">
      <path d="M256 5.7l11.5 4.4L475 90.2l19.2 7.4 1.2 20.6c2.9 49.7-4.9 125.6-37.3 199.8C425.4 392.8 367 467.1 268.6 509.4L256 514.8l-12.6-5.4C145 467.1 86.6 392.8 53.9 318C21.4 243.7 13.6 167.8 16.6 118.1l1.2-20.6L37 90.2l207.5-80L256 5.7zM280 128h-48v24v112v24h48v-24V152v-24zM232 320v48h48v-48h-48z"/>
    </svg>
  ),
  danger: (
    <svg className="shrink-0 inline w-4 h-4 me-3" fill="currentColor" viewBox="0 0 512 512">
      <path d="M256 32L0 480h512L256 32zm24 160v160h-48V192h48zm-48 192h48v48h-48v-48z"/>
    </svg>
  ),
  success: (
    <svg className="shrink-0 inline w-4 h-4 me-3" fill="currentColor" viewBox="0 0 512 512">
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337l-17 17-17-17-64-64L160 222l17 17 47 47 111-111 17 17z"/>
    </svg>
  ),
  dark: (
    <svg className="shrink-0 inline w-4 h-4 me-3" fill="currentColor" viewBox="0 0 512 512">
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24v-64h-48v-48h72v112h32v48h-128v-48h24zm72-144h-64v-64h64v64z"/>
    </svg>
  ),
};

const Alert: React.FC<AlertProps> = ({
  color = 'info',
  icon = false,
  border = false,
  borderAccent = false,
  dismissing = false,
  className = '',
  children,
}) => {
  const [visible, setVisible] = useState(true);
  const styles = colorMap[color] || colorMap.info;

  if (!visible) return null;

  const alertClasses = `
    flex items-start gap-2 p-4 mb-4 text-sm rounded-lg
    ${styles.bg} ${styles.text}
    ${border ? styles.border : ''}
    ${borderAccent ? styles.borderAccent : ''}
    ${className}
  `.trim();

  return (
    <div className={alertClasses} role="alert">
      {icon && <div>{iconMap[color]}</div>}
      <div className="flex-1">{children}</div>
      {dismissing && (
        <button
          onClick={() => setVisible(false)}
          className={`ms-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8 ${styles.text}`}
          aria-label="Close"
        >
          <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 384 512">
            <path d="M326.6 166.6 349.3 144 304 98.7l-22.6 22.6L192 210.7 102.6 121.3 80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;