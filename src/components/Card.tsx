import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'feature' | 'glass' | 'outline';
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  hover = true,
  style,
}) => {
  const baseStyles = 'rounded-xl p-6 transition-all duration-300';
  
  const variantStyles = {
    default: 'bg-white border border-gray-100 shadow-md',
    feature: 'bg-white border border-gray-100 shadow-md',
    glass: 'bg-white/90 backdrop-blur-md border border-gray-100 shadow-xl',
    outline: 'bg-white border border-gray-200 shadow-sm',
  };
  
  const hoverStyles = hover ? 'hover:shadow-lg hover:border-blue-500/30 hover:-translate-y-1' : '';
  
  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;
