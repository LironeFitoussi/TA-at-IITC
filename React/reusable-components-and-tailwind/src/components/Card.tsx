import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  padding?: 'small' | 'medium' | 'large';
}

function Card({ 
  children, 
  title, 
  className = "",
  padding = "medium" 
}: CardProps) {
  const paddingClass = `card-padding-${padding}`;
  
  return (
    <div className={`card ${paddingClass} ${className}`}>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default Card; 