import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  variant = 'default',
  className = '',
}) => {
  const baseClasses = 'rounded-xl p-6 transition-all duration-200';
  
  const variantClasses = {
    default: 'bg-white border border-gray-200 shadow-sm',
    elevated: 'bg-white shadow-lg hover:shadow-xl',
    outlined: 'bg-white border-2 border-gray-300'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div className={classes}>
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-gray-600 text-sm">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  );
};

export default Card; 