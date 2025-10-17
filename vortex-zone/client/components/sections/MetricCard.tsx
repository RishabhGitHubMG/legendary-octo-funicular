import React from 'react';

interface MetricCardProps {
  value: string | number;
  label: string;
  icon?: string | React.ReactNode;
  color?: 'coral' | 'teal' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function MetricCard({
  value,
  label,
  icon,
  color = 'coral',
  size = 'md',
  className = '',
}: MetricCardProps) {
  const sizeClasses = {
    sm: 'p-4',
    md: 'p-8',
    lg: 'p-12',
  };

  const bgClasses = {
    coral: 'bg-white border-warmgray-200',
    teal: 'bg-white border-warmgray-200',
    white: 'bg-white border-coral',
  };

  const textSizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-5xl',
  };

  return (
    <div className={`${sizeClasses[size]} bg-white rounded-xl border ${bgClasses[color]} text-center hover:shadow-lg hover:border-coral transition-all duration-300 ${className}`}>
      {icon && (
        <div className="mb-3 text-4xl">
          {typeof icon === 'string' ? icon : icon}
        </div>
      )}

      <div className={`${textSizeClasses[size]} font-bold text-${color} mb-2`}>
        {value}
      </div>

      <p className="text-warmgray-600 font-medium">
        {label}
      </p>
    </div>
  );
}
