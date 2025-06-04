import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  footer?: React.ReactNode;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  title,
  subtitle,
  footer,
  hoverable = false,
}) => {
  const baseStyles = 'bg-white rounded-lg shadow overflow-hidden';
  const hoverStyles = hoverable ? 'transition duration-300 hover:shadow-lg' : '';
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {(title || subtitle) && (
        <div className="px-6 py-4 border-b border-gray-200">
          {title && <h3 className="text-lg font-semibold text-gray-900">{title}</h3>}
          {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
        </div>
      )}
      <div className="px-6 py-4">{children}</div>
      {footer && <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">{footer}</div>}
    </div>
  );
};

export default Card;